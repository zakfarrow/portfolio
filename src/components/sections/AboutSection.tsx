const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-16 flex scroll-mt-20 flex-col md:scroll-mt-40 md:px-6"
    >
      <h1 className="pb-8 md:hidden">About</h1>
      <p className="pb-4 opacity-60">
        Hi, I&apos;m Zak Farrow, a software engineer who loves turning complex
        ideas into smooth, user-friendly applications. With a strong background
        in Mathematics and Computer Science, I specialize in React and Python
        but enjoy experimenting with a wide range of technologies. Whether
        it&apos;s building full-stack web applications or optimizing
        performance, I&apos;m all about crafting clean, maintainable code that
        just works.
      </p>
      <p className="pb-4 opacity-60">
        Currently, I&apos;m part of the team at Aircharge, where we&apos;re
        creating innovative IoT-connected wireless charging solutions. In my
        downtime, you might find me working on my side projects, learning a new
        technology, or brainstorming the next big project.
      </p>
      <p className="opacity-60">
        Let&apos;s connect and create something amazing!
      </p>
    </section>
  );
};

export default AboutSection;
