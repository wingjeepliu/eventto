import Link from 'next/link'
import path from 'path'
import React from 'react'

const routes = [
    {
        name: 'Terms of Contions',
        path: '/terms-of-conditions',
    },
    {
        name: 'Privacy Policy',
        path: '/privacy-policy',
    }
]

export default function Footer() {
  return (
    <footer className='mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-white/25'>
        <small className='text-xs'>&copy; 2021. All rights reserved.</small>
        <ul className='flex gap-x-3 sm:gap-x-8'>
            {
                routes.map((route) => (
                    <li key={route.path}>
                        <Link href={route.path}>{route.name}</Link>
                       </li>
                ))
            }
        </ul>
    </footer>
  )
}
