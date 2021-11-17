import style from "./Footer.module.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer () {

    return (
        <div className = {style.footerContainer} >
            <ul>
                <li><a href = "https://www.facebook.com/william.lima.5623" ><FaFacebook/></a></li>
                <li><a href = "https://www.instagram.com/will_crill/" ><FaInstagram/></a></li>
                <li><a href = "https://www.linkedin.com/in/william-lima-826806216/" ><FaLinkedin/></a></li>
                <li><a href = "https://github.com/WillCrill" ><FaGithub/></a></li>
            </ul>
            <p>@ Copyright</p>
        </div>
    )
}

export default Footer