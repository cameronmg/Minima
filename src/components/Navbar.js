import React, {useState}  from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll'

export const Navbar = () => {

 //create a use state to give the navbar animation (nav is the specified state of the navbar and setNav will set the navbar to a certain state)
 const [nav, setNav] = useState(false);
 //create  arrow function for the navbar use state so when we click on the menu navbar we will run the handle nav function
 const handleNav = () => {
     //set the navbar to the opposite state so if its open then close it 
     setNav(!nav)
 }
    
  return (
    <div className = "z-50 fixed w-full">
        <ul className = " hidden md:flex flex-row mt-5 text-center space-x-5 justify-end mr-10">
            <Link to="banner" smooth={true} className = " px-1 text-white hover:scale-105 duration-300 cursor-pointer">Home</Link>
            <Link to="about" smooth={true} className = " px-1  text-white hover:scale-105 duration-300  cursor-pointer">Product</Link>
            <Link to="mission" smooth={true} className = " px-1  text-white hover:scale-105 duration-300  cursor-pointer">About Us</Link>
        </ul> 
      {/*reactive navbar icon for mobile*/}
      <div onClick={handleNav} className ='block md:hidden absolute right-5 z-50 mt-[10%]'>
            {/*if(?) the navbar is not(!) true then show the close icon for the navbar else(:) show the regular hamburger icon*/}
            {nav ? <AiOutlineClose color="white" className = 'cursor-pointer' size ={30}/> : <AiOutlineMenu color="white" className = 'cursor-pointer' size={30}/>}
      </div>

      <div className = {nav ? ' bg-black z-40 md:hidden md:absolute fixed top-0 w-[100%] h-[40%] ease-in-out duration-300 right-[0%] pt-[10%] ' : 'md:hidden fixed top-0 h-[50%] w-[100%] top-[-200%] ease-in-out duration-300 right-[0%]'}>
            <ul className ='grid grid-col uppercase p-4'>
                <Link to="banner" smooth={true} onClick ={handleNav} className = 'font-bold p-4 text-white hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer' > Home</Link>
                <Link to="about" smooth={true} onClick ={handleNav} className = 'font-bold p-4 text-white hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'>Product</Link>
                <Link to="mission" smooth={true} onClick ={handleNav} className = 'font-bold p-4 text-white hover:scale-105 duration-300 hover:text-[#ffffff] duration-600 cursor-pointer'>About Us</Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar