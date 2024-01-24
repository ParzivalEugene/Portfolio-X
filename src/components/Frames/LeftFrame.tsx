"use client";
import { generateRandomString } from "@/tools";
import { useEffect, useState } from "react";

export const LeftFrame = () => {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(120));
  }, []);

  return (
    <div className="flex items-center uppercase pl-1 sticky top-1/2 -translate-y-1/2">
      <p
        style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        className="text-xs text-primary-500"
      >
        alpha version development in progress
      </p>
      <p
        style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
        className="text-[8px] text-secondary-700"
      >
        {randomString}
      </p>
    </div>
  );
};
