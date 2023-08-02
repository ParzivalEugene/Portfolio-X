import { Discopus } from "./Discopus";
import { Musify } from "./Musify";

export const DevProjectsSection = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="dev-projects-banner flex h-[512px] w-[1280px] items-center justify-center">
        <div className="bg-background px-6 py-3">
          <h2 className="text-8xl font-medium uppercase text-accent-500">
            Dev Projects
          </h2>
        </div>
      </div>
      <Musify />
      <Discopus />
    </section>
  );
};
