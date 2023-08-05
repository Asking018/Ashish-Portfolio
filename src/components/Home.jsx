import React from 'react';
import image from '../assets/image.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
   
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
      style={{ paddingTop:'200px',paddingBottom: '10%' }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a UI/UX Designer / AR Filter Designer
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
          I'm Ashsih singh, a skilled UI/UX and AR filter developer based in Surat, Gujarat. My passion lies in crafting visually appealing interfaces and designing captivating 3D objects and AR filters. Proficient in Figma and WordPress. With a keen eye for detail, I ensure each project is a delightful experience for users. Let's collaborate and bring your digital vision to life in the most extraordinary way possible!
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={image} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
