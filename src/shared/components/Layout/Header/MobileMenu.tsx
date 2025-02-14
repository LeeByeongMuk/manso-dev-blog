'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@shared/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@shared/components/ui/sheet';

import DarkModeToggle from './DarkModeToggle';

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-6">
            <DarkModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
