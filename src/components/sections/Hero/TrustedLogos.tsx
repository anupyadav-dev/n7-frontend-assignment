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
    <div className="flex flex-col items-center gap-4 lg:items-start">
      <p className="text-xs font-medium uppercase tracking-widest text-white/30">
        Trusted By:
      </p>
      <ul className="flex flex-row flex-nowrap items-center gap-8">
        {logos.map((logo) => (
          <li
            key={logo}
            className="flex-shrink-0 text-sm font-semibold tracking-wide text-white/30 transition-colors duration-200"
          >
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}
