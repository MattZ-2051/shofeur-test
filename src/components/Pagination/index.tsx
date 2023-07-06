'use client';
import { useState } from 'react';

interface IProps {
  data: any[];
}

const Pagination = ({ data }: IProps) => {
  const length = data.length;
  const pages = length / 5;
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log('pages', pages);
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex list-style-none">
        {pages > 1 && (
          <li>
            <span
              className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              aria-label="Previous"
              onClick={() => setCurrentPage((prevState) => prevState - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
        )}

        <li>
          <span
            className={`relative bg-primary-100 block rounded px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
          >
            {currentPage}
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </span>
        </li>
        {pages > 1 && (
          <li aria-current="page">
            <span className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
              2
            </span>
          </li>
        )}
        {pages > 2 && (
          <li>
            <span className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
              3
            </span>
          </li>
        )}

        {pages > 1 && (
          <li>
            <span
              className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              aria-label="Next"
              onClick={() => setCurrentPage((prevState) => prevState + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
