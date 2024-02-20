import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'

function TopNav() {
    const {isDarkMode}=useGlobalContext();
  return (
    <header className={`py-1 sm:py-2 px-4 sm:px-8 md:px-12 lg:px-18   transition-all duration-300 transform transition-delay-250 ${isDarkMode?'bg-slate-700':'bg-slate-800'} flex justify-center md:justify-end items-center  gap-4 `}>
        <button className={`${isDarkMode?'text-slate-200':'text-slate-200'} hover:underline hover:underline-offset-3 text-xs`}>Sign in/Guest</button>
        <button className={`${isDarkMode?'text-slate-200':'text-slate-200'} hover:underline hover:underline-offset-3 text-xs`}>Create Account</button>
    </header>
  )
}

export default TopNav