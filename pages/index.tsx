import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import mainAvatar from "../public/rishabh.jpg";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SkillSets from "../components/SkillSets";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
     

      {/* HOME */}
      <div className={`${styles.home} px-5 py-6 lg:w-5/12 m-auto`}>
        <div className={`${styles.profilePic} mt-6 flex justify-center w-40 m-auto`} id="about">
          <Image src={mainAvatar} alt={"user pic"} />
        </div>

        <div className={`${styles.userDetails}`}>
          <h2 className={styles.userName}>Rishabh Singh</h2>
          <div className={styles.profession}>Software Engineer</div>
        </div>

        <div className={`${styles.userSays} shadow p-4  rounded`}>
          <div className={`${styles.userSaysHeading} font-medium`}>
            A Software Enginner who loves to simplify comples things...
          </div>
          <div className={styles.userSaysDetails}>
            <span className="text-purple-600 text-3xl">H</span>i There! I am a Full Stack
            Software Developer having exprience in Reactjs/Nextjs/React Native
            and Nodejs. I am highly motivated and inspired engineer and i love
            to solve problems and give them a beautiful solution
          </div>
        </div>
      </div>

      <SkillSets />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
