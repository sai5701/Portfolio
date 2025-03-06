const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-80"></div>

      {/* Orange Glow Effect in the Middle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-glow"></div>
    </div>
  );
};

export default BackgroundEffect;
