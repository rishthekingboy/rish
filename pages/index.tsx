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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className={styles.userSaysDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            voluptate aliquid ullam veritatis sequi aperiam veniam esse fuga a
            ea velit ut at assumenda, recusandae corporis consequuntur sit modi
            quidem ipsa dolor. Corrupti adipisci fuga provident error eaque sunt
            obcaecati odit amet, porro ut ducimus deleniti, alias, labore fugiat
            repellendus!
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
