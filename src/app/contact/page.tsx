"use client"
import React, { FormEvent, useState } from 'react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mail the form data to anafariya@gmail.com
    console.log(formData);

    // Reset the form after submission
    setFormData({ name: '', contactNumber: '', message: '' });
  };

  return (
    <div className="container mx-auto py-8 bg-pink-100 text-gray-800 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-md md:mr-8 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
          <Image src="/contact.jpg" alt="nasima nisha" width={500} height={500} />
        </div>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-lg mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-white border-2 border-gray-300 p-2 rounded-md w-full" required />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="contactNumber" className="text-lg mb-2">Contact Number:</label>
            <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="bg-white border-2 border-gray-300 p-2 rounded-md w-full" required />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-lg mb-2">Message:</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="bg-white border-2 border-gray-300 p-2 rounded-md w-full" required></textarea>
          </div>
          <button type="submit" className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
