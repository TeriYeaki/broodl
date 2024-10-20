'use client';
import { Fugaz_One } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import { useAuth } from '@/context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import Loading from './Loading';
import Login from './Login';

const fugazOne = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Dashboard() {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth();
  const [data, setData] = useState({});

  function countValues() {}

  async function handleSetMood(mood) {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    try {
      const newData = { ...userDataObj };
      if (!newData?.[year]) {
        newData[year] = {};
      }
      if (!newData?.[year]?.[month]) {
        newData[year][month] = {};
      }

      newData[year][month][day] = mood;

      // update the current state
      setData(newData);
      // update the global state
      setUserDataObj(newData);
      // update firebase
      const docRef = doc(db, 'users', currentUser.uid);
      const res = await setDoc(
        docRef,
        {
          [year]: {
            [month]: {
              [day]: mood,
            },
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.log('Failed to set data: ', err.message);
    }
  }

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

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return;
    }
    setData(userDataObj);
  }, [currentUser, userDataObj]);

  if (loading) {
    return <Loading />;
  }
  if (!currentUser) {
    return <Login />;
  }

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
              onClick={() => {
                const currentMoodValue = moodIndex + 1;
                handleSetMood(currentMoodValue);
              }}
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
      <Calendar completeData={data} handleSetMood={handleSetMood} />
    </div>
  );
}
