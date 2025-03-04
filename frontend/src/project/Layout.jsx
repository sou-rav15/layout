import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaCalendarAlt, FaTasks } from 'react-icons/fa';
import { TbLogout2 } from "react-icons/tb";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
function Layout() {
    const [Isopen, setIsopen] =useState(false);
    const handleMenu=()=>{
        setIsopen(!Isopen);
    }
    const data = [
        { name: "Completed", value: 41, fill: "#0f6131" },
        { name: "In Progress", value: 30, fill: "#17853b" },
        { name: "Pending", value: 29, fill: "url(#striped)" },
      ];
    
    //  green -[#344541]
    //search-bar-[#444444] orange-[#f69301] [#222224] text1[#A2A6A5] text2[#CBC6C8] text[#A4A4A5]
  return (
    <>
      <section className='bg-black w-full md:h-[1000px] h-[2800px] mb-10 flex space-x-2 justify center items-center'>
      <div 
      className='absolute top-[4%] left-[3%] md:hidden w-[30px] h-[30px]  rounded-full justify-center flex items-center 'onClick={handleMenu}>
      <IoMdMenu color='white' size='20px'/>
     
      </div>
      {/* {Isopen&&( */}
        <>
           
        
           <div 
          className={`z-10 fixed top-0 left-0 w-[70%] h-full bg-black transition-all
             duration-300 ease-in-out transform  flex justify-between items-center flex-col
             ${Isopen ? 'translate-x-0' : '-translate-x-full'}`}
        >
           
                    <div className='flex justify-center items-center space-x-3'>
                        <div><img src="./codetiki.png" alt="logo"className='w-[25px] h-[25px]' /></div>
                        <div><h2 className='text-white'>Code <span className='text-[#f69361]'> Tikki</span></h2></div>
                    </div>
                    <div className=' text-[13px] flex justify-center items-center h-[35%]'> 
                        <div>
                        <h1 className='font-bold mr-3 mb-3 text-white'>MENU</h1>
                        <ul className='text-white '>
                            <li className='mb-2 cursor-pointer flex text-green-600 font-semibold text-[16px] '><div className='mr-3 mt-1'><TbLayoutDashboard size='20px' color='Darkgreen'/></div><h2 className='mt-1'>Dashboard</h2></li>
                            <li className='mb-2 flex cursor-pointer  hover:text-gray-300'><div className='mr-3 mt-1'><FaTasks size='20px' color='white'/></div><h2 className='mt-1'>Tasks</h2></li>
                            <li className='mb-2 flex  cursor-pointer  hover:text-gray-300'> <div className='mr-3 mt-1'><FaCalendarAlt size='20px' color='white'/></div><h2 className='mt-1'>Calendar</h2></li>
                            <li className='mb-2 flex cursor-pointer  hover:text-gray-300'><div className='mr-3 mt-1'>< SiSimpleanalytics size='20px' color='white'/></div><h2 className='mt-1'>Dashboard</h2></li>
                            <li className='mb-2 flex cursor-pointer  hover:text-gray-300'><div className='mr-3 mt-1'><AiOutlineTeam  size='20px' color='white'/></div><h2 className='mt-1'>Team</h2></li>
                        </ul>
                        </div>
                    </div>
                    <div className='flex justify-start items-center flex-col h-[35%]'>
                        <h1 className='font-bold mb-3 text-white'>General</h1>
                        <ul className='text-white'>
                        <li className='mb-2 cursor-pointer flex hover:text-gray-300 '>
                            <div className='mr-3 mt-1'><IoSettingsOutline  size='20px' color='white'/></div>
                            <h2 className='mt-1'>
                                Settings</h2></li>
                        <li className='mb-2 cursor-pointer flex hover:text-gray-300  '>
                            <div className='mr-3 mt-1'><IoIosHelpCircleOutline size='20px' color='white'/></div>
                            <h2 className='mt-1'>Help</h2></li>
                        <li className='mb-2 cursor-pointer flex hover:text-gray-300  '>
                            <div className='mr-3 mt-1'><TbLogout2 size='20px' color='white'/></div>
                            <h2 className='mt-1'>logout</h2></li>

                            
                        </ul>
                    </div>
                    {/* <div className='bg-[#222224] h-[180px] w-[230px] ml-13 rounded-2xl py-6 px-3'>
                        <div><img src="" alt="logo" /></div>
                        <h2 className='text-[22px] text-white'>Download our</h2>
                        <h2 className=' relative bottom-2 text-[22px] text-white'>Mobile App</h2>
                            <p className='text-[12px] text-gray-300'>Get cash in another way</p>
                            <button className=' px-13 py-2 rounded-3xl outline-none
                             bg-green-700 cursor-pointer hover:outline-1 hover:bg-green-800
                             text-white text-[12px] mt-1 ml-6'>Download</button>
                    </div> */}
            
            <div className='absolute top-3 right-4 cursor-pointer' onClick={handleMenu}>
            <IoClose size='25px' color='white' />
            </div>
            </div>
            </>
      {/* )} */}
        <div className='md:w-[40%] lg:w-[26%] max-[360px]:w-[95%] h-[90%] md:flex justify-center item-center hidden '>
            <div className=' w-[95%] h-[96%] '>
                    <div className='flex justify-center items-center space-x-3'>
                        <div><img src="./codetiki.png" alt="logo"className='w-[25px] h-[25px]' /></div>
                        <div><h2 className='text-white'>Code <span className='text-[#f69361]'> Tikki</span></h2></div>
                    </div>
                    <div className='flex justify-center items-center flex-col  h-[35%]'>
                        <h1 className='font-bold mr-3 mb-3'>MENU</h1>
                        <div>
                        <ul className='text-white '>
                            <li className='mb-2 cursor-pointer flex text-green-600 font-semibold text-[16px] '><div className='mr-3 mt-1'><TbLayoutDashboard size='20px' color='Darkgreen'/></div><h2 className='mt-1'>Dashboard</h2></li>
                            <li className='mb-2 flex cursor-pointer  hover:text-gray-300'><div className='mr-3 mt-1'><FaTasks size='20px' color='white'/></div><h2 className='mt-1'>Tasks</h2></li>
                            <li className='mb-2 flex  cursor-pointer  hover:text-gray-300'> <div className='mr-3 mt-1'><FaCalendarAlt size='20px' color='white'/></div><h2 className='mt-1'>Calendar</h2></li>
                            <li className='mb-2 flex cursor-pointer  hover:text-gray-300'><div className='mr-3 mt-1'>< SiSimpleanalytics size='20px' color='white'/></div><h2 className='mt-1'>Dashboard</h2></li>
                            <li className='mb-2 flex cursor-pointer  hover:text-gray-300'><div className='mr-3 mt-1'><AiOutlineTeam  size='20px' color='white'/></div><h2 className='mt-1'>Team</h2></li>
                        </ul>
                        </div>
                    </div>
                    <div className='flex justify-start items-center flex-col h-[35%]'>
                        <h1 className='font-bold mb-3'>General</h1>
                        <ul className='text-white'>
                        <li className='mb-2 cursor-pointer flex hover:text-gray-300 '>
                            <div className='mr-3 mt-1'><IoSettingsOutline  size='20px' color='white'/></div>
                            <h2 className='mt-1'>
                                Settings</h2></li>
                        <li className='mb-2 cursor-pointer flex hover:text-gray-300  '>
                            <div className='mr-3 mt-1'><IoIosHelpCircleOutline size='20px' color='white'/></div>
                            <h2 className='mt-1'>Help</h2></li>
                        <li className='mb-2 cursor-pointer flex hover:text-gray-300  '>
                            <div className='mr-3 mt-1'><TbLogout2 size='20px' color='white'/></div>
                            <h2 className='mt-1'>logout</h2></li>

                            
                        </ul>
                    </div>
                    <div className='bg-[#222224] h-[180px] w-[230px] ml-13 rounded-2xl py-6 px-3 '>
                        <div><img src="./p3.png" alt="logo" className='w-[35px] h-[35spx] ' /></div>
                        <h2 className='text-[22px] text-white'>Download our</h2>
                        <h2 className=' relative bottom-2 text-[22px] text-white'>Mobile App</h2>
                            <p className='text-[12px] text-gray-300'>Get cash in another way</p>
                            <button className=' px-13 py-2 rounded-3xl outline-none
                             bg-green-700 cursor-pointer hover:outline-1 hover:bg-green-800
                             text-white text-[12px] mt-1 ml-6'>Download</button>
                    </div>
            </div>

        </div>
        <div className=' w-[95%] lg:w-[71%] h-[98%] ml-7 md:ml-2'>
            <div className='w-[97%] h-[70px] flex justify-between'>
                <div className='w-[55%]  h-15 py-3 max-sm:px-2'>
                    <input type="text"
                    className='bg-[#696969] text-[#CBC6C8] w-[99%] max-sm:w-[100%]  outline-none text-[12px] md:py-3 md:px-8 py-2 px-6 max-sm:mt-1 md:rounded-3xl rounded-2xl'
                    placeholder='search-text'
                     />
                </div>
                <div className='w-[43%] h-15 flex justify-center items-center md:space-x-2 space-x-1'>
                    {/* mail box */}
                    <div className=' md:w-[32px] md:h-[32px] w-[25px] h-[25px] bg-white  ml-1 rounded-full flex justify-center items-center mt-2
                     hover:outline-1 outline-gray-100 cursor-pointer
                    '>
                    <div className='md:hidden block'><CiMail size="17px" color='black' /></div>
                    <div className='md:block hidden'><CiMail  size="22px" color='black' /></div>
                    
                    </div>
                   
                    {/* end-mail-box */}
                    <div className='md:w-[32px] md:h-[32px] w-[25px] h-[25px] bg-white  ml-1 rounded-full flex justify-center items-center mt-2
                     hover:outline-1 outline-gray-100 cursor-pointer
                    '>
                        <div className='md:hidden block'><IoIosNotificationsOutline size="17px" color='black' /></div>
                        <div  className='md:block hidden'><IoIosNotificationsOutline size="22px" color='black' /></div>
                    
                    </div>
                 
                    {/* end-notificaiton */}
                    <div className='md:w-[32px] md:h-[32px] w-[25px] h-[25px] bg-white  ml-1 rounded-full flex justify-center items-center mt-2
                     hover:outline-1 outline-gray-100 cursor-pointer
                    '>
                        <div className='md:hidden block'><img src="./download.png" alt="logo" className='w-[20px] h-[20px] rounded-full' /></div>
                        <div  className='md:block hidden'><img src="/download.png" alt="profile-image" className='w-[32px] h-[32px] rounded-full'/></div>
                    
                    </div>
                    {/* end profile */}
                    <div className=''>
                        <h1 className='font-bold text-white text-[14px] ml-1 md:block hidden'  >{""||"sourav saran"}</h1>
                        <p className=' text-white text-[12px] ml-1 md:block hidden' > {""||"souravsaran@gamil.com"}</p>
                    </div>
                    {/* end username and email */}
                </div>
            </div>
            <div className='bg-[#696969] w-[97%] h-[110px] flex justify-between'>
                <div className=' w-[50%] h-[85%] text-white p-6'>
                    <h2 className='font-bold text-[20px] max-sm:text-[12px]'>{""||"Dashboard"}</h2>
                    <p className='md:text-[14px] max-sm:text-[11px]'>plan priotrize, and acomplish your task with ease</p>
                </div>
                <div className=' w-[40%] h-[85%] p-6 md:flex justify-around items-center relative'>
                   <div className='py-1'><button className='bg-[#f69301]  py-1 px-5 rounded-3xl text-white 
                   text-[12px] flex justify-center items-center cursor-pointer mr-2
                   max-sm:text-[10px]  max-sm:absolute max-sm:right-3 max-sm:bottom-10   max-sm:py-[4px]   
                     max-md:absolute max-md:right-[50px]
                    
                    max-[360px]:bg-red-400 max-[360px]:w-[120px] max-[360px]:px-[6px]
                    hover:outline-2 hover:outline-orange-400 hover:text-[#e8ebed]'> <span className='mr-2 mb-1  text-[13px] md:text-[20px]'>+</span>Add Event</button></div>
                   <div>
                    <button className='border-1 border-[#f69301] py-3 px-5 rounded-3xl text-white mr-4
                    max-sm:text-[10px]  max-sm:absolute max-sm:right-2 max-sm:bottom-1  max-sm:mt-2   max-sm:py-[7px] 
                    max-md:absolute max-md:py-[6px] max-md:px-[20px] max-md:right-[45px] max-md:bottom-[-1px]
                     max-[360px]:w-[120px] max-[360px]:absolute max-[360px]:right-[160px]
                    text-[12px] flex justify-center items-center cursor-pointer hover:outline-2 outline-orange-400
                    hover:text-[#e8ebed]'> Import data</button>
                   </div>
                </div>
            </div>
            <div className='w-[97%] sm:h-[180px] flex md:flex-nowrap flex-wrap  h-[260px] space-y-2 mt-2  space-x-2 md:justify-between'>
                <div className='relative bg-[#f69301] lg:w-[23%] md:-[21%] lg:h-[95%] md:h-[88%] h-25  w-[47%]
                 rounded-2xl
                '>
                    <div className='absolute top-2 left-4 font-bold text-white text-[12px]'><h2>Total Event</h2></div>
                    <div className='absolute top-8 left-4 font-bold text-white text-[26px] md:text-[60px]' ><h2>{""||"24"}</h2></div>
                    <div className='absolute bottom-4 left-4 font-bold text-black text-[9px]'><h2>{""||"Increased from the last month"}</h2></div>
                    <div className='absolute top-2 right-2'><BsArrowUpRightCircle color='white' size="18px" /></div>
                </div>
                <div className='relative bg-[#696969]  lg:w-[23%] md:-[21%] lg:h-[95%] md:h-[88%] h-25  w-[47%]
                 rounded-2xl
                '>
                    <div className='absolute top-2 left-4 font-bold text-white text-[12px]'><h2>Total Event</h2></div>
                    <div className='absolute top-8 left-4 font-bold text-[#c7c7c7]  text-[26px] md:text-[60px]' ><h2>{""||"10"}</h2></div>
                    <div className='absolute bottom-4 left-4 font-bold text-[#c7c7c7] text-[9px]'><h2>{""||"Increased from the last month"}</h2></div>
                    <div className='absolute top-2 right-2'><BsArrowUpRightCircle color='white' size="18px" /></div>
                </div>
                <div className='relative bg-[#696969]  lg:w-[23%] md:-[21%] lg:h-[95%] md:h-[88%] h-25  w-[47%]
                 rounded-2xl
                '>
                    <div className='absolute top-2 left-4 font-bold text-white text-[12px]'><h2>Total Event</h2></div>
                    <div className='absolute top-8 left-4 font-bold text-[#c7c7c7] text-[26px] md:text-[60px]' ><h2>{""||"12"}</h2></div>
                    <div className='absolute bottom-4 left-4 font-bold text-[#c7c7c7]  text-[9px]'><h2>{""||"Increased from the last month"}</h2></div>
                    <div className='absolute top-2 right-2'><BsArrowUpRightCircle color='white' size="18px" /></div>
                </div>
                <div className='relative bg-[#696969] lg:w-[23%] md:-[21%] lg:h-[95%] md:h-[88%] h-25  w-[47%]
                 rounded-2xl
                '>
                    <div className='absolute top-2 left-4 font-bold text-white text-[12px]'><h2>Total Event</h2></div>
                    <div className='absolute top-8 left-4 font-bold text-[#c7c7c7]  text-[26px] md:text-[60px]' ><h2>{""||"2"}</h2></div>
                    <div className='absolute bottom-4 left-4 font-bold text-[#c7c7c7]  text-[9px]'><h2>{""||"Increased from the last month"}</h2></div>
                    <div className='absolute top-2 right-2'><BsArrowUpRightCircle color='white' size="18px" /></div>
                </div>
                
            </div>
           <div className='w-[97%]  lg:h-[500px] h-[1730px] md:flex'>
           <div className=' md:w-[72%] w-full md:h-[95%]'>
            <div className=' w-full md:h-[210px] h-[650px] flex md:flex-row flex-col justify-center items-center space-x-2'>
            <div className='md:w-[60%] w-full md:h-[90%] h-[490px] bg-[#222224] rounded-xl p-3'>
                <div className=' sm:hidden  flex flex-col justify-center items-start space-y-6'>
                    <h2 className='text-white font-bold'> Event Analytics</h2>
                    <div className='text-white flex space-x-2' >
                        <h2>S</h2><div className='w-[100px] h-10 bg-white rounded-2xl'></div>
                    </div  >
                    
                    <div className='text-white flex space-x-2' >
                        <h2>M</h2><div className='w-[130px] h-10 bg-white rounded-2xl'></div>
                    </div>
                    
                    <div className='text-white flex space-x-2' >
                        <h2>T</h2><div className='w-[140px] h-10 bg-white rounded-2xl'></div>
                    </div>
                    <div className='text-white flex space-x-2' >
                        <h2>W</h2><div className='w-[150px] h-10 bg-white rounded-2xl'></div>
                    </div>
                    <div className='text-white flex space-x-2' >
                        <h2>T</h2><div className='w-[100px] h-10 bg-white rounded-2xl'></div>
                    </div>
                    <div className='text-white flex space-x-2' >
                        <h2>F</h2><div className='w-[0px] h-10 bg-white rounded-2xl'></div>
                    </div>
                    <div className='text-white flex space-x-2' >
                        <h2>S</h2><div className='w-[0px] h-8 text-white rounded-2xl'></div>
                    </div>
                    
                    <div >
                        <h2>S</h2><div className='w-[100px] h-8 text-white rounded-2xl'></div>
                    </div>
                    
                    <div >
                        <h2>S</h2><div className='w-[100px] h-8 text-white rounded-2xl'></div>
                    </div>
                    
                </div>
                <div className=' max-sm:hidden flex justify-start space-y-9 items-start flex-col'>
                    <h2 className='font-bold text-white'>Event Analytics</h2>
                     <div className='flex justify-between items-center space-x-4'>
                        <div className='flex justify-center items-center flex-col'>
                     <div className='bg-white h-20 w-10 rounded-2xl'></div><h1 className='text-white text-[11px]'>S</h1>
                        </div>
                        <div className='relative bottom-2 flex justify-center items-center flex-col'>
                    <div className='bg-white h-23 w-10 rounded-2xl'></div><h1 className='text-white text-[11px]'>M</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                                <div className='bg-white h-25 w-10 rounded-2xl '></div>
                                <h1 className='text-white text-[11px] mb-6'>T</h1>
                        </div>
                        <div className=' relative bottom-6 flex justify-start items-center space-y-1 flex-col'>
                                <div className='bg-white h-30 w-10 rounded-2xl'></div>
                                <h1 className='text-white text-[11px] '>W</h1>
                        </div>
                        <div className=' mt-2 flex justify-center items-center flex-col'>
                                <div className='bg-white h-17 w-10 rounded-2xl'></div>
                                <h1 className='text-white text-[11px]'>T</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                                <div className='bg-white h-20 w- rounded-2xl'></div>
                                <h1 className='text-white text-[11px]'>F</h1>
                        </div>

                        <div className='flex justify-center items-center flex-col'>
                                <div className='bg-white h-20 w-0 rounded-2xl'></div><h1 className='text-white text-[11px]'>S</h1>
                        </div>
                     </div>
                </div>
            </div>
            <div className='md:w-[35%] w-full md:h-[90%] h-[300px] py-3 rounded-xl bg-[#222224] my-2 flex flex-col justify-between items-center tex-white'>
                <div className='text-white font-bold'><h2 >Reminders</h2></div>
                <div className='border-b[#222224]'>
                    <h2 className='text-[#c7c7c7] text-[18px] '>Meeting with Arc company</h2>
                    {/* <h2>Meeting with Arc company</h2> */}
                <p className='text-[#c7c7c7] text-[12px] text-center'>Time:02:00pm-04:00 pm</p>
                </div>
                <div className=' cursor-pointer flex justify-center items-center px-4 py-2 rounded-lg bg-[#f69301]'>
                    <AiOutlineVideoCamera color='white' /><h2 className='text-[11px] text-white ml-3'>start meeting</h2>
                </div>
            </div>
            </div>
            <div className=' w-full md:h-[270px] h-[600px] py-2 md:flex space-x-2'>
                    <div className=' w-full h-[50%] md:h-full max-sm:mb-2 bg-[#222224] rounded-2xl'>
                        <div className=' flex justify-between '>
                            <h2 className='font-bold text-white text-[15px] ml-2'>Team collaboration</h2>
                            <button className='bg-white cursor-pointer text-black rounded-2xl text-[12px] mr-2 px-4 py-2'>+ Add memeber</button>
                        </div>
                        <div className='py-3 mdLpy-5'>
                            {/* start */}
                            <div className='border-b-1 text-gray-300'></div>
                            <div className='flex justify-center items bg-center'>

                                <div className='bg-red-800 rounded-full w-[50px] h-[50px] md:w-[35px] md:h-[35px] mt- mr-2'></div>
                                <div> <h2 className='text-white md:text-[13px]'> Alexandra Deff</h2>
                                <p className='text-gray-300 text-[12px] md:text-[10px]'><span className='text-white'>Working on</span> Github project Repository </p>
                                </div>
                                <div>
                                    <button className='bg-green-100 text-white text-[8px] font-bold rounded-2xl px-3 py-1 ml-2 md:ml-7'> completed</button>
                                </div>
                                
                                {/* end */}
                                
                            </div>
                            <div className='border-b-1 text-gray-300  mb-1 md:mt-1'></div>
                                        {/*second  */}
                                        <div className='border-b-1 text-gray-300 mb-1'></div>
                            <div className='flex justify-center items bg-center'>

                                <div className='bg-red-800 rounded-full  md:w-[35px] md:h-[35px] w-[50px] h-[50px] mt- mr-2'></div>
                                <div> <h2 className='text-white  md:text-[13px]'> Alexandra Deff</h2>
                                <p className='text-gray-300 text-[12px]  md:text-[10px]'><span className='text-white'>Working on</span> Github project Repository </p>
                                </div>
                                <div>
                                    <button className='bg-yellow-100 text-white text-[8px] font-bold rounded-2xl px-3 py-1 ml-2 md:ml-7'> completed</button>
                                </div>
                                
                                {/* end */}
                                
                            </div>
                            <div className='border-b-1 text-gray-300 mb-1 md:mt-1'></div>
                            {/* third */}
                            <div className='border-b-1 text-gray-300 md:mb-1'></div>
                            <div className='flex justify-center items bg-center'>

                                <div className='bg-red-800 rounded-full  md:w-[35px] md:h-[35px] w-[50px] h-[50px] mt- mr-2'></div>
                                <div> <h2 className='text-white  md:text-[13px]'> Alexandra Deff</h2>
                                <p className='text-gray-300 text-[12px]  md:text-[10px]'><span className='text-white'>Working on</span> Github project Repository </p>
                                </div>
                                <div>
                                    <button className='bg-red-100 md:ml-7 text-white text-[8px] font-bold rounded-2xl px-3 py-1 ml-2'> completed</button>
                                </div>
                                
                                {/* end */}
                                
                            </div>
                            <div className='border-b-1 text-gray-300 mb-1 md:mt-1'></div>
                            {/* forth */}
                            <div className='border-b-1 text-gray-300 md:mb-1'></div>
                            <div className='flex justify-center items bg-center'>

                                <div className='bg-red-800 rounded-full  md:w-[35px] md:h-[35px] w-[50px] h-[50px] mt- mr-2'></div>
                                <div> <h2 className='text-white  md:text-[13px]'> Alexandra Deff</h2>
                                <p className='text-gray-300 text-[12px]  md:text-[10px]'><span className='text-white'>Working on</span> Github project Repository </p>
                                </div>
                                <div>
                                    <button className='bg-yellow-100 text-w text-[8px] font-bold rounded-2xl px-3 py-1 ml-2 md:ml-7'> completed</button>
                                </div>
                                
                                {/* end */}
                                
                            </div>
                            <div className='border-b-1 text-gray-300 md:mt-1'></div>

                        </div>
                        </div> 
                    {/* <div className='bg-red-700 w-full  h-[40%] md:h-full'></div>  */}

                    {/* start */}
                    <div className=" md:w-[50%] h-[40%] md:h-full flex justify-center items-center">
      <div className="bg-[#222224] max-sm:mt-13 text-white p-6 rounded-lg shadow-lg w-[90%] ">
        <h2 className="text-lg font-semibold mb-2">Event Progress</h2>

        {/* Recharts Component */}
        <RadialBarChart
        className='absolute bottom-10 right-[14%] max-sm:right-[6%]'
          width={300}
          height={200}
          cx="50%"
          cy="100%"
          innerRadius="70%"
          outerRadius="1100%"
          barSize={15}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <defs>
            <pattern id="striped" patternUnits="userSpaceOnUse" width="8" height="8">
              <rect width="8" height="8" fill="gray" />
              <path d="M 0 0 L 8 8" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background dataKey="value" />
        </RadialBarChart>

        {/* Percentage Text */}
        <div className="text-center mt-[-90px]">
          <p className="text-3xl font-bold">41%</p>
          <p className="text-sm text-gray-400">Event Completed</p>
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-4 text-xs">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-800 rounded-full mr-2"></span> Completed
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span> In Progress
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-500 border border-white rounded-full mr-2"></span> Pending
          </div>
        </div>
      </div>
    </div>
                    {/* end */}
            </div>
           </div>
           <div className=' md:w-[27%] w-full md:h-[96%] h-[40%] flex justify-center flex-col items-center space-y-2' >
             <div className='bg-[#222224] w-[93%] h-[50%] md:h-[67%] rounded-2xl'>
                 <div className='w-full mb-2 h-[15%] flex justify-between py-2'>
                    <h2 className='font-bold text-white text-[20px] ml-1'>Events</h2> 
                    <button className=' crursor-pointer bg-white rounded-2xl px-4 py-1 text-[12px] mr-2'>+ new</button>
                    </div>
                 <div className=' w-full h-[75%] mt-5 flex justify-center items-center flex-col space-x-3'>
                   <ul>
                    <li className=' flex mb-2'>
                            <img src="./p1.png" alt="alt" className='mr-3 w-[ 30px] h-[30px]'/>
                         <div className='text-white  '>
                            <h1 className=' text-[14px]'>Develope Api Endpoints</h1>
                            <p className=' text-[10px]'>Due date: Nov 28, 2024</p>
                         </div>
                         </li>
                    <li className='flex mb-2'>
                         <img src="./p2.png" alt="image-2" className='mr-2 relative right-2 w-[ 30px] h-[30px]' />
                         <div className='text-white'>
                            <h1 className=' text-[14px]'>Onboarding Flow</h1>
                            <p className=' text-[10px]'>Due date: Nov 28, 2024</p>
                         </div>
                         </li>
                    <li className='flex mb-2'>
                         <img src="./p4.png" alt="image-1"className='mr-3 w-[ 30px] h-[30px]' />
                         <div className='text-white'>
                            <h1 className=' text-[14px]'>Build Dashboard</h1>
                            <p className=' text-[10px]'>Due date: Nov 28, 2024</p>
                         </div>
                         </li>
                    <li className='flex mb-2'>
                         <img src="./p5.png" alt="image-4" className='mr-3 w-[ 30px] h-[30px]' />
                         <div className='text-white'>
                            <h1 className=' text-[14px]'>Optimized page load</h1>
                            <p className=' text-[10px]'>Due date: Nov 28, 2024</p>
                         </div>
                         </li>
                    <li className='flex mb-7'> 
                         <img src="./p6.png" alt="image-5" className='mr-3 w-[ 30px] h-[30px]' />
                         <div className='text-white'>
                            <h1 className=' text-[14px]'>cross Browser Testing</h1>
                            <p className=' text-[10px]'>Due date: Nov 28, 2024</p>
                         </div>
                         </li>
                    
                   </ul>
                     </div>
             </div>
             <div className='relative bg-[#222224] w-[93%] h-[30%] rounded-2xl'>
                    <h2 className='absolute top-[4%] left-[3%] text-white text-[22px] font-semibold'>Time Tracker</h2>
                    <h2 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-white text-[30px] 
                    font-semibold'>{""||"01:24:08"}</h2>
                    <div className='md:hidden cursor-pointer absolute bottom-[9%] left-[30%]'>
                        <FaRegCirclePause color='white' size="40px"/></div>
                        <div className=' md:hidden cursor-pointer absolute bottom-[9%] left-[60%]'>
                        <FaCirclePlay size='40px' color='red' /></div>
                    <div className='max-sm:hidden cursor-pointer absolute bottom-[9%] left-[30%]'>
                        <FaRegCirclePause color='white' size="20px"/></div>
                        <div className=' max-sm:hidden cursor-pointer absolute bottom-[9%] left-[60%]'>
                        <FaCirclePlay size='20px' color='red' /></div>
                        
                    
             </div>
           </div>
           </div>
            <div></div>
        </div>
      </section>
    </>
  )
}

export default Layout
