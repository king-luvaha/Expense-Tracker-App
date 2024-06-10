"use client"
import { useUser, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Header() {

  const { isSignedIn } = useUser();

  const CustomButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-yellow-600"
    >
      {children}
    </button>
  )

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'}
            alt='logo'
            width={50}
            height={40}
        />
        <div className='flex items-center space-x-4
        '>
          {isSignedIn ? (
            <>
              <Link href={'/dashboard'}>
                <CustomButton>Dashboard</CustomButton>
              </Link>
              <UserButton/>
            </>
            ) : (
              <Link href={'/sign-in'}>
                <CustomButton>Get Started</CustomButton>
              </Link>
            )
          }
        </div>
    </div>
  );
}

export default Header