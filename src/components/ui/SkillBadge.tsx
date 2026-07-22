import Image from "next/image";
import {SkillBadgeProps} from "../../types/SkillBadgeProps"


const SkillBadge = ({ name, icon, alt }: SkillBadgeProps) => {
  return (
    <div className="flex items-center gap-2 border-2 border-[#1a1a1a] rounded-full px-4 py-2 bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default select-none shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[3px_3px_0px_#1a1a1a] hover:-translate-y-0.5">
      <Image src={icon} alt={alt ?? name} width={20} height={20} className="shrink-0" unoptimized />
      <span className="text-sm font-semibold font-mono whitespace-nowrap">{name}</span>
    </div>
  );
};

export default SkillBadge;