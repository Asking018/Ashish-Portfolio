import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"  style={{ paddingTop: "100px",paddingBottom:'200px'}}  >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10'>As a UI/UX and AR filter developer, I craft websites from scratch, seamlessly aligning elements with the user journey. Proficient in Figma and WordPress, I create visually appealing, intuitive interfaces. I also design captivating 3D objects and AR filters for Facebook, Instagram, and Snapchat, focusing on immersive experiences. Passionate about design's impact, I'm based in Surat, Gujarat, continuously learning to deliver unique projects that delight users. Attention to detail ensures user satisfaction, making each experience memorable</p>
               
        <br/>
        
      </div>
    </div>
  )
}

export default About
