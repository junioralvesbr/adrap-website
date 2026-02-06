'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
// import { Input } from "@/components/ui/input"
import { Building2, Check, Copy, FileText, Heart, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const ADRAP_INFO = {
  razaoSocial: 'ADRAP - Associação das Ruas ao Palácio',
  cnpj: '43.556.012/0001-00',
  chavePix: '43556012000100',
}

export default function DonationModal({
  children,
}: {
  children: React.ReactNode
}) {
  const [copied, setCopied] = useState(false)

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(ADRAP_INFO.chavePix)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy PIX key:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className='max-h-[95vh] w-[95vw] gap-0 overflow-y-auto border-0 p-0 sm:max-w-lg md:max-w-xl lg:max-w-2xl'
        showCloseButton={false}
      >
        <DialogClose asChild>
          <Button
            size='icon'
            className='text-muted hover:text-muted/50 absolute top-4 right-4 z-10 cursor-pointer'
          >
            <X className='size-7' />
          </Button>
        </DialogClose>
        <DialogHeader className='bg-primary text-primary-foreground p-6 md:p-8'>
          <DialogTitle className='flex items-center justify-center gap-3 text-center text-xl font-bold md:text-3xl'>
            <Heart className='h-8 w-8 fill-current' />
            Faça sua Doação
          </DialogTitle>
          <DialogDescription className='text-primary-foreground/90 mt-2 text-center text-sm md:text-base'>
            Sua contribuição transforma vidas !!
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4 p-4 md:p-4'>
          {/* Informações da ADRAP */}
          <div className='bg-muted/50 space-y-3 rounded-xl p-4 md:p-5'>
            <div className='flex items-start gap-3'>
              <Building2 className='text-primary mt-0.5 h-5 w-5 shrink-0' />
              <div>
                <p className='text-muted-foreground text-xs tracking-wide uppercase'>
                  Razão Social
                </p>
                <p className='text-foreground font-semibold'>
                  {ADRAP_INFO.razaoSocial}
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <FileText className='text-primary mt-0.5 h-5 w-5 shrink-0' />
              <div>
                <p className='text-muted-foreground text-xs tracking-wide uppercase'>
                  CNPJ
                </p>
                <p className='text-foreground font-mono font-semibold'>
                  {ADRAP_INFO.cnpj}
                </p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className='flex flex-col items-center'>
            <div className='bg-card border-border rounded-2xl border-2 p-4 shadow-sm md:p-6'>
              <div className='bg-muted relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl md:h-56 md:w-56'>
                {/* QR Code placeholder - em produção, usar biblioteca como qrcode.react */}
                <Image
                  src='/images/qr-code.jpeg'
                  alt='QR Code'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
            <p className='text-muted-foreground mt-3 text-center text-sm'>
              Escaneie o QR Code com o app do seu banco
            </p>
          </div>

          {/* Chave PIX */}
          <div className='space-y-2'>
            <p className='text-muted-foreground text-center text-sm font-medium'>
              Ou copie a chave PIX (CNPJ: {ADRAP_INFO.cnpj})
            </p>
            <div className='bg-muted flex items-center gap-2 rounded-xl p-3 md:p-4'>
              <code className='text-foreground flex-1 text-center font-mono text-sm break-all md:text-base'>
                {ADRAP_INFO.chavePix}
              </code>
              <Button
                variant='outline'
                size='sm'
                onClick={handleCopyPix}
                className={cn(
                  'shrink-0 cursor-pointer gap-2 transition-all',
                  copied && 'bg-primary text-primary-foreground border-primary'
                )}
              >
                {copied ? (
                  <>
                    <Check className='h-4 w-4' />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className='h-4 w-4' />
                    Copiar
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Mensagem */}
          <div className='border-border border-t pt-4 text-center'>
            <p className='text-muted-foreground text-sm'>
              Agradecemos imensamente sua generosidade!
            </p>
            <p className='text-muted-foreground mt-1 text-xs'>
              Sua doação é destinada integralmente aos nossos projetos sociais.
            </p>
          </div>
        </div>

        <DialogFooter className='py-4 sm:justify-center'>
          <DialogClose asChild>
            <Button
              variant='outline'
              size='lg'
              className='mx-auto max-w-56 cursor-pointer'
            >
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
