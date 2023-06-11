import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logoImg from "../../../assets/culinaryLogo.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img className="w-3/4" src={logoImg} alt="" />
        <div>
          CulinaryCompass is leading culinary training Institute
          <br />
          <p className="font-bold">
            Copyright © 2023 - All right reserved by CulinaryCompass
          </p>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Training</a>
        <a className="link link-hover">Provide Certificate</a>
        <a className="link link-hover">Internship Program</a>
        <a className="link link-hover">Mentorship Support</a>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <p>1000/K-Block, Halishar, Chittagong</p>
        <p>Phone: +88011111111</p>
        <p>Email: culinarycompass@info.com</p>
      </div>
      <div>
        <span className="footer-title">Find Us On Social</span>
        <div className="flex gap-5">
          <FaFacebook className="text-3xl hover:cursor-pointer"></FaFacebook>
          <FaTwitter className="text-3xl hover:cursor-pointer"></FaTwitter>
          <FaLinkedin className="text-3xl hover:cursor-pointer"></FaLinkedin>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
