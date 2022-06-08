import React from 'react'
import DropdownMenu from './Dropdown'

export default function Nav() {
  return (
    <div>
        <nav className="flex sm:justify-end space-x-4 pt-5">
        {[
            ['TRIPS', '/trip'],
            ['RECENTLY VIEWED', '/views'],
            ['BOOKINGS', '/booking'],
        ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
        <DropdownMenu/>
        </nav>

    </div>
  )
}
