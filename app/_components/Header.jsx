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
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  )

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'}
            alt='logo'
            width={160}
            height={100}
        />
        <div className='flex items-center space-x-8
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