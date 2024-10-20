"use client";
import { faDiscord, faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const socialIcon = [
    {
      url: "/",
      icon: faFacebookF,
      color: "blue"
    },
    {
      url: "/",
      icon: faDiscord,
      color: "purple"
    },
    {
      url: "/",
      icon: faTwitter,
      color: "black"
    },
    {
      url: "/",
      icon: faLinkedinIn,
      color: "blue"
    },
    {
      url: "/",
      icon: faYoutube,
      color: "red"
    },
  ];

  const footerLinks = [
    { name: "Contact Us", url: "/contact-us" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "FAQ", url: "/faq" },
    { name: "Blog", url: "/blog" },
    { name: "About Us", url: "/about-us" },
    { name: "Careers", url: "/careers" },
    { name: "Help Center", url: "/help" },
  ];

  return (
    <div className='md:flex md:w-4/5 mx-auto gap-4 md:py-10'>
      <div className='md:w-2/5 w-fit mx-auto text-sm md:text-base pt-2 grid grid-cols-1 md:grid-cols-4 gap-5'>
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.url} className='text-black md:text-base whitespace-nowrap text-sm hover:text-blue-700'>
            {link.name}
          </Link>
        ))}
      </div>
      <div className='md:mt-0 w-fit mt-8 mx-auto text-black md:flex grid grid-cols-12 md:gap-4 gap-4 justify-end'>
        {
          socialIcon.map((menu, key) => (
            <Link key={key} href={menu.url} className='col-span-4'>
              <IconButton className='bg-inherit text-black' size='lg'>
                <FontAwesomeIcon color={menu.color} icon={menu.icon} className='w-5 h-5' />
              </IconButton>
            </Link>
          ))
        }
      </div>
      <div className=' w-fit mx-auto text-sm md:text-base md:py-2 py-8'>
        <span className='font-medium'>KryptoAPI</span> &copy; {new Date().getFullYear()} Alright Reserved
      </div>
    </div>
  );
};

export default Footer;
