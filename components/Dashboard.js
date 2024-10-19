import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: new Date().toDateString(),
  };

  const moods = {
    '&*@#$': '😭',
    Sad: '😢',
    Existing: '😶',
    Good: '🙂',
    Elated: '🥰',
  };

  return (
    <div className='flex flex-1 flex-col gap-8 sm:gap-12 md:gap-16'>
      <div className='grid grid-cols-3 gap-4 rounded-lg bg-indigo-50 p-4 text-indigo-500'>
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className='flex flex-col gap-1 p-4 sm:gap-2'>
              <p className='truncate text-xs font-medium uppercase sm:text-sm'>
                {status.replaceAll('_', ' ')}
              </p>
              <p
                className={
                  'truncate text-base sm:text-lg ' + fugazOne.className
                }
              >
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={
          'text-center text-5xl sm:text-6xl md:text-7xl ' + fugazOne.className
        }
      >
        How do you <span className='textGradient'>feel</span> today?
      </h4>
      <div className='item-stretch flex flex-wrap gap-4'>
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              className={
                'purpleShadow flex flex-1 flex-col items-center gap-2 rounded-2xl bg-indigo-50 p-4 px-5 text-center duration-200 hover:bg-indigo-100'
              }
              key={moodIndex}
            >
              <p className={'text-4xl sm:text-5xl md:text-6xl'}>
                {moods[mood]}
              </p>
              <p
                className={
                  'text-xs text-indigo-500 sm:text-sm md:text-base ' +
                  fugazOne.className
                }
              >
                {mood}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
