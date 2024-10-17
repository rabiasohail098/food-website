"use client"
import React, { useState } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e:any) {
        e.preventDefault();
        // Here you can add form submission logic, like sending data to an API
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    }

  return (
    <>
    <div className='contact' id="contact-sec">
    <h1 className='w-[35%] text-[50px] font-extrabold mt-[80px] text-black'>Contact Me</h1>

    </div>
    <div className="contact-container text-[24px] w-[98%] ml-[10px] text-black">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='text-[30px] w-[98%] ml-[20px] mr-[20px] mb-[20px]'>Name:</label>
        <input className='text-[24px] w-[98%] ml-[10px]  mr-[20px] mt-[20px] mb-[20px]'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email" className='text-[30px] w-[98%] ml-[20px] mr-[20px]'>Email:</label>
        <input className='text-[24px] w-[98%] ml-[10px]  mr-[20px] mt-[20px] mb-[20px]'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message" className='text-[30px] w-[98%] ml-[20px] mr-[10px]'>Message:</label>
        <textarea className='text-[24px] w-[98%] ml-[10px] mr-[20px] mt-[20px] mb-[20px]'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          required
        ></textarea>

        <button className="text-[30px] pt-10px hover:text-red-400 pb-10px w-[98%] ml-[20px] mr-[20px] mt-[20px] border-[5px] max-w-full border-pink-400" type="submit">Send Message</button>
      </form>

    </div>
    <div id="contact-sec">
  <h1 className='w-[35%] text-[50px] font-extrabold mt-[80px] text-black'>Other Resources</h1>
  <div className='flex flex-row' id="icons">
    <Link href="https://www.linkedin.com/in/rabia-sohail-684740278/" className='gap-14 text-[24px] flex flex-col ml-[6%] text-center text-blue-700'>
      <span><CiLinkedin /></span>
      <p id="anch-para">LinkedIn</p>
    </Link>

    <Link href="https://www.youtube.com/@Parniya098" className=' gap-14 text-[24px] flex flex-col ml-[6%] text-center text-red-500'>
      <span><CiYoutube /></span>
      <p id="anch-para">YouTube</p>
    </Link>

    <Link href="https://www.facebook.com/parniyasohail098/" className='gap-14 text-[24px] flex flex-col ml-[6%]  text-center text-blue-500'>
      <span><CiFacebook /></span>
      <p id="anch-para">Facebook</p>
    </Link>

    <Link href="https://www.instagram.com/rabiasohail642/" className=' gap-14 text-[24px] flex flex-col ml-[6%] text-center text-orange-300'>
      <span><FaInstagram /></span>
      <p id="anch-para">Instagram</p>
    </Link>

    <Link href="https://github.com/rabiasohail098" className='gap-14 text-[24px] flex flex-col ml-[6%] text-center text-black'>
      <span><FaGithub /></span>
      <p id="anch-para">GitHub</p>
    </Link>
  </div>
</div>
    </>
  );
};

export default ContactForm;
