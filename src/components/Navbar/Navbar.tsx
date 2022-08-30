import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

const Navbar: React.FC = () => (
  <header className="flex justify-center w-full h-[13.1rem] md:h-[24.3rem]">
    <nav className="flex items-center justify-between w-full h-full max-w-[144rem] px-[2.4rem] md:px-[4rem] lg:px-[11rem]">
      <NavbarLogo />
      <NavbarMenu />
    </nav>
  </header>
);

export default Navbar;
