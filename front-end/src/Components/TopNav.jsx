import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'
import { Link ,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

function TopNav() {

    const navigate=useNavigate();
    const {isDarkMode,user,SetUser,handleClearCart}=useGlobalContext();
    const handleLogOut=()=>{
      SetUser(null)
      handleClearCart();
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('token')
      sessionStorage.removeItem(CART_STORAGE_KEY)
      toast.success('Loged out successfully');
    }
  return (
    <header className={`py-1 px-4 sm:px-8 md:px-12 lg:px-18   transition-all duration-300 transform transition-delay-250 ${isDarkMode?'bg-slate-700':'bg-slate-800'} flex justify-center md:justify-end items-center  gap-4 `}>
      {user?
      (<Link to='/UserProfile' className={`text-sm capitalize ${isDarkMode?'text-slate-200':'text-slate-300'}`}>Hello {user}</Link>):
      (
      <Link to='SignIn'>
          <button   className={`${isDarkMode?'text-slate-200':'text-slate-200'} hover:underline hover:underline-offset-3 text-xs`}>
              Sign in/Guest
            </button>
      </Link>
      )}
  {user ? (
        <button onClick={handleLogOut} className={`border rounded-3xl p-1 ${isDarkMode?'text-pink-500 border-pink-600':'text-blue-400 border-blue-600'} text-xs`}>
            LogOut
        </button>
      ):(
      <Link to='Register'>
      <button className={`${isDarkMode?'text-slate-200':'text-slate-200'}  text-xs`}>
          Create Account
        </button>
      </Link>)}
 
    </header>
  )
}

export default TopNav