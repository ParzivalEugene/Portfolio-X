"use client";

import { generateRandomString } from "@/tools";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  website: string;
  source: string;
}

interface ButtonProps {
  href: string;
  text: string;
}

const Divider = () => <div className="h-[1px] w-full bg-secondary-500" />;

const Button: FC<ButtonProps> = ({ href, text }) => (
  <Link href={href}>
    <div className="border border-primary-500 bg-secondary-500 px-6 py-3 transition ease-in-out hover:bg-primary-700">
      <span className="text-xl font-medium uppercase">{text}</span>
    </div>
  </Link>
);

export const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  website,
  source,
}) => {
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    setProjectId(generateRandomString(6));
  }, []);

  return (
    <div className="flex flex-row">
      <div className="design-card relative flex w-[28px] flex-col items-center justify-between bg-secondary-500 pb-2 pt-3 text-xs uppercase text-primary-500">
        <p style={{ writingMode: "vertical-lr", rotate: "180deg" }}>
          shard v2.0
        </p>
        <p style={{ writingMode: "vertical-lr", rotate: "180deg" }}>
          project identifier {projectId}
        </p>
      </div>
      <div className="flex w-min flex-col gap-4 border-y border-r border-primary-500 p-4">
        <h2 className=" text-3xl font-medium uppercase text-accent-500">
          {name}
        </h2>
        <Divider />
        <p className="">{description}</p>
        <Divider />
        <div className="flex w-max gap-4">
          <Button href={website} text="Website" />
          <Button href={source} text="Source" />
        </div>
      </div>
    </div>
  );
};
