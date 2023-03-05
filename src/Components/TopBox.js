import React from 'react'
import "./TopBoxSt.css"
export default function TopBox() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-4'>
            <h1>Join A New Generation Of Logistics!</h1>
            <p>
                Redefining how you ship, track, collect, 
                deliver all through innovative tech-solutions and 
                efficient operations.
            </p>
            <button className='btn btn-danger'>Start now</button>
        </div>
        <div className='col-xl-8'>
            <div className='rectangel'>
                <div className='rotaterectangel45'></div>
                <div className='rotaterectangel-45'></div>
            </div>
        </div>
      </div>
    </div>
  )
}
