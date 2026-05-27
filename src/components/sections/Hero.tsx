import Navbar from "../layout/Navbar";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <header className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />

        <section className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-blue-400">Modern AI Platform</p>

            <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
              Build Better Products Faster
            </h1>

            <p className="mt-6 max-w-lg text-gray-400">
              Create scalable and modern applications with powerful tools and
              seamless workflows.
            </p>

            <div className="mt-8 flex gap-4">
              <Button text="Get Started" />
              <Button text="Learn More" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="h-[500px] rounded-3xl bg-zinc-900"></div>
          </div>
        </section>
      </div>
    </header>
  );
}
