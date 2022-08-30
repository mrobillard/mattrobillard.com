import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarMenu: React.FC = () => {
  const router = useRouter();
  const isWritingActive = router.pathname.startsWith('/writing');
  const isTechnicalActive = router.pathname.startsWith('/technical');
  const isContact = router.pathname.startsWith('/contact');

  return (
    <ul className="flex flex-col gap-[1rem] pr-[2rem]">
      <li>
        <Link href="/writing" passHref>
          <a
            className={clsx({
              'w-[9rem] inline-flex items-center justify-end relative': true,
              'font-barlow font-medium not-italic': true,
              'text-prussian-blue text-[1.6rem] text-right': true,
              'leading-[1.2rem] tracking-[0.05em] uppercase': true,
              "after:content-[''] after:block after:absolute": true,
              'after:right-[-2rem] after:w-[1rem] after:h-[0.1rem]': true,
              'hover:after:bg-prussian-blue transition-all': true,
              'after:bg-prussian-blue': isWritingActive,
            })}
          >
            Writing
          </a>
        </Link>
      </li>
      <li>
        <Link href="/technical" passHref>
          <a
            className={clsx({
              'w-[9rem] inline-flex items-center justify-end relative': true,
              'font-barlow font-medium not-italic': true,
              'text-prussian-blue text-[1.6rem] text-right': true,
              'leading-[1.2rem] tracking-[0.05em] uppercase': true,
              "after:content-[''] after:block after:absolute": true,
              'after:right-[-2rem] after:w-[1rem] after:h-[0.1rem]': true,
              'hover:after:bg-prussian-blue transition-all': true,
              'after:bg-prussian-blue': isTechnicalActive,
            })}
          >
            Technical
          </a>
        </Link>
      </li>
      <li>
        <Link href="/contact" passHref>
          <a
            className={clsx({
              'w-[9rem] inline-flex items-center justify-end relative': true,
              'font-barlow font-medium not-italic': true,
              'text-prussian-blue text-[1.6rem] text-right': true,
              'leading-[1.2rem] tracking-[0.05em] uppercase': true,
              "after:content-[''] after:block after:absolute": true,
              'after:right-[-2rem] after:w-[1rem] after:h-[0.1rem]': true,
              'hover:after:bg-prussian-blue transition-all': true,
              'after:bg-prussian-blue': isContact,
            })}
          >
            Contact
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMenu;
