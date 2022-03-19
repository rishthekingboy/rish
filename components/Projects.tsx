import styles from "../styles/components/Projects.module.css";
import projectImg from "../public/portfolio1.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Projects</div>
      <ul className={styles.cards}>
        {[...Array(5)].map((e, i) => (
          <li key={i} className={`${styles.card} hover:shadow-lg shadow`}>
            <div className={`${styles.img} cursor-pointer`}>
              <Image src={projectImg} alt={"project img"} />
            </div>
            <div className={styles.summary}>
              <div className={styles.title}> Admin Dashboard</div>
              <div className={styles.about}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                earum autem iste, tempore numquam sapiente doloribus et voluptas
                iusto culpa
              </div>
              <div className={`${styles.live} cursor-pointer`}>Check Live</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
