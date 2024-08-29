import IProjectProps from "@/types/IProjectProps";
import ProjectItem from "@/components/ProjectItem";

const projects: IProjectProps[] = [
  {
    title: "Job Application Tracker",
    description:
      "I developed this web app as a centralized hub to manage all my job applications. In a competitive job market, applying to many positions is essential, but keeping track of them—especially when they’re spread across different job boards—can quickly become overwhelming, sometimes resulting in duplicate submissions. This app streamlines the process by offering a single platform to manage all applications, with quick job uploads and a range of tracking and management features, including email prompts for follow-up reminders.",
    technologies: ["React", "Django", "Typescript", "Tailwind", "Heroku"],
    image: "",
    repoURL: "https://github.com/zakfarrow/JobTracker",
  },
  {
    title: "Portfolio",
    description:
      "This is where I showcase my latest skills and projects, and document my professional journey. You'll also find my contact information and my most recent CV. Whether you're interested in exploring my work, learning more about my expertise, or reaching out for collaboration, this site offers a comprehensive view of who I am and what I bring to the table.",
    technologies: ["React", "Next", "Typescript", "Tailwind", "Heroku"],
    image: "",
    repoURL: "https://github.com/zakfarrow/portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mb-16 flex scroll-mt-20 flex-col gap-y-8 md:scroll-mt-40"
    >
      <h1 className="md:hidden">Projects</h1>
      {projects.map((project, index) => (
        <ProjectItem key={index} props={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
