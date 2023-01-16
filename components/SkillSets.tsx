import Link from "next/link";
import { skillsList } from "../utils/data";

const SkillSets = () => {
  return (
    <div id="skills" className="text-center">
      <h2 className="text-xl font-semibold cursor-pointer">
        <span className="border-b-[3px] border-purple-800 px-3">Skills</span>
      </h2>
      <ul className="flex gap-4 justify-center py-10 flex-wrap ">
        {skillsList.map(({ name, link }, i) => (
          <Link key={i} href={link}>
            <li className="my-3">
              <span
                className={
                  "shadow-2xl px-5 py-3 bg-blue-700 text-white text-base font-semibold rounded-2xl cursor-pointer"
                }
              >
                {name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SkillSets;
