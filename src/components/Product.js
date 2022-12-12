import React from 'react'
import background from '../assets/img/color-sharp2.png'
import phone from '../assets/img/minima-two-phone.png'

export const Product = () => {
  return (
      <section className="bg-black h-[120%] md:h-screen lg:h-screen w-full bg-cover bg-center static" >
        <div className = "md:pb-[0px] lg:pb-[0px] ">
          <img src={background} className = " w-full h-screen object-cover absolute" alt="back Img"/>
            <div className="z-0 w-full px-4 ">
              <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[350px] mx-auto z-0 mt-[30px] " src={phone} alt="/"/>

                  <div className="flex flex-col justify-center md:mt-[20%] ">
                    {/*set text color and make bold*/}
                    <h1 className="text-white font-bold sm:text-3xl text-5xl text-center z-0">Welcome</h1>
                    {/*if the screen is above medium(md) make the text 4xl// if the screen size is above small(sm) make the text 3xl// and on phones make the text 2xl*/}
                    {/*define padding of 2rems (py-2)*/}
                    <p className="text-white text-2xl py-3 z-0 text-center">            
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ullam, id nisi, doloribus cum iusto ratione,
                    unde consequatur alias non eligendi dolorum ad voluptas voluptate. 
                    Possimus esse voluptates eius quae eligendi.
                    </p>     
                  </div>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Product