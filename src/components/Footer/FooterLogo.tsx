import Image from 'next/image';

import Logo from '@images/logo-mark.webp';

const FooterLogo: React.FC = () => (
  <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-[4.9rem] md:gap-[5rem]">
    <div className="relative w-[3.9rem] h-[6.9rem] md:w-[4.8rem] md:h-[8.7rem]">
      <Image
        src={Logo}
        quality={100}
        alt="Matt Robillard"
        layout="fill"
        placeholder="blur"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
    <p className="font-barlow font-normal not-italic text-[1rem] leading-[1.8rem] tracking-[0.1em] text-prussian-blue text-center md:max-w-[14.3rem] md:text-right">
      {`©${new Date().getFullYear()} Matthew Robillard. All rights reserved.`}
    </p>
  </div>
);

export default FooterLogo;
