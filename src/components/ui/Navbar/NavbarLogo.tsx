import Image from 'next/image';

import Logo from '@images/logo.webp';

const NavbarLogo: React.FC = () => (
  <span className="relative block w-[22rem] h-[6.9rem] md:w-[26.5rem] md:h-[8.3rem]">
    <Image
      src={Logo}
      quality={100}
      alt="Matt Robillard"
      layout="fill"
      objectFit="contain"
      objectPosition="center"
    />
  </span>
);

export default NavbarLogo;
