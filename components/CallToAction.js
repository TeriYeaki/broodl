'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useAuth } from '@/context/AuthContext';
import Loading from './Loading';

export default function CallToAction() {
  const { currentUser, loading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Set `authChecked` once the authentication has been determined
    if (!loading) {
      setAuthChecked(true);
    }
  }, [loading]);

  if (!authChecked) {
    // Show loading until authentication state is confirmed
    return <Loading />;
  }

  if (currentUser) {
    return (
      <div className='mx-auto w-full max-w-[600px]'>
        <Link href={'/dashboard'}>
          <Button text='Go to Dashboard' full dark />
        </Link>
      </div>
    );
  }

  return (
    <div className='mx-auto grid w-fit grid-cols-2 gap-4'>
      <Link href={'/dashboard'}>
        <Button text='Sign Up' />
      </Link>
      <Link href={'/dashboard'}>
        <Button text='Login' dark />
      </Link>
    </div>
  );
}
