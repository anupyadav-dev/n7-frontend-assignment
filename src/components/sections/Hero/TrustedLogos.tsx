const logos = [
  "SHELLS",
  "SmartFinder",
  "Zoomerr",
  "ArtVenue",
  "kontrastr",
  "WAVESMARATHON",
];

export default function TrustedLogos() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
        Trusted By:
      </p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
        {logos.map((logo) => (
          <li
            key={logo}
            className="text-sm font-medium text-white/45 transition-colors hover:text-white"
          >
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}
