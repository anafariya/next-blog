import Image from 'next/image';
import Link from 'next/link';
export default function Home()

{
  return (
    
    <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto py-8">
      <div className="text-center lg:text-left max-w-md mr-8 lg:mr-0 mb-8 lg:mb-0">
        <h1 className="text-3xl font-bold mb-4">Dr. Nasima Nisha</h1>
        <p className="mb-4">Introducing Dr.Nasima Nisha,a prolific writer and scholar with a Ph.D.,residing in cultural heartland of Varanasi. Renowned for her exquisite shers and ghazals.</p>
        <p className="mb-4">Her literary prowess and poetic finesse shines through her published book "<Link href="https://www.amazon.in/-/hi/Dr-Naseema-Nisha/dp/B07VGGVBTV"><button className="text-pink-600 hover:underline">Parwaz</button></Link>," showcasing her mastery of Hindwi (Hindi and Urdu) poetry.</p>
        <p className="mb-4">Connect with Dr. Nasima Nisha on <Link href="https://www.facebook.com/p/Dr-Nasima-Nisha-100063766823492/"><button className="text-pink-600 hover:underline">Facebook</button></Link> to stay updated on her latest writings, events, and discussions.</p>
        <p>For inquiries and collaborations, please <Link href="/contact"><button className="text-pink-600 hover:underline">contact</button></Link> Dr. Nasima Nisha.</p>
      </div>
      <div className="lg:ml-8">
        <Image src="/home.jpg" alt="Dr. Nasima Nisha" width={250} height={225} />
      </div>
    </div>
  );
}
