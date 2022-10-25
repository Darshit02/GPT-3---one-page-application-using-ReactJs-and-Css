import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className='gpt3__whatgpt3-header'>
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature />
      <Feature />
      <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3
