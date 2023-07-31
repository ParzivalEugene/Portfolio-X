"use client";

import Marquee from "react-fast-marquee";

const data = [
  "Developer",
  "Digital Creator",
  "Cyclist",
  "Pythonista",
  "Let him cook!",
  "Database Engineer",
  "Pianist",
  "Rust enjoyer",
  "Cyberpsycho"
];

export const RunningLine = () => {
  return (
    <section className="border-y border-red-500 border-primary-500 py-3 uppercase text-base">
      <Marquee autoFill speed={90}>
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-secondary-500 py-3 px-6 mx-4"
          >
            <p>{item}</p>
          </div>
        ))}
        <div className="border border-accent-500 py-3 px-6 mx-4 text-accent-500">
          <h2>Open to job offers</h2>
        </div>
      </Marquee>
    </section>
  );
};

