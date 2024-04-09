import {  NavLink } from '@mantine/core';
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { GoCodeReview } from "react-icons/go";
import { IoPersonAdd } from "react-icons/io5";
function Navbar(){
  return (
  <>
  <div className=' w-[100vw]'>
  <div className="shadow-lg shadow-pink-800  h-[90vh] w-[20%]  mt-[2%] ml-[2%] ">
  <h1 className='flex justify-center pt-5 text-pink-800 text-xl text '>Performance Management</h1>
  <div className='pt-5 pl-12'>
  <NavLink
        className='text-2xl'
        href="#required-for-focus"
        label="Profile"
        leftSection={<CgProfile size="1.3rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        
      </NavLink>
    <NavLink
        className=" text-2xl"
        href="#required-for-focus"
        label="Dashboard"
        leftSection={<RxDashboard size="1.3rem" stroke={1.5}/>}
        childrenOffset={28}
      >
       
      </NavLink>
      <NavLink
        className='text-2xl'
        href="#required-for-focus"
        label="Manage Employees"
        leftSection={<IoPersonAdd size="1.3rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
</NavLink>
      <NavLink
        className='text-2xl'
        href="#required-for-focus"
        label="Assign Tasks and set Deadlines"
        leftSection={<FaTasks size="1.3rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        
      </NavLink>
      
      
      <NavLink
        className='text-2xl'
        href="#required-for-focus"
        label="Evaluate Performance"
        leftSection={<GoCodeReview  size="1.3rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >    
      </NavLink>
      <NavLink
        className='text-2xl'
        href="#required-for-focus"
        label="Logout"
        leftSection={<IoMdLogOut size="1.3rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        
      </NavLink>
      </div>
      </div>
      </div>
  </>)
  }

export default Navbar