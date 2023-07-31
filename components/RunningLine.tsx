"use client";

import Marquee from "react-fast-marquee";

const data = [
  "MICHKOFF.COM",
  "Developer",
  "Digital Creator",
  "Cyclist",
  "Pythonista",
  "Let him cook!",
  "Database Engineer",
  "Pianist",
  "Rust enjoyer",
  "Cyberpsycho",
];

export const RunningLine = () => {
  return (
    <section className="border-red-500 running-line-shade top-0 z-50 border-y border-primary-500 bg-background py-3 text-base uppercase">
      <Marquee autoFill speed={90}>
        {data.map((item, index) => (
          <div
            key={index}
            className="mx-4 border border-secondary-500 px-6 py-3"
          >
            <p>{item}</p>
          </div>
        ))}
        <div className="mx-4 border border-accent-500 px-6 py-3 text-accent-500">
          <h2>Open to job offers</h2>
        </div>
      </Marquee>
    </section>
  );
};
