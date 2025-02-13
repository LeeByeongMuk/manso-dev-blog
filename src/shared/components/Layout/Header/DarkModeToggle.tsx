'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Switch } from '@shared/components/ui/switch';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-3">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
      />
      {theme === 'dark' ? (
        <Sun className="size-5 text-yellow-400" />
      ) : (
        <Moon className="size-5 text-gray-600" />
      )}
    </div>
  );
}
