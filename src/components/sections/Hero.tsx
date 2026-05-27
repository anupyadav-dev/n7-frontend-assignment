import Navbar from "../layout/Navbar";
import Button from "../ui/Button";
import FloatingCard from "../ui/FloatingCard";

export default function Hero() {
  return (
    <header className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />

        <section className="grid min-h-[85vh] grid-cols-1 items-center gap-16 py-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-blue-400">Modern AI Platform</p>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Build Better Digital Products For Modern Teams
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Create scalable and modern applications with powerful tools,
              intuitive workflows, and seamless collaboration experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Get Started</Button>

              <Button variant="secondary">Learn More</Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Main Card */}
            <div className="relative h-[500px] w-full max-w-md rounded-[32px] border border-white/10 bg-zinc-900/80 backdrop-blur-xl"></div>

            <FloatingCard
              title="24K Users"
              subtitle="Active Growth"
              className="-left-8 top-10"
            />

            <FloatingCard
              title="99.9%"
              subtitle="Success Rate"
              className="-right-8 bottom-10"
            />
          </div>
        </section>
      </div>
    </header>
  );
}
