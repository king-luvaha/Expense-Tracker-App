"use client"; // Mark the file as client-side

import React, { useState, useEffect } from 'react';
import SideNav from './_components/SideNav';
import DashboardHeader from './_components/DashboardHeader';
import { db } from '../../../utils/dbConfig';
import { Budgets } from '../../../utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';

function DashboardLayout({ children }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db.select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

    console.log(result);
    if (result?.length === 0) {
      router.replace('/dashboard/budgets');
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  // Close sidebar when navigating to a new route
  const handleNavigation = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div className="relative">
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 z-50`}>
        <SideNav onNavigate={handleNavigation}/>
      </div>
      <div className='md:ml-64'>
        <DashboardHeader toggleSideNav={toggleSideNav} />
        <div className={`${isSideNavOpen ? 'opacity-1' : 'opacity-100'} transition-opacity duration-300 ease-in-out`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
