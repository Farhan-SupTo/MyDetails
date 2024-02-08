import React from 'react';
import './styles.css'
//images
import MyImage from '../../assets/MyImage.jpg';
//icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {  SiInstagram, SiFacebook } from 'react-icons/si';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Banner = () => {



  return (
    <section className="min-h-[80vh] lg:min-h-[85vh] flex sm:justify-center" id='home'>
      <div className="mx-[10vw] md:mx-auto md:mt-[10vh]">
        <div className="flex flex-col sm:pt-20 md:pt-0 gap-y-6 lg:flex-row lg:items-center
        lg:align-middle lg:gap-x-[100px] overflow-hidden ">

          {/* {image} */}
          <div className='flex justify-center items-center align-middle mx-auto md:mb-8 lg:mb-0'>
            <motion.div variants={fadeIn('down', 0.5)}
              initial="hidden" whileInView={'show'}

              className="hidden md:flex flex-1 max-w-[40vw]
          md:mx-auto justify-center  md:ml-[10vw] lg:ml-[15vw] xl:ml-[3vw]">
              <div className='box'>
              <div className='content'>
                 <img src={MyImage} alt="" />
              </div>
              </div>
            </motion.div>
          </div>

          {/* {text} */}
          <motion.div variants={fadeIn('up', 0.3)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center align-middle font-secondary xl:ml-[5vw] lg:mr-[5vw] lg:text-left sm:w-full text-2xl">



            <p className="text-cyan-600 mb-3 lg:mb-8">
              <span className='text-[2rem]'>Hi there!</span>
              <span className="wave ml-3 text-4xl" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </p>

            <motion.h1 variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[6vh] leading-[0.8] lg:text-[6vh] font-semibold pb-2">
              <span className='text-cyan-700'>I'M</span>  FARHAN <span>SUPTO</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[3vh] lg:text-[3vh] font-secondary uppercase leading-[1] pt-1
              flex flex-row lg:justify-start justify-center py-6 xl:space-y-11">

              <TypeAnimation sequence={[
                'Full-Stack Developer',
                2000,
                'MERN and Next.js Developer',
                2000,
                'Programmer',
                2000,
                'Problem solver',
                2000,

              ]}
                speed={50}
                className="text-cyan-700 pt-2 font-extrabold text-2xl"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="xl:mt-10 mb-4 mx-auto text-[3vh] lg:text-[2vh] lg:mx-0">Nice to meet you. Please take a look around.</motion.p>
            <motion.div variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-5 mx-auto lg:mx-0 text-sm">
              <div>
                <Link to="work" activeClass='active'>
                  <button className="btn btn-sm hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
                    My Projects
                  </button>
                </Link>
              </div>
              <a href="https://drive.google.com/file/d/1U4Qa8JJsSq1I1ui7fXwi283ORShpAb7s/view?usp=sharing"
                target="_blank" rel="noreferrer">
                <div
                  className="px-4 py-3 border-b-4 border-cyan-200 text-cyan-200 hover:text-white hover:bg-cyan-700
                  transition-all duration-200 w-[150px] xl:w-[200px] flex justify-center flex-row items-center text-base xl:text-xl"

                >
                  See my Resume
                  <HiArrowNarrowRight className='ml-3' />
                </div>
              </a>
            </motion.div>
            <div className='xl:space-y-5'>
              <a href="/" className="text-gradient btn-link">FIND ME ON</a>
              {/* {Socials} */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/Farhan-SupTo" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/farhan-supto/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/farhan_supto21/" target="_blank" rel="noreferrer">
                  <SiInstagram />
                </a>
                <a href="https://www.facebook.com/farhanshahriar.supto" target="_blank" rel="noreferrer">
                  <SiFacebook />
                </a>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Banner;
