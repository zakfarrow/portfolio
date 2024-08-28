import IProjectsProps from "@/types/IProjectProps";

const ProjectItem: React.FC<{ props: IProjectsProps }> = ({ props }) => {
  const { title, description, technologies, image } = props;
  return (
    <>
      <h2 className="">{title}</h2>
      <p className="text-md opacity-60">{description}</p>
      <ul className="flex gap-x-4">
        {technologies.map((tech, index) => (
          <li
            className="rounded-full bg-cyan-100/10 px-3 py-1 text-sm font-medium leading-5 text-cyan-300"
            key={index}
          >
            {tech}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectItem;
