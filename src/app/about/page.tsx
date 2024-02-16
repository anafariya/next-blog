import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div className="container mx-auto py-8 bg-pink-100 text-gray-800 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-md md:mr-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Dr. Nasima Nisha</h1>
          <p className="text-lg md:text-xl mb-4">
            Dr. Nasima Nisha is a distinguished scholar and accomplished author, holding degrees in B.A., B.Ed, M.A., and Ph.D. Her literary prowess extends beyond academia, where she masterfully crafts captivating poems and compelling stories that deeply resonate with readers.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Beyond her literary pursuits, Nasima is a devoted mother and cherished spouse, whose love and support fuel her creative endeavors. With open arms, she welcomes readers to immerse themselves in her evocative writings, inviting them on a journey of introspection and imagination through her website.
          </p>
        </div>
        <div style={{ width: '250px', height: 'auto' }}>
          <Image src="/about.jpg" alt="about" width={250} height={500} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
