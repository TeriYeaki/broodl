import { Fugaz_One } from 'next/font/google';
import React from 'react';
import Button from './Button';
const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Login() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugazOne.className}>
        Log In / Register
      </h3>
      <p>Your&#39;re one step away!</p>
      <input
        className='mx-auto w-full max-w-[400px] rounded-full border border-solid border-indigo-400 px-3 py-2 outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600 sm:py-3'
        placeholder='Email'
      />
      <input
        className='mx-auto w-full max-w-[400px] rounded-full border border-solid border-indigo-400 px-3 py-2 outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600 sm:py-3'
        placeholder='Password'
      />
      <div className='mx-auto w-full max-w-[400px]'>
        <Button text='Submit' full />
      </div>
      <p className='text-center'>
        Don&#39;t have an account?{' '}
        <span className='text-indigo-600'>Sign up</span>
      </p>
    </div>
  );
}
