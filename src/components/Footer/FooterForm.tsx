import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';

const FooterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validator = (await import('validator')).default;
    const isValidEmail = validator.isEmail(email);

    setInvalid(!isValidEmail);

    if (!isValidEmail) return;

    // TODO: footer form API
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setInvalid(false);
  };

  return (
    <form
      className="flex flex-col w-[30rem] gap-[2rem] md:w-[36rem] md:gap-[4rem]"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="contact"
        className={clsx({
          'inline-flex w-full justify-center md:justify-start': true,
          'font-semibold md:text-[1.6rem] md:leading-[1.2rem]': true,
          'font-barlow md:tracking-[0.05em] text-prussian-blue uppercase': true,
          'transition-all text-[1rem] leading-[2.8rem] tracking-[0.1em]': true,
          'text-red-400': invalid,
        })}
      >
        contact@mattrobillard.com
      </label>
      <div className="flex items-center w-full h-[2.6rem]">
        <input
          id="contact"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email for updates"
          className={clsx({
            'inline-flex pb-[1.2rem] pr-[0.5rem] grow h-full': true,
            'bg-cultured border-b border-b-prussian-blue': true,
            'font-barlow font-normal not-italic text-[1.3rem]': true,
            'leading-[1.3rem] tracking-[0.1em] transition-all': true,
            'placeholder:text-blue-gray placeholder:text-opacity-30': true,
            'text-red-400': invalid,
            'placeholder:text-red-400 placeholder:text-opacity-100': invalid,
            'border-b-red-400': invalid,
          })}
        />
        <button
          aria-label="Submit"
          className={clsx({
            'inline-flex justify-center w-[1.8rem] h-full': true,
            'border-b border-b-prussian-blue transition-all': true,
            'border-b-red-400': invalid,
          })}
        >
          <span
            className={clsx({
              'text-prussian-blue transition-all': true,
              'text-red-400': invalid,
            })}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 9H14.25"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M10 3.75L15.25 9L10 14.25"
                stroke="currentColor"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
