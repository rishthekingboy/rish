import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import mainAvatar from "../public/avatar2.jpg";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      {/* HOME */}
      <div className={`${styles.home} px-5 py-6`}>
        <div className={`${styles.profilePic} mt-6 flex justify-center`}>
          <Image src={mainAvatar} alt={"user pic"} />
        </div>

        <div className={`${styles.userDetails}`}>
          <h2 className={styles.userName}>Rishabh Singh</h2>
          <div className={styles.profession}>Software Engineer</div>
        </div>

        <div className={styles.userSays}>
          <div className={styles.userSaysHeading}>
            A Software Enginner who loves to simplify comples things...
          </div>
          <div className={styles.userSaysDetails}>
           <span className="text-purple-600">Hi There!</span> I am 
          </div>
        </div>
      </div>

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
