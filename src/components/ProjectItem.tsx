import IProjectsProps from "@/types/IProjectProps";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";

const ProjectItem: React.FC<{ props: IProjectsProps }> = ({ props }) => {
  const { title, description, technologies, image, repoURL } = props;
  return (
    <div className="md:relative">
      <a
        href={repoURL}
        target="_blank"
        className="hidden h-full w-full rounded-xl bg-white opacity-0 transition-opacity hover:opacity-10 md:absolute md:z-10 md:block"
      ></a>
      <div className="md:p-6">
        <a href={repoURL} target="_blank" className="flex gap-x-2">
          <h2 className="pb-8 text-xl/5">{title}</h2>
          <LinkIcon className="size-5 md:hidden" />
        </a>
        <p className="text-md pb-8 opacity-60">{description}</p>
        <ul className="flex flex-wrap gap-x-2 gap-y-2 md:flex-nowrap md:gap-x-4 md:gap-y-0">
          {technologies.map((tech, index) => (
            <li
              className="rounded-full bg-cyan-100/10 px-3 py-1 text-sm font-medium leading-5 text-cyan-300"
              key={index}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
