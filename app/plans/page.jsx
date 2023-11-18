import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Header from '@/components/Header';

export default function Plans() {
  return (
    <div className='min-h-screen bg-[#EDE7F6]'>
      <Header />
      <section className='py-12 md:py-24 lg:py-32'>
        <div className='container ml-24 px-4 md:px-6'>
          <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12'>
            <div className='flex flex-col justify-center space-y-4'>
              <h2 className='text-3xl font-bold tracking-tighter text-[#4C26D3] sm:text-5xl'>
                Individual Plan
              </h2>
              <p className='max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'>
                Ideal for personal users. Get access to all features and start
                your fitness journey.
              </p>
              <div className='text-4xl font-bold text-[#4C26D3]'>29.99€/mo</div>
              <ul className='grid gap-2 py-4 text-zinc-500'>
                <li>Personalized workout plans</li>
                <li>Access to instructional videos and articles</li>
                <li>Progress tracking</li>
                <li>Sign language interpretation</li>
                <li>Audio description</li>
                <li>Advanced analytics</li>
              </ul>
              <Button className='bg-[#4C26D3] hover:bg-zinc-500 text-white'>
                Subscribe
              </Button>
            </div>
            <div className='flex flex-col justify-center space-y-4'>
              <h2 className='text-3xl font-bold tracking-tighter text-[#4C26D3] sm:text-5xl'>
                Company Plan
              </h2>
              <p className='max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'>
                Perfect for companies and teams. Get access to all features for
                multiple users.
              </p>
              <div className='text-4xl font-bold text-[#4C26D3]'>Custom</div>
              <ul className='grid gap-2 py-4 text-zinc-500'>
                <li>Personalized workout plans for each user</li>
                <li>Access to instructional videos and articles</li>
                <li>Progress tracking</li>
                <li>Sign language interpretation for each user</li>
                <li>Audio description for each user</li>
                <li>Advanced analytics</li>
              </ul>
              <Button className='bg-[#4C26D3] hover:bg-zinc-500 text-white'>
                Subscribe
              </Button>
            </div>
          </div>
          <div className='flex flex-col justify-center space-y-8 mt-8'>
            <h2 className='text-2xl font-bold tracking-tighter text-[#4C26D3] sm:text-4xl'>
              Get free access
            </h2>
            <p className='max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'>
              Upload a PDF of your current workout plan and get a month of free
              access.
            </p>
            <div className='flex items-center space-x-4'>
              <OutlinedInput
                accept='.pdf'
                className='max-w-lg flex-1'
                type='file'
              />
              <Button className='bg-[#4C26D3] hover:bg-zinc-500 text-white text-sm px-4 py-2'>
                Upload
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
