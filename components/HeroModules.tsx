const HeroModules = () => {
  return (
    <div className="relative grid w-min auto-cols-auto">
      <div className="rounded-3xl bg-white p-2">
        <div className="rounded-2xl bg-black p-2">
          <h1 className="text-base font-medium">Earth Russia Moscow</h1>
        </div>
      </div>
      <div className="col-span-2" />
      <div className="col-span-1 col-start-2 rounded-3xl bg-white p-3">
        <div className="rounded-xl bg-black p-6">
          <h1 className="w-min text-center text-6xl font-bold">
            Michkov Eugene
          </h1>
        </div>
      </div>
      <div />
      <div className="col-start-3 h-min rounded-3xl bg-white p-2">
        <div className="rounded-2xl bg-black p-2">
          <h1 className="text-center text-base font-medium">Full stack</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroModules;
