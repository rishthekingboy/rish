import Link from "next/link";

const skillsList = [
  {
    name: "React",
    link: "https://reactjs.org/",
  },
  {
    name: "Next",
    link: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node",
    link: "https://nodejs.org/en/",
  },
  {
    name: "Javascript",
    link: "https://www.javascript.com/",
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
  },
];

const SkillSets = () => {
  return (
    <div id="skills" className="text-center">
      <h2 className="text-xl font-semibold cursor-pointer">
        <span className="border-b-[3px] border-purple-800 px-3">Skills</span>
      </h2>
      <ul className="flex gap-4 justify-center py-10 flex-wrap">
        {skillsList.map(({ name, link }, i) => (
          <Link key={i} href={link}>
            <li className="my-5">
              <span
                className={"shadow-2xl p-5 bg-blue-700 text-white rounded-2xl"}
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
