const HeroBackground = () => {
  return (
    <>
      <div
        className="fixed top-0 inset-0 opacity-30 h-full"
        style={{
          background: `radial-gradient(circle at 0 50%, rgba(220, 38, 127, 0.1) 0%, rgba(160, 54, 105, 0.1) 25%, rgba(147, 51, 234, 0.06) 50%, transparent 70%)`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 border border-slate-200 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 border border-red-200 rotate-12 direction-reverse animate-spin"
          style={{ animationDuration: "60s" }}
        />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-slate-100 to-red-50 rotate-45" />
      </div> */}
    </>
  );
};

export default HeroBackground;
