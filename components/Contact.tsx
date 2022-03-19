import styles from "../styles/components/Contact.module.css";
import img from "../public/work-onprogress.svg";
import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import Link from "next/link";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.heading} m-auto cursor-pointer`}>Contact</div>
      <div className={`${styles.formContainer} flex  py-5 items-center`}>
        <div className={`${styles.img} flex-1 `}>
          <Image src={img} alt={"contact image"}  width={"100%"}/>
        </div>
        <div className="form flex-1 flex-column w-full">
          <div className="field w-full">
            <input
              type="text"
              className="bg-gray-100 w-full p-2 outline-none rounded hover:shadow text-gray"
              placeholder="Your Name"
            />
          </div>
          <div className="field w-full my-3">
            <input
              type="email"
              className="bg-gray-100 w-full p-2 outline-none rounded hover:shadow"
              placeholder="Email"
            />
          </div>
          <div className="field w-full my-3">
            <textarea
              cols={30}
              rows={5}
              className="bg-gray-100 w-full p-2 outline-none rounded hover:shadow"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="field w-full ">
            <div className="submit bg-purple-600 p-2 text-white text-center hover:shadow-md  rounded cursor-pointer">
              Send
            </div>
          </div>
          <div
            className={`${styles.alternateConnect} flex items-center field w-full lg:pt-6 lg:pb-6`}
          >
            OR
          </div>
          <div className={` flex items-center field w-full justify-center`}>
            <Link href="http://github.com/rishthekingboy">
              <a>
                <FaGithub className="text-4xl" />
              </a>
            </Link>
            <Link href="mailto:rishmark98@gmail.com">
              <a>
                <FaEnvelope className="text-4xl mx-3 text-green-500 " />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rishthekingboy/">
              <a>
                <FaLinkedin className="text-4xl mx-3 text-blue-400" />
              </a>
            </Link>
            <Link href="https://instagram.com/rishthekingboy">
              <a>
                <FaInstagram className="text-4xl text-red-500" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
