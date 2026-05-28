export type Solution = {
  id: string;
  title: string;
  description: string;
  tag?: string;
  icon: string;
  href: string;
};

export const solutions: Solution[] = [
  {
    id: "core-banking",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: "/icons/core-banking.svg",
    href: "#",
  },

  {
    id: "digital-banking",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/icons/digital-banking.svg",
    href: "#",
  },

  {
    id: "open-banking",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: "/icons/open-banking.svg",
    href: "#",
  },

  {
    id: "loan-origination",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    tag: "NBFC",
    icon: "/icons/loan-origination.svg",
    href: "#",
  },

  {
    id: "loan-management",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    tag: "NBFC",
    icon: "/icons/loan-management.svg",
    href: "#",
  },
];
