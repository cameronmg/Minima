import React, {useState} from 'react'
import phone from '../assets/img/iphone x w circle.png'

export const About = () => {
  //function for making pop visible and not visible
  /*function popUp({visible})
  {
    if(!visible) return null;

  }*/
  //for showing pop up using use state hook
  const [showPopUpOne,setPopUp] = useState(false);
  const [showPopUpTwo,setPopUpTwo] = useState(false);
  const [showPopUpThree,setPopUpThree] = useState(false);
  const [showPopUpFour,setPopUpFour] = useState(false);
  //close the pop when the user clicks
  const handleOnClose = () => setPopUp(false);
  const handleOnCloseTwo = () => setPopUpTwo(false);
  const handleOnCloseThree = () => setPopUpThree(false);
  const handleOnCloseFour = () => setPopUpFour(false);

  return (
    <section className="bg-black h-[700px] w-full bg-cover bg-center static mt-[-5]" >  
      <div className="z-0 w-full px-4 ">
        <div className="max-w-[1240px] ">

          {/*implementing flex for desktop*/}
          <div className = "flex flex-row space-x-[30%]">
            <div className = "hidden lg:flex flex-col space-y-[5%] w-[20%] pt-[10%] pb-[15%] ml-[15%]" >
              <div class="w-full px-2">
                <div class=" mx-auto bg-gradient-to-r from-[#28144c] to-[#3f1b3a] rounded h-20 w-[40%] z-0 ">
                  <span className = " text-white font-bold text-4xl flex justify-center items-center pt-3">1</span> 
                </div>
                </div>
                <h2 className = "font-bold text-white text-2xl text-center">Download App</h2>
                <p className = "text-white text-center pb-5 text-sm">Go to the App or Play store to get the latest version of Minima.</p>

                <div class="w-full px-2">
                <div class="mx-auto bg-gradient-to-r from-[#28144c] to-[#3f1b3a] rounded h-20 w-[40%]">
                  <span className = " text-white font-bold text-4xl flex justify-center items-center pt-3">2</span> 
                </div>
              </div>
              <h2 className = "font-bold text-white text-2xl text-center ">Create Contract</h2>
              <p className = "text-white text-center text-sm">Pick a start and end date, and pick the frequency of as task and lock it in with a contract!</p>
            </div>
            <div className = "hidden lg:flex flex-col space-y-[5%] w-[20%] pt-[10%] pb-[15%] ml-[15%]" >
              <div class="w-full px-2">
                <div class=" mx-auto bg-gradient-to-r from-[#3f1b3a] to-[#28144c] rounded h-20 w-[40%] z-0">
                  <span className = " text-white font-bold text-4xl flex justify-center items-center pt-3">3</span> 
                </div>
                </div>
                <h2 className = "font-bold text-white text-2xl text-center">Track your Methods</h2>
                <p className = "text-white text-center pb-5 text-sm">Go to the App or Play store to get the latest version of Minima.</p>

                <div class="w-full px-2">
                <div class="mx-auto bg-gradient-to-r from-[#3f1b3a] to-[#28144c] rounded h-20 w-[40%]">
                  <span className = " text-white font-bold text-4xl flex justify-center items-center pt-3">4</span> 
                </div>
              </div>
              <h2 className = "font-bold text-white text-2xl text-center ">Leverage</h2>
              <p className = "text-white text-center text-sm">Pick a start and end date, and pick the frequency of as task and lock it in with a contract!</p>
            </div>
          </div>
        
          <img className="w-[250px] mx-auto z-0 pt-[20%] lg:pt-[3%] lg:mt-[-55%]" src={phone} alt="/"/>

          {/*implementing grid class for mobile*/}
          <div class="h-64 grid grid-rows-2 grid-flow-col gap-[60%] md:hidden lg:hidden text-white font-bold text-xl mt-[-100%] ">        
            <div onClick={() => setPopUp(true)} className="bg-gradient-to-r from-[#3f1b3a] to-[#28144c] rounded h-12 w-16 mx-auto hover:scale-105 duration-300"> <span className ="z-0 flex justify-center item-center pt-2"> 1</span></div>
            <div onClick={() => setPopUpTwo(true)} className = "bg-gradient-to-r from-[#3f1b3a] to-[#28144c] rounded h-12 w-16 mx-auto hover:scale-105 duration-300" ><span className ="z-0 flex justify-center item-center mt-2"> 2</span></div>
            <div onClick={() => setPopUpThree(true)} className = "bg-gradient-to-r from-[#3f1b3a] to-[#28144c] rounded h-12 w-16 mx-auto hover:scale-105 duration-300"><span className ="z-0 flex justify-center item-center mt-2"> 3</span></div>
            <div onClick={() => setPopUpFour(true)} className = "bg-gradient-to-r from-[#3f1b3a] to-[#28144c] rounded h-12 w-16 mx-auto hover:scale-105 duration-300" ><span className ="z-0 flex justify-center item-center mt-2"> 4</span></div>
          </div>
         
         {/*for showing pop up*/}
          <div onClick={handleOnClose} className={showPopUpOne ? " fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-white mt-[-100px]" : "hidden"}>
            <div className="bg-gradient-to-r from-[#3f1b3a] to-[#28144c] h-[125px] w-[300px] rounded text-center" >
              <h1 className = "text-center p-2 text-xl font-bold">Download App</h1>
              <p classname = "">Go to the App or Play store to get the latest version of Minima.</p>
            </div>
          </div>
          <div onClick={handleOnCloseTwo} className={showPopUpTwo ? " fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-white mt-[-100px]" : "hidden"}>
          <div className="bg-gradient-to-r from-[#3f1b3a] to-[#28144c] h-[125px] w-[300px] rounded text-center" >
              <h1 className = "text-center p-2 text-xl font-bold">Create Schedule</h1>
              <p classname = "">Go to the App or Play store to get the latest version of Minima.</p>
            </div>
          </div>
          <div onClick={handleOnCloseThree} className={showPopUpThree ? " fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-white mt-[-100px]" : "hidden"}>
          <div className="bg-gradient-to-r from-[#3f1b3a] to-[#28144c] h-[125px] w-[300px] rounded text-center" >
              <h1 className = "text-center p-2 text-xl font-bold">Track your Methods</h1>
              <p classname = "">Go to the App or Play store to get the latest version of Minima.</p>
            </div>
          </div>
          <div onClick={handleOnCloseFour} className={showPopUpFour ? " fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-white mt-[-100px]" : "hidden"}>
          <div className="bg-gradient-to-r from-[#3f1b3a] to-[#28144c] h-[125px] w-[300px] rounded text-center" >
              <h1 className = "text-center p-2 text-xl font-bold">Leverage</h1>
              <p classname = "">Go to the App or Play store to get the latest version of Minima.</p>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default About