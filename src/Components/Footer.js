import React from 'react';
import { FaTwitter, FaFacebookSquare,  FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-black text-white pt-8 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ut.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
  <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
    <FaTwitter className='ml-2 text-black text-2xl' />
  </button>
  <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
    <FaFacebookSquare className='ml-2 text-black text-2xl' />
  </button>
  <button className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
    <FaInstagram className='ml-2 text-black text-2xl' />
  </button>
  <button className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
    <FaLinkedin className='ml-2 text-black text-2xl' />
  </button>
</div>

        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Links</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">About Us</a>   
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact us</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Services</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Resources</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">License</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2023</span>
            <a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> My Minute
              <a href="#" className="text-blueGray-500 hover:text-blueGray-800"> Travel</a>.
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}

export default Footer;