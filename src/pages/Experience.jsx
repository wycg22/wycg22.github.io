import ContentCard from '../components/ContentCard';
import renderLogo from '../assets/render-logo.png'; 
import company2Logo from '../assets/Elections-Canada_logo.png';
import LTXLogo from '../assets/LTX_logo.jpg';
import company4Logo from '../assets/bestbuy_logo.jpg';
import boschLogo from '../assets/bosch_logo.png';
import aetherLogo from '../assets/aether_logo.jpg';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      subtitle: "Robert Bosch GmbH",
      period: "February 2026 - September 2026",
      description: [
        "Automated CI/CD and Software Versioning through robust GitHub Actions workflows for .NET embedded software tools, eliminating the need of manual testing and preventing flawed code from being deployed",
        "Architected continuous deployment pipelines to automate the creation of software releases and the publishing of software releases to the Artifactory",
        "Extended a client-facing sensor evaluation application by implementing support for multiple Micro-Electro-Mechanical Systems (MEMS) sensors, including SPI-based register configuration/control and live data streaming/visualization",
      ],
      image: boschLogo
    },
    {
      title: "Junior Developer",
      subtitle: "Aether Automation",
      period: "August 2025 - December 2025",
      description: [
        "Engineered and deployed custom Customer Relationship Management (CRM) applications tailored to specific client business logic and workflows",
        "Developed automated cloud scripts for invoice tracking and year-to-date revenue calculations, eliminating 20+ hours of manual administrative labor per week",
        "Integrated third-party logistics APIs (e.g., ShipStation) into core business platforms to generate real-time, cost-efficient shipping and delivery estimates",
        "Collaborated directly with business stakeholders to audit operational inefficiencies and implement tailored automation scripts, significantly reducing repetitive tasks"
      ],
      image: aetherLogo
    },
    {
      title: "Front-End Developer Intern",
      subtitle: "Render Exteriors",
      period: "March 2025 - May 2025",
      description: [
        "Initiated the development of a professional business website to enhance online presence",
        "Streamlined customer inquiries through a real-time quote request form",
        "Optimized UI/UX with intuitive navigation, compelling visuals, and a mobile-optimized design to attract clients",
      ],
      image: renderLogo
    },
    // {
    //   title: "Deputy Returning Officer",
    //   subtitle: "Elections Canada",
    //   period: "April 2025 - May 2025",
    //   description: [
    //     "Issued over 200 voting ballots a day in the 2025 Federal Election",
    //     "Verified voter identification and updated necessary voter records",
    //     "Conducted the final counting of ballots in a timely matter to inform the office of the results",
    //   ],
    //   image: company2Logo
    // },
    {
      title: "Volunteer",
      subtitle: "Linux Tech Expo (LTX)",
      period: "June 2023",
      description: [
        "Assisted event operations and managed the GPU Repasting Station",
        "Responsible for the disassembly and replacement of thermal compound within the GPU",
        "Collaborated with a team of tech enthusiasts to ensure proper disassembly of attendees' assets"
      ],
      image: LTXLogo
    },
    // {
    //   title: "Mobile Advisor",
    //   subtitle: "Best Buy",
    //   period: "October 2021 - September 2022",
    //   description: [
    //     "Advised customers on cell phone plan options, encouraging a selection to best match the needs and preferences of each client",
    //     "Collaborated in a team of 8 to achieve and surpass mobile activation targets",
    //     "Provided technical support for customer devices, ensuring high levels of understanding and satisfaction"
    //   ],
    //   image: company4Logo
    // }
  ];

  return (
    <div className="experience-page">
      <h1>Work Experience</h1>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <ContentCard
            key={index}
            title={exp.title}
            subtitle={exp.subtitle}
            period={exp.period}
            description={exp.description}
            image={exp.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;