import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { MdContactPage } from "react-icons/md";
import { IoIosReturnRight,IoIosReturnLeft,IoMdCreate } from "react-icons/io";
import { FaBook } from "react-icons/fa";

function Sidebar() {
  const [arrow, setArrow] = useState(false);
  const handleArrows = () => {
    setArrow(!arrow);
  }
  const showData = arrow ? `hidden` : `inline`;

  return (
    <div className={`border-r h-auto rounded transition-all relative dark:bg-black dark:text-slate-200 md:inline w-auto p-4`}>
      <nav className='flex flex-col gap-5 items-center w-full transition-all'>
        <ul className='flex flex-col gap-5 w-full items-center px-2 '>
          <div className='flex justify-between items-center w-full gap-8'>
            <h3 className={`uppercase font-semibold text-blue-500  md:${showData} hidden`}>DashBoard</h3>
            <div onClick={handleArrows} className='hidden md:inline-block pe-3'>{arrow ? <IoIosReturnRight size={32} className='border-2 p-1 rounded-lg'/> : <IoIosReturnLeft size={32} className='border-2 p-1 rounded-lg'/>}</div>
          </div>
          <div className='flex flex-col gap-6 w-full'>
            <li>
              <NavLink to={'/createblog'} className='flex gap-2 items-center'>
                <div><IoMdCreate size={arrow ? 25 : 20} /></div>
                <div className={`hidden md:${showData}`}>Create a Blog</div>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/bloglist'} className='flex gap-2 items-center'>
                <div><FaBook size={arrow ? 25 : 20} /></div>
                <div className={`hidden md:${showData}`}>List</div>
              </NavLink>
            </li>
            </div>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
