"use client";
import { generateRandomString } from "@/tools";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { BoxWithCorners } from "@/components/common";

interface SectionProps {
  children: React.ReactNode;
}

interface ProjectLinksBoxProps {
  website: string;
  source?: string;
}

interface ButtonProps {
  text: string;
}

const Section: FC<SectionProps> = ({ children }) => (
  <div className="flex justify-between border-y border-secondary-500 px-2 py-1 text-[10px] uppercase text-secondary-700">
    {children}
  </div>
);

const Button: FC<ButtonProps> = ({ text }) => (
  <BoxWithCorners className="px-8 py-4 transition-all duration-300 ease-in-out hover:bg-secondary-500">
    <p className="text-2xl uppercase">{text}</p>
  </BoxWithCorners>
);

export const ProjectLinksBox: FC<ProjectLinksBoxProps> = ({
  website,
  source,
}) => {
  const [projectId, setProjectId] = useState("");
  useEffect(() => {
    setProjectId("id_" + generateRandomString(9));
  }, []);

  return (
    <div className="flex flex-col">
      <Section>
        <p>{projectId}</p>
        <p>corpo_serial_number</p>
      </Section>
      <div className="flex gap-6 self-center p-6">
        <Link href={website}>
          <Button text="website" />
        </Link>
        {source ? (
          <Link href={source}>
            <Button text="source" />
          </Link>
        ) : (
          <p className="text-2xl uppercase self-center">Closed source</p>
        )}
      </div>
      <Section>
        <p>daemon version 2023.x1c</p>
        <p>access recieved</p>
      </Section>
    </div>
  );
};
