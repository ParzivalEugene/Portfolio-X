import Marquee from "react-fast-marquee";
import { PiWarningFill } from "react-icons/pi";

const inProgress = [
  "Building in progress",
  "進行中の建物",
  "В разработке",
  "正在建设中",
];

const WarningLine = () => {
  return (
    <div>
      <div className="warning flex items-center py-7">
        <div className="flex flex-row gap-2 bg-black py-3 items-center">
          <PiWarningFill className="h-12 w-12 text-primary" />
          <div className="w-[1200px]">
            <Marquee autoFill speed={100} className="py-2">
              {inProgress.map((text, i) => (
                <span key={i} className="mx-12 text-2xl text-white">
                  {text}
                </span>
              ))}
            </Marquee>
          </div>
          <PiWarningFill className="h-12 w-12 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default WarningLine;
