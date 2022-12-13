import React from 'react'
import background from '../assets/img/color-sharp2.png'

export const Mission = () => {
  return (
    <div className = "bg-black h-screen w-full">
        <div className = "text-black flex justify-center justify-content-center">
          <img src={background} className = " w-full h-screen object-cover absolute" alt="back Img"/>
            <div className = "text-white flex justify-center ">
              <div className="w-[280px] md:w-[700px] h-[400px] bg-gradient-to-r from-[#28144c] to-[#3f1b3a] z-0 mt-[50%] md:mt-[15%] text-white rounded-xl">
                <h1 className = "flex justify-center font-3xl font-bold pt-4 ">What is Minima?</h1>
                <p className ="text-center pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ullam, id nisi, doloribus cum iusto ratione,
                    unde consequatur alias non eligendi dolorum ad voluptas voluptate. 
                    Possimus esse voluptates eius quae eligendi.</p>

              </div>
            </div>
        </div>

    </div>
  )
}

export default Mission