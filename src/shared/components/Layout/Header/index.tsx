'use client';

import Link from 'next/link';

import DarkModeToggle from '@shared/components/Layout/Header/DarkModeToggle';
import MobileMenu from '@shared/components/Layout/Header/MobileMenu';
import NavMenu from '@shared/components/Layout/Header/NavMenu';

const navItems = [
  // { name: '소개', href: '/about' },
  { name: '게시글', href: '/' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ManSo.dev
        </Link>

        <NavMenu navItems={navItems} />

        <div className="hidden md:flex">
          <DarkModeToggle />
        </div>

        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}
