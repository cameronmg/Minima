import React from 'react'

//import the react icons
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-black h-[90px] w-full text-gray-300'>
        <div className="flex flex-col justify-center place-content-center pt-2">
            
           
            <div className='flex justify-center p-1'>© 2022 Minima LLC</div>
            <div className="flex flex-row justify-center space-x-4">
                
                    <a href="https://www.facebook.com/groups/1902193643226660/?notif_id=1657715899107986&notif_t=group_r2j_approved&ref=notif" target="_blank" rel="noreferrer">
                        <FaFacebookSquare className= 'cursor-pointer' size={30} />
                    </a>
                
                    <a href="https://twitter.com/?lang=en"  target="_blank" rel="noreferrer">
                                    <FaTwitterSquare className= 'cursor-pointer' size={30} />
                    </a>
                
                    <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                                    <FaGithubSquare className= 'cursor-pointer' size={30} />
                    </a>
                
            </div>
           
        </div>
        
      
    </div>
  )
}

export default Footer