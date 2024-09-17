'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import path from 'path'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'All Events',
        path: '/events/all'
    }
]

export default function Header() {
    const currentPath = usePathname()
    console.log(currentPath);
    return (
        <header className='flex justify-between items-center border-b border-white/10 h-14 px-3 md:px-9'>
            <Logo />
            <nav className='h-full'>
                <ul className='flex gap-x-6 text-sm h-full'>

                    {
                        routes.map((route) => (
                            <li key={route.path}
                                // className={`${currentPath===route.path?  'text-white/100':  'text-white/50'} hover:text-white transition`}
                                className={
                                    cn(
                                        ' flex items-center hover:text-white transition relative',
                                        {
                                            'text-white/100': currentPath === route.path,

                                            'text-white/50': currentPath !== route.path
                                        }
                                        
                                    )
                                }
                            >
                                <Link href={route.path}>{route.name}</Link>
                                {
                                    currentPath === route.path && (
                                        <motion.div layoutId='header-active-link' className='bg-accent h-1 w-full absolute bottom-0'></motion.div>
                                    )
                                }
                                {/* <div className='bg-accent h-1 w-full absolute bottom-0'></div> */}
                            </li>
                        ))
                    }
                </ul>
            </nav>


        </header>
    )
}
