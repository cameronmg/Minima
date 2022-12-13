import React from 'react'
import background from '../assets/img/color-sharp.png'
import phone from '../assets/img/minima-two-phone.png'
import {DiAndroid, DiApple} from 'react-icons/di'
import Apple from '../assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import Android from '../assets/img/google-play-badge.png'

export const Banner = () => {
  return (
    <section className="bg-black h-screen w-full bg-cover bg-center static " >
        <img src={background} className = " w-full h-screen object-cover absolute" alt="back Img"/>
        <div className="z-0 w-full px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[350px] mx-auto z-0 mt-[30px]" src={phone} alt="/"/>

        <div className="flex flex-col justify-center md:mt-[20%] ">
          {/*set text color and make bold*/}
          <h1 className="text-white font-bold sm:text-3xl text-2xl text-center z-0">Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Minima</span>, Initiate a contract, Get on track!</h1>
       
          <div className ="flex flex-row justify-center z-0 space-x-5 pt-4">
            <img src={Apple} className ="cursor-pointer" />
            <img src={Android} className ="w-[150px] cursor-pointer"/>
            
          </div>     
        </div>
      </div>
    </div>
    </section>
  )
}

export default Banner