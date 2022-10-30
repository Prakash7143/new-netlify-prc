import React from 'react'
import {BsLinkedin, BsTwitter, BsGithub, BsFacebook } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitter/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials