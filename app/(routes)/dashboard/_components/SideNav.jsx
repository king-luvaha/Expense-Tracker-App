"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { LayoutGrid, PiggyBank, ReceiptText } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNav({ onNavigate }) {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        }
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    const handleNavigate = () => {
        if (onNavigate) {
            onNavigate(); // Call onNavigate prop to close sidebar
        }
    };

    return (
        <div className='h-screen p-5 border shadow-sm flex flex-col'>
            <div className='flex justify-center'>
                <Image src={'/logo.svg'}
                    alt='logo'
                    width={50}
                    height={40}
                />
            </div>
            <div className='mt-5'>
                {menuList.map((menu, index) => (
                    <Link key={menu.id} href={menu.path}>
                        <h2 className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-5 cursor-pointer rounded-md hover:text-primary hover:bg-gray-800 
                            ${path === menu.path && 'hover:text-primary hover:bg-gray-800'}`}
                            onClick={handleNavigate} // Call handleNavigate on link click
                        >
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>

            <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
                <UserButton />
                Profile
            </div>
        </div>
    );
}

export default SideNav;
