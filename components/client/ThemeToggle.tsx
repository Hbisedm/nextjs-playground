'use client'

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 初始化时获取localStorage中的theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if(savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches  ? 'dark' : 'light'
      setTheme(systemTheme);
      document.documentElement.classList.toggle('dark', systemTheme === 'dark')
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  }

  return (<button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-break hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>)
}
