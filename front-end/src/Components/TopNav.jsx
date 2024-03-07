import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'
import { Link ,Navigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function TopNav() {
    const {isDarkMode,user,SetUser}=useGlobalContext();
    const handleLogOut=()=>{
      SetUser(null)
      toast.success('Loged out successfully');
    }
  return (
    <header className={`py-1 sm:py-2 px-4 sm:px-8 md:px-12 lg:px-18   transition-all duration-300 transform transition-delay-250 ${isDarkMode?'bg-slate-700':'bg-slate-800'} flex justify-center md:justify-end items-center  gap-4 `}>
      {user?
      (<p className={`text-sm capitalize ${isDarkMode?'text-slate-200':'text-slate-300'}`}>Hello {user}</p>):
      (
      <Link to='SignIn'>
          <button   className={`${isDarkMode?'text-slate-200':'text-slate-200'} hover:underline hover:underline-offset-3 text-xs`}>
              Sign in/Guest
            </button>
      </Link>
      )}
  {user ? (
        <button onClick={handleLogOut} className={`${isDarkMode?'text-pink-500':'text-blue-400'} hover:underline hover:underline-offset-3 text-xs`}>
            LogOut
        </button>
      ):(
      <Link to='Register'>
      <button className={`${isDarkMode?'text-slate-200':'text-slate-200'} hover:underline hover:underline-offset-3 text-xs`}>
          Create Account
        </button>
      </Link>)}
 
    </header>
  )
}

export default TopNav