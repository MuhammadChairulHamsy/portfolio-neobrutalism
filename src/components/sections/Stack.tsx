import { skills } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";


const Stack = () => {
  return (
    <section className="pt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary border-2 border-[#1a1a1a] rounded-lg p-2.5 shadow-[3px_3px_0px_#1a1a1a]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Stack
          </h2>
        </div>

        {/* Badge Grid */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
    </section>
  );
};

export default Stack;