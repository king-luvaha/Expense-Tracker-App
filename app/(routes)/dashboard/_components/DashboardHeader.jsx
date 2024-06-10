import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { Menu } from 'lucide-react'; // Importing Menu icon from lucide-react

function DashboardHeader({ toggleSideNav }) {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between items-center'>
      <div>
        <button className='focus:outline-none md:hidden' onClick={toggleSideNav}>
          <Menu size={24} />
        </button>
      </div>
      <div className='flex items-center'>
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
