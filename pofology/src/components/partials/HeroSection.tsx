import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDribbble, FiFacebook, FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaGoodreads, FaGoodreadsG } from 'react-icons/fa';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/IMG_2150.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Kuba Rozwadowski</h1>
        <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">kubaroz@bu.edu</h2>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm{''}
          <Typed
            strings={['a Computer Science Student', 'a Fullstack Developer', ' an Entrepreneur']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://www.linkedin.com/in/kuba-rozwadowski-a96499235/">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://github.com/kubarozwadowski">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer">
              <FiGithub size={25} />
            </a>
          </Link>
          <Link href="https://www.goodreads.com/user/show/138883521-kuba-rozwadowski">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer">
              <FaGoodreadsG size={25} />
            </a>
          </Link>
        </div>
        <a href="https://drive.google.com/file/d/1xoaiKX542d_Fw3BJceXUE-8Qejob2LRZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button className="mt-5 px-8">View my Resume!</Button>
        </a>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
