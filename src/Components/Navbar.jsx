import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';

function Navbar() {
  return (

    <nav className=' h-24 flex justify-between item-center bg-slate-200 min-w-full'>
        <div className='hidden lg:flex btn btn-primary text-3xl items-center'><NavLink to='/'>C
            </NavLink></div>
        
        <nav className='flex justify-between w-2/5 item-center gap-8'>
            <NavLink to='/'className={({isActive})=>(isActive?'hidden lg:flex btn btn-primary text-2xl items-center':'hidden lg:flex btn btn-primary text-2xl items-center')}>Home</NavLink>

            <NavLink to='/About'className={({isActive})=>(isActive?'hidden lg:flex btn btn-primary text-2xl items-center ':'hidden lg:flex btn btn-primary text-2xl items-center ')}>About</NavLink>

            <NavLink to='/Products'className={({isActive})=>(isActive?'hidden lg:flex btn btn-primary text-2xl items-center':'hidden lg:flex btn btn-primary text-2xl items-center')}>Products</NavLink>

            <NavLink to='/Carts'className={({isActive})=>(isActive?'hidden lg:flex btn btn-primary text-2xl items-center ':'hidden lg:flex btn btn-primary text-2xl items-center ')}>Carts</NavLink>

            <NavLink to='/Checkout'className={({isActive})=>(isActive?'hidden lg:flex btn btn-primary text-2xl items-center ':'hidden lg:flex btn btn-primary text-2xl items-center ')}>Checkout</NavLink>

            <NavLink to='/Order'className={({isActive})=>(isActive?'hidden lg:flex btn btn-primary text-2xl items-center ':'hidden lg:flex btn btn-primary text-2xl items-center')}>Order</NavLink>
        </nav>
       
    </nav>
  
 
  )
}

export default Navbar