export type DigitalBankingFeatureData = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
};

export const digitalBankingFeatures: DigitalBankingFeatureData[] = [
  {
    id: "out-of-the-box",
    title: "Digital banking out-of-the-box",
    description:
      "N7 helps your financial institution improve the client experience, automate and optimize procedures",
    bullets: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
    imageSrc: "/images/phone-balance.png",
    imageAlt:
      "Mobile banking app showing $42,295.00 USD balance with Fund Transfer, Add Money, More actions, and a recent activity feed",
    imageSide: "right",
  },
  {
    id: "no-legacy",
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    bullets: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
    imageSrc: "/images/phone-bar-chart.png",
    imageAlt:
      "Mobile banking app showing March 2022 spending bar chart and recent activity entries",
    imageSide: "right",
  },
  {
    id: "no-branches",
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adoptable and Scalable",
    ],
    imageSrc: "/images/phone-profile.png",
    imageAlt:
      "Mobile banking app showing Toni Kross profile screen with Profile setting, Setting, Support, and Sign out menu",
    imageSide: "left",
  },
];
