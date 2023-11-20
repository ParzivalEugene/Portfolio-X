import { Cubes, DiscopusPortal } from "@/components/Animations";
import { ProjectInfo } from "@/components/DevProjects";

const data = {
  key: ["type", "core", "db", "style", "host"],
  value: [
    "Fullstack application",
    "Next.js, React, Nest",
    "PostgreSQL",
    "Tailwind, scss",
    "self-hosted",
  ],
};

export const Discopus = () => {
  return (
    <section className="mt-16 flex justify-between">
      <ProjectInfo
        description="An ecosystem of AI-based practice-oriented learning products that completely changes the methodology of working with young professionals. A unique ecosystem of the future based on artificial intelligence, which provides students with practical skills while studying at universities, starting from the first year."
        website="https://discopus.ru/"
      />
      <div>
        <h2 className="mb-5 text-4xl font-bold uppercase text-accent-500 text-center">
          Discopus
        </h2>
        <div className="relative flex flex-row-reverse items-end gap-5">
          <DiscopusPortal />
          <div className="absolute left-16 top-8 z-0 border border-primary-500 bg-background">
            <Cubes />
          </div>
          <div className="z-10 flex flex-col">
            <div className="flex justify-center border border-primary-500 bg-secondary-500 px-6 py-3">
              <h2 className="text-3xl font-medium uppercase">Stack</h2>
            </div>
            <div className="flex gap-4 border-x border-b border-primary-500 bg-background px-6 py-3 uppercase">
              <div className="flex flex-col">
                {data.key.map((item, key) => (
                  <p className="text-accent-500" key={key}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex flex-col">
                {data.value.map((item, key) => (
                  <p key={key}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
