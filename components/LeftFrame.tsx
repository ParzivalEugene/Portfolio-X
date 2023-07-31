"use client";
import { generateRandomString } from "@/tools";
import { useEffect, useState } from "react";

export const LeftFrame = () => {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(140));
  }, []);

  return (
    <div className="flex items-center uppercase pl-1 sticky top-32">
      <p
        style={{ writingMode: "sideways-lr" }}
        className="text-xs text-primary-500"
      >
        alpha version development in progress
      </p>
      <p
        style={{ writingMode: "sideways-lr", textOrientation: "mixed" }}
        className="text-[8px] text-secondary-700"
      >
        {randomString}
      </p>
    </div>
  );
};
