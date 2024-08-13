import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className='sm:px-10 px-5 py-5'>
        <div className="screen-max-width">
           <div>
            <p className="font-semibold text-gray text-xs">
                More ways to shop:{' '}
                <span className="underline text-blue">
                    Find an Apple Store {' '}
                </span>
                 or {' '}
                 <span className="underline text-blue">
                    other retailer {' '}
                </span>
                near you.
            </p>
            <p className="font-semibold text-gray text-xs">
                Or call 000800-040-1966
            </p>
           </div>
           <div className="bg-neutral-700 my-5 h-[1px]"/>
           <div className="flex flex-col md:flex-row justify-between md:items-center">
              <p className="semibold text-gray text-xs">
                Copyright @ 2024 Apple Inc, All rights reserved.
              </p>
              <div className="flex">
                {
                   footerLinks.map((link , i)=>(
                    <p key={link} className="font-semibold text-gray text-xs">
                       {link} {'  '}
                       { i!== footerLinks.map.length-1 && (
                         <span className="mx-2"> | </span>
                       )}
                    </p>
                   ))
                }
              </div>

           </div>
        </div>
    </section>
  )
}

export default Footer