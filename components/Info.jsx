import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BiSolidBellRing } from "react-icons/bi";





export default function Info() {
  return (
    <div className='info-container'>
    <h1>Embark on an Epic Journey with the Premier Road Trip Service Across North America, Oceania, and Europe!</h1>
    <div className='info-card'>
      <div className='info-each'>
        <AiFillThunderbolt className='info-icon' />
        <h3>Enjoy Freedom: Cancel Anytime up to 72h Before Your Adventure!</h3>
        <p>Flexibility at its best – get a full refund or opt for an 85% value voucher up to 72h before your pick-up date!</p>
      </div>
  
      <div className='info-each'>
        <MdEventAvailable className='info-icon' />
        <h3>Explore Uncharted Roads: One-Way Trips Now Available!</h3>
        <p>Conveniently collect and return your campervan at over 70 locations spanning North America, Europe, and Oceania.</p>
      </div>
  
      <div className='info-each'>
        <FiPhoneCall className='info-icon' />
        <h3>Worry-Free Adventures: RAC Breakdown Cover Included!</h3>
        <p>Partnered with RAC, we guarantee 24/7 nationwide breakdown coverage to keep your adventure on track.</p>
      </div>
  
      <div className='info-each'>
        <BiSolidBellRing className='info-icon' />
        <h3>Reserve Now, Pay Later! Experience Ultimate Booking Flexibility.</h3>
        <p>Secure your trip with ease – pay the full amount just 20 days before your adventure kicks off with our accommodating cancellation policy.</p>
      </div>
    </div>
  </div>
  )
}
    