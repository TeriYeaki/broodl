import { Fugaz_One } from 'next/font/google';
import React from 'react';
import Button from './Button';
import Calendar from './Calendar';
import Link from 'next/link';
import CallToAction from './CallToAction';
const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Hero() {
  return (
    <div className='flex flex-col gap-8 py-4 sm:gap-10'>
      <h1
        className={
          'sm:text-text-6xl text-center text-5xl md:text-7xl ' +
          fugazOne.className
        }
      >
        <span className='textGradient'>Broodl</span> helps you track your
        <span className='textGradient'> daily</span> mood!
      </h1>
      <p className='mx-auto w-full max-w-[600px] text-center text-lg sm:text-xl md:text-2xl'>
        Create your mood record and see how you feel on{' '}
        <span className='font-semibold'> everyday of the year</span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
