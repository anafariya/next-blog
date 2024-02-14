import Image from 'next/image'
import React from 'react'

function AboutPage() {
  return (
    <div>
      <Image src="/about.jpg" alt='about' width={250} height={225}>

      </Image>
    </div>
  )
}

export default AboutPage