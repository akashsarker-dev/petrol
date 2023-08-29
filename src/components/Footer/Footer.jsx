import React from 'react'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa6'
import logo from '../images/logo.png'
import Certificate  from '../images/Certificate1.png'
import Certificate2  from '../images/Certificate2.png'

const Footer = () => {
  return (
    <>
    <footer class=" bg-[#1F1F1F] md:pt-[150px] md:pb-[170px] p-5">
      <div class="max-w-container mx-auto flex flex-wrap">
        <div class="footer-item md:w-2/5">
          <img class="mb-7" src={logo} alt=""/>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11.875 15H2.5L2.49812 5.56625L9.64437 10.5138C9.74887 10.5861 9.87293 10.6248 10 10.6248C10.1271 10.6248 10.2511 10.5861 10.3556 10.5138L17.5 5.56875V11.25H18.75V5C18.7495 4.66863 18.6176 4.35098 18.3833 4.11666C18.149 3.88235 17.8314 3.7505 17.5 3.75H2.5C2.16858 3.75033 1.85083 3.88213 1.61648 4.11648C1.38213 4.35083 1.25033 4.66858 1.25 5V15C1.2505 15.3314 1.38235 15.649 1.61666 15.8833C1.85098 16.1176 2.16863 16.2495 2.5 16.25H11.875V15ZM16.1244 5L10 9.24L3.87563 5H16.1244Z" fill="white"/>
              <path d="M16.25 17.5009C17.6307 17.5009 18.75 16.3814 18.75 15.0004C18.75 13.6195 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6195 13.75 15.0004C13.75 16.3814 14.8693 17.5009 16.25 17.5009Z" fill="white"/>
            </svg>
            <span class="text-sm font-normal text-white ml-1">mail@yourcompany.com</span>
          </div>
          <div class="flex items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 8.12556H13.75C13.7495 7.62834 13.5518 7.15163 13.2003 6.80004C12.8488 6.44846 12.3721 6.25072 11.875 6.25022V5C12.7035 5.00099 13.4978 5.33061 14.0836 5.91655C14.6694 6.50249 14.999 7.29691 15 8.12556Z" fill="white"/>
              <path d="M17.4997 8.125H16.2497C16.2483 6.96508 15.787 5.85305 14.9668 5.03287C14.1466 4.21269 13.0346 3.75132 11.8747 3.75V2.5C13.366 2.50165 14.7958 3.09482 15.8503 4.14935C16.9048 5.20389 17.498 6.63367 17.4997 8.125ZM16.2497 18.125H16.1434C3.86216 17.4187 2.11841 7.05625 1.87466 3.89375C1.83656 3.39797 1.99696 2.90736 2.32057 2.52983C2.64418 2.1523 3.1045 1.91878 3.60028 1.88063C3.64986 1.87688 3.69966 1.875 3.74966 1.875H7.04341C7.29375 1.87476 7.53841 1.94969 7.74568 2.0901C7.95294 2.23051 8.11328 2.42992 8.20591 2.6625L9.15591 5C9.24738 5.22722 9.27007 5.4763 9.22118 5.71631C9.17229 5.95631 9.05397 6.17667 8.88091 6.35L7.54966 7.69375C7.75676 8.87583 8.3224 9.96561 9.16987 10.8153C10.0173 11.665 11.1056 12.2335 12.2872 12.4437L13.6434 11.1C13.8193 10.9288 14.0418 10.8133 14.283 10.7677C14.5241 10.7221 14.7734 10.7486 14.9997 10.8438L17.3559 11.7875C17.585 11.8831 17.7804 12.0446 17.9173 12.2517C18.0542 12.4587 18.1264 12.7018 18.1247 12.95V16.25C18.1247 16.7473 17.9271 17.2242 17.5755 17.5758C17.2239 17.9275 16.7469 18.125 16.2497 18.125ZM3.74966 3.125C3.66758 3.12475 3.58626 3.14068 3.51034 3.17186C3.43441 3.20304 3.36538 3.24887 3.30716 3.30673C3.24895 3.36459 3.20271 3.43336 3.17107 3.50909C3.13944 3.58483 3.12303 3.66605 3.12278 3.74813C3.12278 3.76563 3.12341 3.78292 3.12466 3.8C3.41216 7.5 5.25591 16.25 16.2122 16.875C16.3776 16.8849 16.5402 16.8287 16.6642 16.7188C16.7882 16.6088 16.8634 16.4542 16.8734 16.2887L16.8747 16.25V12.95L14.5184 12.0062L12.7247 13.7875L12.4247 13.75C6.98716 13.0687 6.24966 7.63125 6.24966 7.575L6.21216 7.275L7.98716 5.48125L7.04966 3.125H3.74966Z" fill="white"/>
            </svg>
            <span class="text-sm font-normal text-white ml-1">+896 120 5889 (Toll free)</span>
          </div>
          <div class="flex items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.99986 15L6.19361 9.625C5.5706 8.88942 5.16939 7.99197 5.03671 7.03718C4.90403 6.08239 5.04533 5.10956 5.44418 4.23197C5.84302 3.35439 6.48298 2.60818 7.28952 2.08024C8.09607 1.55231 9.036 1.26439 9.99986 1.25C11.3359 1.2632 12.6124 1.80537 13.5495 2.75776C14.4867 3.71015 15.0082 4.99512 14.9999 6.33125C15.0004 7.49683 14.6035 8.62778 13.8749 9.5375L9.99986 15ZM9.99986 2.5C8.99477 2.51154 8.03534 2.92149 7.33224 3.63982C6.62915 4.35815 6.23986 5.32614 6.24986 6.33125C6.25405 7.24864 6.5841 8.13469 7.18111 8.83125L9.99986 12.825L12.8936 8.75C13.4437 8.0634 13.7454 7.211 13.7499 6.33125C13.7599 5.32614 13.3706 4.35815 12.6675 3.63982C11.9644 2.92149 11.005 2.51154 9.99986 2.5Z" fill="white"/>
              <path d="M10 6.875C10.6904 6.875 11.25 6.31536 11.25 5.625C11.25 4.93464 10.6904 4.375 10 4.375C9.30964 4.375 8.75 4.93464 8.75 5.625C8.75 6.31536 9.30964 6.875 10 6.875Z" fill="white"/>
              <path d="M17.5 7.5H16.25V8.75H17.5V17.5H2.5V8.75H3.75V7.5H2.5C2.16848 7.5 1.85054 7.6317 1.61612 7.86612C1.3817 8.10054 1.25 8.41848 1.25 8.75V17.5C1.25 17.8315 1.3817 18.1495 1.61612 18.3839C1.85054 18.6183 2.16848 18.75 2.5 18.75H17.5C17.8315 18.75 18.1495 18.6183 18.3839 18.3839C18.6183 18.1495 18.75 17.8315 18.75 17.5V8.75C18.75 8.41848 18.6183 8.10054 18.3839 7.86612C18.1495 7.6317 17.8315 7.5 17.5 7.5Z" fill="white"/>
            </svg>
            <span class="text-sm font-normal text-white ml-1">101 Baker Street, New York, USA, 12345</span>
          </div>
         <div className="contact text-white flex gap-[19px] mt-[34px]">  
            <FaFacebookF/><FaTwitter/><BsInstagram/><FaLinkedinIn/>
         </div>
        </div>

        <div className='md:w-3/5 w-full flex flex-wrap justify-between mt-10'>
        <div class="footer-item text-white">
          <h3 class="text-base font-bold mb-5">Company</h3>
          <ul >
            <li class="text-sm font-normal ">Home</li>
            <li class="text-sm font-normal mt-3.5">About</li>
            <li class="text-sm font-normal mt-3.5">Services</li>
            <li class="text-sm font-normal mt-3.5">Gallery</li>
          </ul>
        </div>
        <div class="footer-item text-white">
          <h3 class="text-base font-bold mb-5">Others</h3>
          <ul >
            <li class="text-sm font-normal ">Blog</li>
            <li class="text-sm font-normal mt-3.5">Contact</li>
            <li class="text-sm font-normal mt-3.5">Terms & Conditions</li>
            <li class="text-sm font-normal mt-3.5">Privacy Policy</li>
          </ul>
        </div>
        <div class="footer-item text-white">
          <h3 class="text-base font-bold mb-5">Certificate</h3>
          <div class="certificate md:gap-1  lg:flex  flex-wrap">
            <img src={Certificate} alt=""/>
            <img className='mt-10 md:m-0' src={Certificate2} alt=""/>
          </div>
        </div>
        </div>

        
      </div>
    </footer>
    <div class=" copyright py-11 bg-[#282828]">
      <p class="mx-auto max-w-container text-[#6C6C6C]">© Copyright 2022 by AltDesain Studio – All right reserved.</p>
    </div>
    </>
    
  )
}

export default Footer