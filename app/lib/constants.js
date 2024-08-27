import Link from "next/link";

export const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NEXT.js & .NET Core</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>C</li>
        <li>C#</li>
        <li>Java</li>
        <li>Git & Azure DevOps</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Politecnica de Madrid (UPM)</li>
        <li>Cambridge Assessment English, Advance C1 </li>
        <li>International Baccalaurate (IB diploma)</li>
      </ul>
    ),
  },
  {
    title: "Experience/Certifications",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <Link
          href={
            "https://www.linkedin.com/in/anager/"
          }
        >
          <li className="cursor-pointer hover:text-primary-500">
            Full Stack Software Engineer .NET
          </li>
        </Link>
        <Link
          href={
            "https://www.cloudskillsboost.google/public_profiles/2952dff1-1d86-4783-bc9f-4e73341fb701/badges/8111161"
          }
        >
          <li className="cursor-pointer hover:text-primary-500">
            Introduction to Generative AI
          </li>
        </Link>
        <Link
          href={
            "https://www.cloudskillsboost.google/public_profiles/2952dff1-1d86-4783-bc9f-4e73341fb701/badges/8083372"
          }
        >
          <li className="cursor-pointer hover:text-primary-500">
            Introduction to Responsible AI
          </li>
        </Link>
      </ul>
    ),
  },
];

export const categories = [
  {
    name: "All",
  },
  {
    name: "Web",
  },
  {
    name: "Algorithms & Data Structures",
  },
  {
    name: "Cybersecurity",
  },
  {
    name: "Architecture",
  },
  {
    name: "IA & Machine Learning",
  },
  {
    name: "API & Web Service",
  },
  {
    name: "Data Analysis",
  },
  {
    name: "Automation & Scripts",
  },
  {
    name: "Games",
  },
  {
    name: "Documentation",
  },
  {
    name: "Other",
  },
];

export const swotTabs = [
  {
    title: "S",
    head: "Strengths",
    color: "bg-green-300",
    content: [
      "High english level & native spanish speaker",
      "Good communication skills",
      "I am proactive and enthusiastic",
      "Willing to learn and improve",
    ],
    class: "rounded-r-lg",
  },
  {
    title: "W",
    head: "Weaknesses",
    color: "bg-yellow-300",
    content: [
      "Without much experience in a professional environment",
      "Lacking important contacts",
      "I am still finishing my studies",
    ],
    class: "rounded-lg",
  },
  {
    title: "O",
    head: "Opportunities",
    color: "bg-indigo-300",
    content: [
      "Expand my contacts and professional network",
      "Learn and improve my skills in a professional environment",
      "Get a job in a company that allows me to grow",
    ],
    class: "rounded-lg",
  },
  {
    title: "T",
    head: "Threats",
    color: "bg-red-300",
    content: [
      "The job market is very competitive",
      "Competing with candidates with more experience",
      "Constantly changing technologies",
    ],
    class:
      "rounded-l-lg",
  },
];

export const version = "v4.0";