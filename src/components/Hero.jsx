const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          VirtualR build tools
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral text-neutral-500 max-w-4xl"></p>
      </div>
    </div>
  );
};

export default HeroSection;
