import React from 'react'

//import the react icons
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    //define the max width of the compononent (max-w-[1240px]) automatically center the div(mx-auto)
    //make the y-padding 16(py-16) and the x-padding 4 (px-4)
    //create grid box and if the screen bigger than large create a grid with 3 columns (lg:grid-cols-3)
    //create gaps in the grid of size 8(gap-8)
    <div className='bg-black h-[90px] w-full mx-auto py-16 px-4 grid text-gray-300'>
        <div className="">
          
            {/*create padding on y-axis of 4*/}
            
            <div className='text-center py-1'><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">© 2022 Minima LLC</span>
               
            </div>
    
            <div className='flex '>
                {/*set the size of the icons to 30*/}
                <div className = "mx-auto flex space-x-10">
                    <div className = "">
                        <a href="https://www.facebook.com/groups/1902193643226660/?notif_id=1657715899107986&notif_t=group_r2j_approved&ref=notif" target="_blank" rel="noreferrer">
                            <FaFacebookSquare className= 'cursor-pointer' size={30} />
                        </a>
                    </div>
                    <div className = "">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <FaInstagram className= 'cursor-pointer' size={30}/>
                        </a>
                    </div>
                    <div className = "">
                        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
                            <FaTwitterSquare className= 'cursor-pointer' size={30}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        {/*<div className ='mx-auto '>
            <h6 className = 'font-medium text-[#b68d40] text-center'>Legal</h6>
                <ul className = 'flex flex-row space-x-5'>
                        
                        <li className ='py-2 text-sm'>Claim</li>
                        <li className ='py-2 text-sm'>Policy</li>
                        <li className ='py-2 text-sm'>Terms</li>
                </ul>
                   
  </div>*/}
    </div>
  )
}

export default Footer