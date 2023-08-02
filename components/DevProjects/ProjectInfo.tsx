import { FC } from "react";
import { ProjectInfoCard, ProjectLinksBox } from ".";

interface ProjectInfoProps {
  description: string;
  website: string;
  source?: string;
}

export const ProjectInfo: FC<ProjectInfoProps> = ({
  description,
  website,
  source,
}) => {
  return (
    <div className="flex w-2/5 flex-col justify-between gap-6">
      <ProjectInfoCard />
      <p className="px-6 text-xl text-primary-500">{description}</p>
      <ProjectLinksBox website={website} source={source} />
    </div>
  );
};
