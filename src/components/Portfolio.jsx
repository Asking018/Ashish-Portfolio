import React from 'react';
import ecommerce from "../assets/ecommerce.jpg";
import sass from "../assets/sass.jpg";
import crypto from "../assets/crypto.jpg";
import keeper from "../assets/keeper.jpg";

const Portfolio = () => {
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen " style={{paddingTop:"100px",paddingBottom:"400px"}} >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-yellow-800 rounded-lg flex flex-col justify-center items-center">
            <img src={ecommerce} alt="" className='rounded-md w-full h-full object-cover duration-200 hover:scale-105'/>
            <div className='mt-2'>
              <a href="https://www.figma.com/file/emfzVoXoqpE5V1bKtr4sbK/Ecommerce?type=design&node-id=0%3A1&mode=design&t=4RcgGgSjnCprYaML-1" target="_blank" rel="noopener noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Ecommerce</button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-pink-300 rounded-lg flex flex-col justify-center items-center">
            <img src={keeper} alt="" className='rounded-md w-full h-full object-cover duration-200 hover:scale-105'/>
            <div className='mt-2'>
              <a href="https://www.figma.com/file/2fYwvug2o6jGGzxZwKQ3CZ/Keeper-hospital?type=design&node-id=0%3A1&mode=design&t=uyHp4AMZWgSx3UW1-1" target="_blank" rel="noopener noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Keeper</button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-white rounded-lg flex flex-col justify-center items-center">
            <img src={crypto} alt="" className='rounded-md w-full h-full object-cover duration-200 hover:scale-105'/>
            <div className='mt-2'>
              <a href="https://www.figma.com/file/vnvAKwLWbSewafNcs8EEcd/Redesign?type=design&node-id=0%3A1&mode=design&t=xxigiMh3vRgCAcML-1" target="_blank" rel="noopener noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>CryptoApp</button>
              </a>
            </div>
          </div>
          <div className="shadow-md shadow-green-900 rounded-lg flex flex-col justify-center items-center">
            <img src={sass} alt="" className='rounded-md w-full h-full object-cover duration-200 hover:scale-105'/>
            <div className='mt-2'>
              <a href="https://www.figma.com/file/VnDzt8jZQ0tdcg7NWZx5Gk/Sass-3?type=design&node-id=0%3A1&mode=design&t=4lXNN3nR72UJC4zJ-1" target="_blank" rel="noopener noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Sass</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
