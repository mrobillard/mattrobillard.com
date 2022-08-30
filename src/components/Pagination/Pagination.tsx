import clsx from 'clsx';

import { useFilter } from '@/hooks/use-filter';

import { PaginationProps } from './PaginationProps';

const Pagination: React.FC<PaginationProps> = ({ years = [] }) => {
  const filter = useFilter();

  if (!Boolean(years.length)) return null;

  return (
    <ul className="flex flex-row gap-[2rem] items-center">
      {years.map((year) => (
        <li key={year}>
          <button
            onClick={() => filter.setYear(year)}
            className={clsx({
              'font-barlow font-semibold not-italic text-[1.2rem]': true,
              'leading-[1.2rem] tracking-[0.1em] uppercase hover:underline':
                true,
              'underline': year === filter.year,
            })}
          >
            {year}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
