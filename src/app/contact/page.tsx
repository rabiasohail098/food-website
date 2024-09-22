"use client"
import React, { useState } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
      <h1 className='w-[35%] text-[50px] font-extrabold mt-[80px] text-black'>Other Resourses</h1>
      <p className='flex' id="icons">
     <a href="https://www.linkedin.com/in/rabia-sohail-684740278/" className=' ml-[6%] text-[24px] text-center text-blue-700'><CiLinkedin /> <br /><p className='text-center text-[30px]' id="anch-para">linkedin</p></a> 
      <a href="https://www.youtube.com/@Parniya098" className=' ml-[6%] text-[24px] text-center text-red-500'><CiYoutube /><br /><p className='text-center text-[30px]' id="anch-para">Youtube</p></a>
     <a href="https://www.facebook.com/parniyasohail098/" className=' ml-[6%] text-[24px] text-center text-blue-500'><CiFacebook /><br /><p className='text-center text-[30px]' id="anch-para">Facebook</p></a> 
      <a href="https://www.instagram.com/rabiasohail642/" className=' ml-[6%] text-[24px] text-center text-orange-300'><FaInstagram /><br /><p className='text-center text-[30px]' id="anch-para">Instagram</p></a>
      <a href="https://github.com/rabiasohail098" className='ml-[6%] size-12 text-center'><FaGithub /><br /><p className='text-center text-[30px]' id="anch-para">GitHub</p></a>
      </p>
    </div>
    </>
  );
};

export default ContactForm;
