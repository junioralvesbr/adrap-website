"use client"

import React from "react"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const renderMarkdown = (text: string) => {
    const lines = text.trim().split("\n")
    const elements: React.ReactNode[] = []
    let i = 0
    let listItems: string[] = []
    let isInTable = false
    let tableRows: string[][] = []
    let isBlockquote = false
    let blockquoteContent: string[] = []

    const processInline = (line: string): React.ReactNode => {
      const parts: React.ReactNode[] = []
      let remaining = line
      let key = 0

      while (remaining.length > 0) {
        // Bold
        const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
        if (boldMatch && boldMatch.index !== undefined) {
          if (boldMatch.index > 0) {
            parts.push(remaining.slice(0, boldMatch.index))
          }
          parts.push(<strong key={key++}>{boldMatch[1]}</strong>)
          remaining = remaining.slice(boldMatch.index + boldMatch[0].length)
          continue
        }

        // Italic
        const italicMatch = remaining.match(/\*(.+?)\*/)
        if (italicMatch && italicMatch.index !== undefined) {
          if (italicMatch.index > 0) {
            parts.push(remaining.slice(0, italicMatch.index))
          }
          parts.push(<em key={key++}>{italicMatch[1]}</em>)
          remaining = remaining.slice(italicMatch.index + italicMatch[0].length)
          continue
        }

        parts.push(remaining)
        break
      }

      return parts.length === 1 ? parts[0] : parts
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, idx) => (
              <li key={idx}>{processInline(item)}</li>
            ))}
          </ul>
        )
        listItems = []
      }
    }

    const flushTable = () => {
      if (tableRows.length > 0) {
        const header = tableRows[0]
        const body = tableRows.slice(2) // Skip header and separator
        elements.push(
          <div key={elements.length} className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {header.map((cell, idx) => (
                    <th key={idx} className="text-left py-3 px-4 font-semibold text-foreground">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-border/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-3 px-4 text-muted-foreground">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        tableRows = []
        isInTable = false
      }
    }

    const flushBlockquote = () => {
      if (blockquoteContent.length > 0) {
        elements.push(
          <blockquote key={elements.length} className="border-l-4 border-primary pl-6 py-2 my-6 italic text-muted-foreground bg-muted/30 rounded-r-lg pr-4">
            {blockquoteContent.map((line, idx) => (
              <p key={idx}>{processInline(line)}</p>
            ))}
          </blockquote>
        )
        blockquoteContent = []
        isBlockquote = false
      }
    }

    while (i < lines.length) {
      const line = lines[i]

      // Empty line
      if (line.trim() === "") {
        flushList()
        flushTable()
        flushBlockquote()
        i++
        continue
      }

      // Blockquote
      if (line.trim().startsWith(">")) {
        flushList()
        flushTable()
        isBlockquote = true
        blockquoteContent.push(line.trim().slice(1).trim())
        i++
        continue
      }

      if (isBlockquote && !line.trim().startsWith(">")) {
        flushBlockquote()
      }

      // Table
      if (line.includes("|")) {
        flushList()
        flushBlockquote()
        isInTable = true
        const cells = line.split("|").filter((c) => c.trim() !== "")
        tableRows.push(cells)
        i++
        continue
      }

      if (isInTable && !line.includes("|")) {
        flushTable()
      }

      // Headers
      if (line.startsWith("### ")) {
        flushList()
        flushTable()
        flushBlockquote()
        elements.push(
          <h3 key={elements.length} className="text-xl font-bold text-foreground mt-8 mb-4">
            {processInline(line.slice(4))}
          </h3>
        )
        i++
        continue
      }

      if (line.startsWith("## ")) {
        flushList()
        flushTable()
        flushBlockquote()
        elements.push(
          <h2 key={elements.length} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {processInline(line.slice(3))}
          </h2>
        )
        i++
        continue
      }

      if (line.startsWith("#### ")) {
        flushList()
        flushTable()
        flushBlockquote()
        elements.push(
          <h4 key={elements.length} className="text-lg font-bold text-foreground mt-6 mb-3">
            {processInline(line.slice(5))}
          </h4>
        )
        i++
        continue
      }

      // List items
      if (line.trim().startsWith("- ")) {
        flushTable()
        flushBlockquote()
        listItems.push(line.trim().slice(2))
        i++
        continue
      }

      // Regular paragraph
      flushList()
      flushTable()
      flushBlockquote()
      elements.push(
        <p key={elements.length} className="text-muted-foreground mb-4 leading-relaxed">
          {processInline(line)}
        </p>
      )
      i++
    }

    flushList()
    flushTable()
    flushBlockquote()

    return elements
  }

  return <div className={`prose-custom ${className}`}>{renderMarkdown(content)}</div>
}
