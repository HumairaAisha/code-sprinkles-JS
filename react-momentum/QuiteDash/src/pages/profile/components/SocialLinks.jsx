

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail  } from "react-icons/hi";

function SocialLinks() {
  return (
     <div className="flex gap-4 justify-center items-center py-2">
      <button className="hover:cursor-pointer">
         <FaGithub size={16}/>
      </button>
      <button className="hover:cursor-pointer">
         <FaLinkedin size={16}/>
      </button>
      <button className="hover:cursor-pointer">
         <FaXTwitter size={16}/>
      </button>
      <button className="hover:cursor-pointer">
         <FaFacebook size={16}/>
      </button>
      <button className="hover:cursor-pointer">
         <FaInstagram size={16}/>
      </button>
    </div>
  )
}

export default SocialLinks