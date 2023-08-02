import { IceWall } from "@/components/Animations";
import { ProjectCard } from "@/components/DesignProjects";

export const DesignProjectsSection = () => {
  return (
    <section className="mx-auto mt-16 max-w-7xl">
      <div>
        <h3 className="mb-8 text-center text-xs uppercase text-primary-500">
          breaking through the ice (Intrusion Countermeasures Electronics)
        </h3>
        <IceWall />
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex w-min flex-col gap-8">
          <h2 className="w-max border border-primary-500 px-6 py-3 text-5xl font-medium uppercase text-primary-500">
            Design Projects
          </h2>
          <p className="text-primary-500">
            Leveraging the power of Next.js, a React framework, this application
            offers seamless navigation and optimal page loading speeds. The
            integration of Tailwind CSS ensures a highly customizable and modern
            design, enhancing user experience and making the application
            responsive across various devices. With clean code architecture and
            component-based design, the application is easy to maintain and
            expand upon. Its robust frontend, built with Next.js and Tailwind,
            guarantees an engaging and user-friendly experience for visitors.
          </p>
        </div>
        <ProjectCard
          name="Hoo Bank"
          description="Hoo Bank is a visually stunning frontend project with a beautiful design that seamlessly combines modern aesthetics with a user-friendly interface. Its intuitive navigation and thoughtful placement of elements ensure a delightful user experience, making banking tasks a breeze."
          website="https://hoo-bank.michkoff.com/"
          source="https://github.com/ParzivalEugene/hoo-bank"
        />
        <ProjectCard
          name="Galactic Way"
          description="Galactic Way is an extraordinary frontend project that transports users into a mesmerizing metaverse of planets through its breathtaking design. With its captivating visuals and smooth interactions, it offers an immersive user experience that truly brings the wonders of the galaxy to life."
          website="https://galactic.michkoff.com/"
          source="https://github.com/ParzivalEugene/galactic-way"
        />
      </div>
    </section>
  );
};
