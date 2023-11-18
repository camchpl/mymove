import Button from '@mui/material/Button';
import Link from 'next/link';
import Header from './Header';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <section className='px-4 py-12 text-center'>
          <h2 className='text-4xl font-bold text-[#4C26D3] dark:text-[#4C26D3]'>
            Welcome to MyMove
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-400'>
            Your personal fitness companion
          </p>
          <Button className='mt-6 bg-[#4C26D3] text-white hover:bg-[#372093]'>
            Get Started
          </Button>
        </section>
        <div className='flex justify-center'>
          <Image
            src='/disabled.png'
            alt='diverse people'
            width={400}
            height={20}
            priority
          />
        </div>
        <section className='px-4 py-12 mt-24 bg-white '>
          <h2 className='text-4xl font-bold text-center text-[#4C26D3] dark:text-[#4C26D3]'>
            Features
          </h2>
          <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col items-center space-y-2'>
              <svg
                className=' h-12 w-12 text-[#4C26D3] dark:text-[#4C26D3]'
                fill='none'
                height='24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
              </svg>
              <h3 className='text-xl font-bold text-[#4C26D3] dark:text-[#4C26D3]'>
                Track Workouts
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Monitor your progress over time
              </p>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <svg
                className=' h-12 w-12 text-[#4C26D3] dark:text-[#4C26D3]'
                fill='none'
                height='24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect height='18' rx='2' ry='2' width='18' x='3' y='4' />
                <line x1='16' x2='16' y1='2' y2='6' />
                <line x1='8' x2='8' y1='2' y2='6' />
                <line x1='3' x2='21' y1='10' y2='10' />
              </svg>
              <h3 className='text-xl font-bold text-[#4C26D3] dark:text-[#4C26D3]'>
                Adaptive Workout Programs
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Never miss a workout
              </p>
            </div>
            <div className='flex flex-col items-center space-y-2'>
              <svg
                className=' h-12 w-12 text-[#4C26D3] dark:text-[#4C26D3]'
                fill='none'
                height='24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
              <h3 className='text-xl font-bold text-[#4C26D3] dark:text-[#4C26D3]'>
                Join the Community
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Share tips and get inspired
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className='px-4 py-6 flex items-center justify-between'>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          © MYMOVE. All rights reserved.
        </p>
        <nav className='flex space-x-4'>
          <Link
            className='text-sm text-gray-600 hover:underline dark:text-gray-400'
            href='#'
          >
            Terms
          </Link>
          <Link
            className='text-sm text-gray-600 hover:underline dark:text-gray-400'
            href='#'
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
