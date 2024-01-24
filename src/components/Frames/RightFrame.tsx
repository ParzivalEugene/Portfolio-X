"use client";
import { generateRandomString } from "@/tools";
import { useEffect, useState } from "react";

export const RightFrame = () => {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(120));
  }, []);

  return (
    <div className="sticky top-1/2 -translate-y-1/2 flex flex-row-reverse items-center pr-1 uppercase">
      <p
        style={{ writingMode: "vertical-lr" }}
        className="text-xs text-primary-500"
      >
        alpha version development in progress
      </p>
      <p
        style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
        className="text-[8px] text-secondary-700"
      >
        {randomString}
      </p>
    </div>
  );
};
