'use client';

import { Menu, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';

import { Button } from '@shared/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@shared/components/ui/sheet';
import { Switch } from '@shared/components/ui/switch';

const navItems = [
  // { name: '소개', href: '/about' },
  { name: '게시글', href: '/' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ManSo.dev
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 transition hover:text-primary dark:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-3 md:flex">
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={checked => {
              console.log(checked);
              setTheme(checked ? 'dark' : 'light');
            }}
          />
          {theme === 'dark' ? (
            <Sun className="size-5 text-yellow-400" />
          ) : (
            <Moon className="size-5 text-gray-600" />
          )}
        </div>

        {/* 모바일 메뉴 (Sheet 사용) */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-6 text-gray-700 dark:text-gray-300" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-background">
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 transition hover:text-primary dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 flex items-center space-x-3">
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={checked =>
                    setTheme(checked ? 'dark' : 'light')
                  }
                />
                {theme === 'dark' ? (
                  <Sun className="size-5 text-yellow-400" />
                ) : (
                  <Moon className="size-5 text-gray-600" />
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
