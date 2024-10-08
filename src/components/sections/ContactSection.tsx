import Image from "next/image";
import linkedinIcon from "public/linkedin.svg";
import githubIcon from "public/github.svg";
import emailIcon from "public/email.svg";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="mb-16 flex scroll-mt-20 flex-col md:scroll-mt-40 md:px-6 md:pb-40"
    >
      <h1 className="pb-8 md:hidden">Contact</h1>
      <p className="pb-8 opacity-80">
        I&apos;d love to hear from you! Whether you have a question, a project
        idea, or just want to connect, you can find me on any of the platforms
        below.
      </p>
      <div className="mx-auto flex gap-x-6 align-middle md:mx-0">
        <a href="https://www.linkedin.com/in/zak-farrow/" target="_blank">
          <Image
            src={linkedinIcon}
            alt="linkedIn"
            width={30}
            height={30}
            className="opacity-50 transition-opacity duration-200 hover:opacity-100"
          />
        </a>
        <a href="https://github.com/zakfarrow" target="_blank">
          <Image
            src={githubIcon}
            alt="github"
            width={30}
            height={30}
            className="opacity-50 transition-opacity duration-200 hover:opacity-100"
          />
        </a>
        <a href="mailto:zasfarrow@gmail.com">
          <Image
            src={emailIcon}
            alt="email"
            width={30}
            height={30}
            className="opacity-50 transition-opacity duration-200 hover:opacity-100"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
