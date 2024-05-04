import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative h-[605px] w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="inline-block text-center text-4xl font-medium tracking-tighter text-dark lg:text-7xl">
          Personal AI
        </h1>
        <p className="mt-8 text-center text-xl font-light tracking-tight lg:text-3xl">
          Welcome to my stream of consciousness - where my ideas come to life.
        </p>
      </div>
      {/* background gradient */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] hidden h-full w-full grid-cols-3 md:grid">
        <BackgroundGradient />
        <BackgroundGradient />
        <BackgroundGradient />
      </div>
    </div>
  );
};

function BackgroundGradient() {
  return (
    <div
      className="h-full w-full rounded-full"
      style={{
        opacity: '0.4',
        background:
          'radial-gradient(54.14% 54.14% at 50% 50%, #7b97aa 0%, rgba(40, 75, 99, 0.02) 100%)',
        filter: 'blur(177px)',
      }}
    />
  );
}

export default Banner;
