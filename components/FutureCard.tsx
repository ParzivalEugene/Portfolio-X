import Link from "next/link";
import Spinner from "./Spinner";

const FutureCard = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-center border border-primary py-3">
        <h1 className="text-2xl font-medium uppercase">Michkoff.com</h1>
      </div>
      <div className="flex aspect-1 w-full items-center justify-center border-x border-primary">
        {/* <Image src="/donut.svg" alt="donut" width={150} height={150} /> */}
        <Spinner />
      </div>
      <Link href="https://links.michkoff.com">
        <div className="border border-primary bg-primary/30 px-6 py-3 transition-colors hover:bg-primary/50">
          <p className="text-lg uppercase">Visit links 浏览连结</p>
        </div>
      </Link>
    </div>
  );
};

export default FutureCard;
