const logos: string[] = [
  "SHELLS",
  "SmartFinder",
  "Zoomerr",
  "ArtVenue",
  "kontrastr",
  "WAVESMARATHON",
];

export default function TrustedLogos() {
  return (
    <div className="mt-16 text-center lg:text-left">
      <p className="mb-4 text-sm text-gray-400">Trusted By:</p>

      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
        {logos.map((logo) => (
          <span
            key={logo}
            className="transition-colors duration-300 hover:text-white"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
