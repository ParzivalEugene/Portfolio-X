import { AnalyzingSystemBox, Vortex } from "@/components/Animations";
import { ProjectInfo } from "@/components/DevProjects";
import Image from "next/image";

const data = {
  key: ["type", "core", "db", "style", "host"],
  value: [
    "Fullstack application",
    "Next.js",
    "supabase",
    "Tailwind",
    "Netlify",
  ],
};

export const Musify = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold uppercase text-accent-500">Musify</h2>
        <div className="flex gap-5">
          <div className="flex h-full items-center justify-center border border-primary-500 p-8">
            <Vortex />
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/protocol_icon.svg"
                width={56}
                height={10}
                alt="protocol"
              />
              <p className="text-center text-[10px] text-xs uppercase text-primary-500">
                Protocol
              </p>
              <p className="-mt-[4px] text-center text-[10px] text-xs uppercase text-primary-500">
                musify%$
              </p>
            </div>
            <div className="flex flex-col text-[10px] uppercase">
              <p>Connected to server</p>
              <p>connection established</p>
              <p>Breaching...</p>
              <p>Getting information...</p>
            </div>
            <Image
              src="/assets/cyber_sign_3.svg"
              height={64}
              width={55}
              alt="X"
            />
          </div>
        </div>
        <div className="relative w-fit">
          <AnalyzingSystemBox />
          <div className="stack-card absolute bottom-0 flex w-max flex-col">
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
      <ProjectInfo
        description="The Musify project is a clone of the popular music streaming platform Spotify, created as a website portfolio to showcase my skills and expertise in web development. The primary purpose of Musify is to provide users with a seamless and immersive music listening experience, offering a wide range of features including searching and browsing for songs, creating playlists."
        website="https://musify.michkoff.com"
        source="https://github.com/ParzivalEugene/Musify"
      />
    </section>
  );
};
