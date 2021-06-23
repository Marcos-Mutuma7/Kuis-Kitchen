
import Image from 'next/image'
import logo from '../images/logo.png'



export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-0 mb-16 md:mb-0">
     <Image 

     src={logo} 
     width={150}
      height={150}
     alt="Picture of the author" 
     />
      <h4 className=" text-black-700 font-sans  font-extrabold text-center md:text-left text-6xl ml-5 mt-0 md:pl-20">
                   Kui's Blog
      </h4>
    </section>
  )
}
                   