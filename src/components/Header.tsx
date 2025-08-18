import { NavBar } from '@/components/NavBar/NavBar';
// import { Logo } from '@app/components/Logo/Logo';
import Link from 'next/link';

const Header = () => (
  <>
    <header
      className="w-full my-6 px-2 sm:px-8"
    >
      <div className="flex sm:px-6 sm:px-14 h-header sm:items-center sm:gap-4 sm:gap-8">
        <h2 className="flex-1">
          <Link
            href="/"
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
          >
            {/* <Logo /> */}
            <div>
              <span className="block font-site">ChoosEquality</span>
              <span className="text-xs">Education for All</span>
            </div>
          </Link>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
);

export default Header;
