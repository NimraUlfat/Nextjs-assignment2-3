import React from "react";
import Header from "./components/header";
export default function Home() {
  return (
    <div>

  <div><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-pink-900">Hey! This is me Nimra I am nextjs Developer
          <div className="hidden lg:inline-block"> </div>
        </h1>
        <p className="mb-8 leading-relaxed font-medium text-voilet-900">Welcome! I'm Nimra, a passionate web developer with a love for nextjs. My approach combines creativity and technical skill to bring ideas to life.

I thrive on collaboration and believe that the best results come from teamwork. When I’m not working, you can find me social accounts, always seeking inspiration in the world around me. 

Let’s connect and create something amazing together!</p>
        <div className="flex justify-center">
          
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/960937636/photo/woman-hands-coding-html-and-programming-on-screen-laptop-web-developer.jpg?s=612x612&w=0&k=20&c=MSLlYt0QRwyRenwhZAhSerwvs-3qt9QjieJ0ta2MAuc="></img>
      </div>
    </div>
  </section>
        
    </div>

    <footer className="text-gray-100 body-font">


      <div className="container px-5 py-20 mx-auto"></div>

      
  <div className="border-t border-black-4">
    <div className="container px-5 py-8 flex flex-wrap mx-auto bg-sky items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">News letter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-red-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe now</button>
        < div className="text-black-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          <div className="lg:block hidden"></div>
        </div>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-black-100">
    <div className="container mx-medium py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">©Nimra Ulfat —
        <a href="https://www.linkedin.com/in/nimra-ulfat-14a2162b7/" className="text-black-600 ml-1" target="_blank" rel="noopener noreferrer">@NimraUlaft</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">copyright@NimraUlaft</span>
    </div>
  </div>
</footer>

    </div>

    
    
  );
}