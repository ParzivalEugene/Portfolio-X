"use client";

import Marquee from "react-fast-marquee";

const data = [
  "Developer",
  "Digital Creator",
  "Designer",
  "Pythonista",
  "Let him cook!",
  "Database Engineer",
];

const RunningLine = () => {
  return (
    <section className="w-screen self-center">
      <Marquee autoFill speed={90}>
        {data.map((item, index) => (
          <div
            key={index}
            className="ml-8 flex items-center justify-center rounded-md bg-white px-3 py-2 text-2xl font-medium leading-9 text-black"
          >
            <h2>{item}</h2>
          </div>
        ))}
        <div className="ml-8 flex items-center justify-center px-3 py-2 text-2xl font-medium leading-9">
          <h2>Open to job offers</h2>
        </div>
      </Marquee>
    </section>
  );
};

export default RunningLine;
