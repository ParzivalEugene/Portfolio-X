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
            className="flex justify-center items-center py-2 px-3 bg-white text-black font-medium rounded-md text-2xl leading-9 ml-8"
          >
            <h2>{item}</h2>
          </div>
        ))}
        <div className="flex justify-center items-center py-2 px-3 font-medium text-2xl leading-9 ml-8">
          <h2>Open to job offers</h2>
        </div>
      </Marquee>
    </section>
  );
};

export default RunningLine;
