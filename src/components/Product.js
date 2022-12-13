import React from 'react'
import background from '../assets/img/color-sharp2.png'
import phone from '../assets/img/minima-two-phone.png'

export const Product = () => {
  return (
      <section className="bg-black h-[120%] md:h-screen lg:h-screen w-full bg-cover bg-center " >
        <img src={background} className = " w-full h-screen object-cover absolute" alt="back Img"/>
        <div className = "text-white flex justify-center justify-items-center">
          <div className="w-[100px] md:w-[700px] h-[400px] bg-black z-0 mt-[8%] rounded-lg">

          </div>
        </div>
        
      </section>
  )
}

export default Product