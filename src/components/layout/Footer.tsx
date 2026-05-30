import Link from "next/link";

/* ─── TYPES ──────────────────────────────────────────────── */
type Office = { city: string; lines: string[] };
type NavItem = { label: string; href: string };
type LinkGroup = { heading: string; links: NavItem[] };

/* ─── DATA ───────────────────────────────────────────────── */
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
    /* Figma label is "London" even though address is Pune */
    city: "London",
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

/* ─── LINK ROW ───────────────────────────────────────────── */
function FooterLinkRow({ label, href }: NavItem) {
  return (
    <Link
      href={href}
      className="group flex w-full items-start justify-between gap-3 py-[7px] text-sm leading-5 text-white/65 transition-colors duration-150 hover:text-white"
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="mt-px flex-shrink-0 text-[#3B82F6] transition-transform duration-150 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="pb-12 pt-16 text-white lg:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*
         * DESKTOP LAYOUT STRATEGY
         * ───────────────────────
         * We use CSS Grid with explicit row/col placement so the
         * layout NEVER breaks between 1024 px and 1440 px+.
         *
         * Grid: 4 columns  ·  2 rows (offices + links)
         *
         *  col 1      col 2        col 3        col 4
         * ┌──────┬────────────┬────────────┬────────────┐  row 1
         * │  N7  │  London    │  Dubai     │  London    │
         * │      ├────────────┼────────────┼────────────┤  row 2
         * │      │  Solutions │ N7 Banking │ Our Socials│
         * └──────┴────────────┴────────────┴────────────┘
         *
         * N7 spans rows 1 + 2 via lg:row-span-2.
         * Below lg: everything stacks in 1 column (mobile/tablet).
         * At md (768px): offices go 3-col, links go 3-col under them.
         *)
         */}

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {/* ── N7 LOGO ──────────────────────────────────────────
              Mobile  : full width, normal flow
              Tablet  : spans all 3 cols (sits above everything)
              Desktop : col 1, rows 1–2                           */}
          <div className="md:col-span-3 lg:col-span-1 lg:row-span-2">
            <span
              aria-label="N7"
              className="block select-none font-black leading-[0.88] tracking-[-0.02em] text-transparent"
              style={{
                fontSize: "clamp(96px, 14vw, 280px)",
                background:
                  "linear-gradient(150deg,#22d3ee 0%,#38bdf8 18%,#3b82f6 52%,#1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              N7
            </span>
          </div>

          {/* ── OFFICES (row 1, cols 2-4 on desktop) ─────────────
              Mobile  : 1-col stack
              Tablet  : 3-col (col-span-1 each inside md:grid-cols-3)
              Desktop : 3 cols in row 1                            */}
          {offices.map((office, i) => (
            <div key={i} className="min-w-0">
              <h3 className="text-sm font-semibold text-white">
                {office.city}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {office.lines.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < office.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}

          {/* ── VERTICAL GAP between offices and links (desktop only)
              On desktop the gap between row 1 and row 2 is
              controlled by padding-top on the link group cells.
              This invisible cell keeps col 1 (N7) spanning correctly. */}

          {/* ── LINK GROUPS (row 2, cols 2-4 on desktop) ─────────
              Mobile  : 1-col stack (continues after offices)
              Tablet  : 3-col
              Desktop : 3 cols in row 2, with pt-20 for the gap    */}
          {linkGroups.map((group) => (
            <div key={group.heading} className="min-w-0 lg:pt-20">
              <h3 className="text-sm font-semibold text-white">
                {group.heading}
              </h3>
              <ul className="mt-5 flex flex-col">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <FooterLinkRow {...l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* ── COPYRIGHT ─────────────────────────────────────────── */}
        <p className="mt-16 text-center text-xs leading-6 text-white/35 lg:mt-20">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
