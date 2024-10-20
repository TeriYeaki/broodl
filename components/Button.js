import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Button(props) {
  const { text, dark, full, clickHandler } = props;

  return (
    <button
      onClick={clickHandler}
      className={
        'overflow-hidden rounded-full border-2 border-solid border-indigo-600 duration-200 hover:opacity-60 ' +
        (dark ? ' bg-indigo-600 text-white' : ' text-indigo-600') +
        (full ? ' grid w-full place-items-center' : ' ')
      }
    >
      <p
        className={
          'whitespace-nowrap px-6 py-2 sm:px-10 sm:py-3 ' + fugazOne.className
        }
      >
        {text}
      </p>
    </button>
  );
}
