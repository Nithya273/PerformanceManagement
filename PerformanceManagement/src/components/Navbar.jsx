import {  NavLink } from '@mantine/core';
import { RxDashboard } from "react-icons/rx";
import { GoTasklist } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();

  return (
  <>
  <div className=' w-[25%] ml-5 mt-6'>
  <div className="shadow-lg shadow-pink-800  h-[90vh] mt-[2%] ml-[2%] ">
  <h1 className='flex justify-center pt-5 text-pink-800 text-xl text '>Performance Management</h1>
  <div className='pt-5 pl-6'>
    <NavLink
        className=" text-2xl"
        href="#required-for-focus"
        label="Dashboard"
        leftSection={<RxDashboard size="1.3rem" stroke={1.5}/>}
        childrenOffset={28}
      >
        {/* <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink> */}
      </NavLink>
      
      
          <NavLink
            className='text-2xl'
            label="Assigned Tasks"
            leftSection={<GoTasklist size="1.3rem" stroke={1.5} />}
            childrenOffset={28}
            defaultOpened
            onClick={()=>navigate("/Tasks")}
          >
          
          </NavLink>
        
   
      <NavLink
        className='text-2xl'
        label="Profile"
        leftSection={<CgProfile size="1.3rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
        onClick={()=>navigate("/Profilepage")}
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