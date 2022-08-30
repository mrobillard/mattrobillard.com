import { useFilter } from '@/hooks/use-filter';

const Breadcrumb: React.FC = () => {
  const filter = useFilter();

  return (
    <div className="flex w-[34rem] md:w-[64.8rem] lg:w-[78rem]">
      {!filter.hasTags && (
        <div className="flex flex-row items-center gap-[0.5rem]">
          <span className="inline-flex font-barlow font-semibold not-italic text-[1.6rem] leading-[1.2rem] tracking-[0.05em] uppercase">
            {`${filter.year} `}
          </span>
          <svg
            width="26"
            height="2"
            viewBox="0 0 26 2"
            fill="none"
            className="text-prussian-blue"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L25 1"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {filter.hasTags && (
        <div className="flex flex-row items-center gap-[0.5rem]">
          <button
            onClick={() => filter.clearTags()}
            className="inline-flex items-center font-barlow font-semibold not-italic text-[1.6rem] leading-[1.2rem] tracking-[0.05em] text-prussian-blue uppercase hover:text-blue-gray active:text-blue-gray transition-all"
          >
            <span style={{ marginInlineEnd: '0.5rem' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M3.33334 8H12.6667"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.88889 3.33334L13.5556 8L8.88889 12.6667"
                  stroke="currentColor"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            Writing
          </button>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            className="text-prussian-blue"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.888916 1.33333L5.55558 5.99999L0.888916 10.6667"
              stroke="currentColor"
              strokeLinecap="square"
            />
          </svg>
          <span className="font-barlow font-semibold not-italic text-[1.6rem] leading-[1.2rem] tracking-[0.05em] uppercase">
            {`${filter.tags.join(' & ')}`}
          </span>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
