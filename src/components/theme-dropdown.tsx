/** @jsxImportSource react */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

import { MoonIcon, SunIcon, MonitorIcon } from './ui/icons';

export default function ThemeDropdown() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        applyTheme('system');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const onClickLight = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  };

  const onClickDark = () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  };

  const onClickSystem = () => {
    setTheme('system');
    localStorage.setItem('theme', 'system');
  };

  const isSystem = theme === 'system';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'icon' }),
          'relative text-foreground hover:text-foreground h-8 w-8',
        )}
      >
        {isSystem ? (
          <MonitorIcon className="h-5 w-5 text-current" />
        ) : (
          <>
            <SunIcon className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-current" />
            <MoonIcon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-current" />
          </>
        )}
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onClickLight}>
          <SunIcon className="h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onClickDark}>
          <MoonIcon className="h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onClickSystem}>
          <MonitorIcon className="h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
