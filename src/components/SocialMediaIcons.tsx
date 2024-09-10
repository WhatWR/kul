import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 text-5xl">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kul-boonanake-064b441b5/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/ijustwannahigh/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/WhatWR"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  )
}

export default SocialMediaIcons
