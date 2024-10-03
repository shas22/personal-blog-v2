export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I&apos;m <span className="text-cyan-700">Shas</span>!
        </h1>
        <h3 className="text-xl sm:text-2xl font-medium leading-relaxed">
          I&apos;m a Fullstack engineer (leaning towards backend) who has to be continued...
        </h3>
        <div className="pt-6 border-t border-neutral-700">
          <p className="text-lg font-medium text-gray-400">
            I&apos;m also a producer and audio engineer with a passion for photography.
          </p>
        </div>
        <div className="pt-8">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral-600 hover:text-cyan-700	 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-indigo-400 transition duration-150 ease-in-out">
            Explore My Work
          </a>
        </div>
      </div>
    </div>
  );
}