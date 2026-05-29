import Link from "next/link";

type Office = { city: string; lines: string[] };
type LinkGroup = { heading: string; links: { label: string; href: string }[] };

const offices: Office[] = [
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "26 Main Road Sundridge, TN14 6EP,",
      "England, United Kingdom.",
    ],
  },
  {
    city: "Dubai",
    lines: [
      "Linktia Infosystems Ltd –",
      "CB7, Jumeirah Business, Center 5",
      "Cluster W, Jumeirah Lakes Towers,",
      "Dubai, United Arab Emirates",
    ],
  },
  {
    city: "Pune",
    lines: [
      "Linktia Infosystems Ltd –",
      "CB7, Nirmal, Anand Nagar,",
      "Suncity Road, Pune,",
      "Maharashtra, 411041, India",
    ],
  },
];

const linkGroups: LinkGroup[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Core Banking CB7", href: "#core-banking" },
      { label: "Digital Banking N7", href: "#digital-banking" },
      { label: "Open Banking", href: "#" },
      { label: "Loan Origination System", href: "#" },
      { label: "Loan Management System", href: "#" },
      { label: "Digital Transformation", href: "#" },
    ],
  },
  {
    heading: "N7 Banking",
    links: [
      { label: "About Us", href: "#" },
      { label: "Solutions", href: "#solutions" },
      { label: "Contact", href: "#" },
      { label: "Company", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Insights", href: "#insights" },
      { label: "Core Team", href: "#" },
      { label: "Brand Center", href: "#" },
    ],
  },
  {
    heading: "Our Socials",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "X", href: "#" },
    ],
  },
];

function FooterLinkRow({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-between gap-4 text-sm text-white/65 transition-colors hover:text-white"
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="text-[#3B82F6] transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top row: gradient N7 + 3 offices */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-10">
          <div className="lg:row-span-2">
            <span
              aria-label="N7"
              className="block select-none bg-gradient-to-br from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] bg-clip-text font-bold leading-[0.85] tracking-tight text-transparent"
              style={{ fontSize: "clamp(120px, 14vw, 200px)" }}
            >
              N7
            </span>
          </div>

          {offices.map((office) => (
            <div key={`${office.city}-${office.lines[0]}`}>
              <h3 className="text-base font-semibold text-white">
                {office.city}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                {office.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < office.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}

          {/* Mid row: link groups */}
          {linkGroups.map((group) => (
            <div key={group.heading} className="lg:mt-10">
              <h3 className="text-base font-semibold text-white">
                {group.heading}
              </h3>
              <ul className="mt-6 flex max-w-[220px] flex-col gap-3">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <FooterLinkRow {...l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-16 max-w-4xl text-xs leading-6 text-white/40">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
