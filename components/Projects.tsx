import styles from "../styles/components/Projects.module.css";
import projectImg from "../public/portfolio1.jpg";
import Image from "next/image";
import { projectData } from "../utils/data";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.heading}>Projects</div>
      <ul className={styles.cards}>
        {projectData.map(({ title, desc, img, link }, i) => (
          <li key={i} className={`${styles.card} hover:shadow-lg shadow`}>
            <div className={`${styles.img} cursor-pointer`}>
              <Image src={img || projectImg} alt={title} />
            </div>
            <div className={styles.summary}>
              <div className={styles.title}>{title}</div>
              <div className={styles.about}>{desc}</div>
              <Link href={link}>
                <div className={`${styles.live} cursor-pointer`}>Check</div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
