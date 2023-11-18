import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

function Header() {
  return (
    <header className='px-4 py-6 flex items-center justify-between'>
      <Button href='/' className='flex rounded items-center space-x-4'>
        <Image
          src='/logo.jpg'
          alt='diverse people'
          width={100}
          height={10}
          priority
        />
      </Button>
      <nav>
        <Link href='/plans'>
          <Button
            className='border-[#4C26D3] text-[#4C26D3] hover:bg-[#4C26D3] hover:text-white'
            variant='outline'
          >
            PLANS
          </Button>
        </Link>
        <Button
          className='border-[#4C26D3] text-[#4C26D3] hover:bg-[#4C26D3] hover:text-white'
          variant='outline'
        >
          Sign In
        </Button>
      </nav>
    </header>
  );
}

export default Header;
