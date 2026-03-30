import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuredRows = [
  {
    title: "Featured Work",
    id: "work",
    items: [
      {
        title: "Drone Path Prediction",
        subtitle: "ASX Project",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        details:
          "Developed predictive models to forecast drone flight trajectories using time-series telemetry data, focusing on improving accuracy, stability, and real-time applicability. Evaluated multiple modeling approaches and optimized performance for practical deployment and visualization.",
        bullets: [
          "Built and compared predictive models including Kalman Filters, Random Forest, and LSTM networks for trajectory estimation.",
          "Processed and analyzed time-series telemetry data (position, velocity, directional signals) to improve prediction accuracy.",
          "Designed a real-time prediction pipeline to simulate and evaluate model performance under dynamic conditions.",
          "Conducted model validation and performance benchmarking using error metrics and scenario-based testing.",
          "Translated model outputs into interactive 3D visualizations for clearer interpretation of predicted flight paths",
        ],
        tools: ["Python", "Modeling", "Analytics"],
      },
      {
        title: "Forecasting Analytics",
        subtitle: "Predictive Modeling",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        details:
          "Built forecasting and financial analysis workflows to support planning, scenario modeling, and decision-making. Focused on translating raw data into forward-looking insights through structured modeling, performance tracking, and data-driven analysis.",
        bullets: [
          "Developed forecasting models to project performance trends using historical data and key business drivers.",
          "Designed scenario and sensitivity analyses to evaluate financial outcomes under different assumptions.",
          "Performed variance and trend analysis to improve forecast reliability and business understanding.",
          "Translated analysis into actionable insights to support planning and operational decision-making."
        ],
        tools: ["Excel", "Python", "Financial Modeling", "Reporting"],
      },
      {
        title: "Financial Reporting",
        subtitle: "Dashboards & KPI Analysis",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        details:
          "Built and automated financial reporting processes to improve visibility into business performance and enable faster, data-driven decision-making. Focused on transforming raw operational data into structured, actionable reporting for leadership.",
        bullets: [
          "Developed and maintained financial reporting workflows to track business performance across multiple units.",
          "Designed KPI tracking frameworks to monitor key drivers such as revenue, cost, and operational efficiency.",
          "Automated recurring reporting processes using Excel, SQL, and BI tools, reducing manual effort and turnaround time.",
          "Partnered with stakeholders to refine reporting requirements and improve clarity and usability of insights.",
        ],
        tools: ["Excel", "Power BI", "SQL", "Reporting", "Data Analysis"],
      },
      {
        title: "Process Improvement",
        subtitle: "Systems & Reporting",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        details:
          "Improved financial reporting efficiency by standardizing workflows, resolving data inconsistencies, and reducing manual processes. Focused on building more reliable, scalable reporting systems to support faster and more accurate decision-making.",
        bullets: [
          "Standardized reporting workflows across recurring processes to improve consistency and reduce errors.",
          "Investigated and resolved data discrepancies across systems, improving data accuracy and reliability.",
          "Automated manual processes within reporting workflows, reducing turnaround time and operational friction.",
          "Improved data flow and reporting structure to enable more efficient analysis and decision support.",
        ],
        tools: ["Excel", "Systems", "Process Improvement"],
      },
    ],
  },
  {
    title: "Professional Experience",
    id: "experience",
    items: [
      {
        title: "Diversified Technologies International",
        subtitle: "Financial Analyst / Senior Accountant",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
        details:
          "Supported financial analysis, reporting, reconciliations, and issue investigation across business operations. Helped improve reliability and timeliness of reporting deliverables.",
        bullets: [
          "Performed reporting and analysis support",
          "Handled reconciliations and discrepancy reviews",
          "Partnered across teams to resolve reporting issues",
        ],
        tools: ["Excel", "Financial Reporting", "Analysis"],
      },
      {
        title: "Future Energy",
        subtitle: "Financial Analyst / Staff Accountant",
        image:
          "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
        details:
          "Worked on budgeting, variance analysis, forecasting support, and financial reporting processes. Helped connect operational activity to financial visibility.",
        bullets: [
          "Supported budget and forecast processes",
          "Performed variance analysis",
          "Improved reporting and financial transparency",
        ],
        tools: ["Forecasting", "Budgeting", "Excel"],
      },
      {
        title: "Infosys",
        subtitle: "Associate Analyst",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
        details:
          "Used SQL and analytical workflows to support reporting, issue validation, and business data investigation. Focused on structured problem solving and reporting quality.",
        bullets: [
          "Worked with SQL-based analysis",
          "Validated reporting data and findings",
          "Supported issue investigation and business workflows",
        ],
        tools: ["SQL", "Excel", "Data Validation"],
      },
    ],
  },
  {
    title: "Core Skills",
    id: "skills",
    items: [
      {
        title: "Financial Analysis",
        subtitle: "Forecasting • Variance • Planning",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        details:
          "Strong foundation in budget support, forecasting, variance analysis, and translating financial information into actionable business insight.",
        bullets: [
          "Forecast support",
          "Variance analysis",
          "Business decision support",
        ],
        tools: ["Excel", "Finance", "Reporting"],
      },
      {
        title: "SQL & Excel",
        subtitle: "Reporting • Validation • Analysis",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
        details:
          "Comfortable using SQL and Excel for extracting, validating, analyzing, and presenting data in a structured and business-friendly way.",
        bullets: [
          "Data extraction and analysis",
          "Validation and cleanup",
          "Structured reporting",
        ],
        tools: ["SQL", "Excel"],
      },
      {
        title: "Power BI",
        subtitle: "Dashboards • KPIs • Insights",
        image:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80",
        details:
          "Used dashboarding and KPI visualization approaches to make performance trends easier to understand and communicate.",
        bullets: [
          "Dashboard building",
          "KPI visualization",
          "Performance communication",
        ],
        tools: ["Power BI", "Dashboards", "KPIs"],
      },
      {
        title: "Accounting & Controls",
        subtitle: "Close • Recs • Review",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
        details:
          "Experience supporting accounting processes including reconciliations, close support, review work, and improving reporting reliability.",
        bullets: [
          "Reconciliations",
          "Close support",
          "Review and reporting quality",
        ],
        tools: ["Accounting", "Controls", "Reconciliations"],
      },
    ],
  },
];

function Navbar({ isResumeDropdownOpen, onToggleResumeDropdown, onCloseResumeDropdown }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-black/90 to-transparent">
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-8">
          <div className="text-3xl font-extrabold tracking-wide text-red-600">
            MP
          </div>

          <nav className="hidden gap-6 text-sm text-zinc-200 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
          </nav>
        </div>

        <div className="relative flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleResumeDropdown();
            }}
            className="rounded bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Resume
          </button>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/40 px-4 py-2 text-sm text-white hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>

          <ResumeDropdown
            isOpen={isResumeDropdownOpen}
            onClose={onCloseResumeDropdown}
          />
        </div>
      </div>
    </header>
  );
}

function ResumeDropdown({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumes = [
    {
      label: "Accounting Resume",
      href: "/MandarP%20Accounting%20Resume.pdf",
      description: "Accounting, close, reporting, and controllership roles.",
    },
    {
      label: "Finance Analyst Resume",
      href: "/MandarP%20Finance%20Resume.pdf",
      description: "FP&A, financial analyst, forecasting, and finance roles.",
    },
    {
      label: "Data Science Resume",
      href: "/MandarP%20Data%20Science%20Resume.pdf",
      description: "Analytics, BI, data science, and systems-focused roles.",
    },
  ];

  return (
    <div
      className="absolute right-0 top-14 z-[100] w-[320px] rounded-xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-md"
      onClick={(e) => e.stopPropagation()}
    >
      {resumes.map((resume) => (
        <a
          key={resume.label}
          href={resume.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg px-4 py-3 transition hover:bg-zinc-800"
          onClick={onClose}
        >
          <div className="text-sm font-semibold text-white">{resume.label}</div>
          <div className="mt-1 text-xs leading-5 text-zinc-400">
            {resume.description}
          </div>
        </a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
        alt="hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-6 pt-20 md:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          Featured Profile
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Mandar Patki
        </h1>

        <p className="mt-4 text-lg text-zinc-200 md:text-xl">
          Financial Analyst • Data Analytics • Systems
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
          Finance and analytics professional with experience in forecasting,
          reporting, SQL-based analysis, dashboarding, reconciliations, and
          business process improvement.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            View Work
          </a>
          <a
            href="#experience"
            className="rounded bg-zinc-700/70 px-7 py-3 text-sm font-semibold text-white hover:bg-zinc-600/80"
          >
            Experience
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Tile({ item, onSelect }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08, y: -8 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(item)}
      className="group relative min-w-[240px] cursor-pointer overflow-hidden rounded-md bg-zinc-900 text-left shadow-xl"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-[140px] w-full object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-base font-bold text-white">{item.title}</h3>
        <p className="mt-1 text-xs text-zinc-300">{item.subtitle}</p>
      </div>
    </motion.button>
  );
}

function Row({ id, title, items, onSelect }) {
  return (
    <section id={id} className="px-6 py-6 md:px-12">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {items.map((item, index) => (
          <Tile key={index} item={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

function IntroScreen({ onEnter, audioRef }) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.16),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-20 flex flex-col items-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-zinc-500">
          Enter Portfolio
        </p>

        <button
          type="button"
          onClick={handleEnter}
          className="cursor-pointer border-0 bg-transparent text-5xl font-black tracking-wide text-white transition hover:scale-105 md:text-8xl"
        >
          <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Mandar Patki
          </span>
        </button>

        <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
          Click the name to begin.
        </p>

        <div className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </div>
    </motion.section>
  );
}

function DetailModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-6"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover"
        />

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-red-500">
                {item.subtitle}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                {item.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded border border-zinc-700 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Close
            </button>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-300">
            {item.details}
          </p>

          {item.bullets && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {item.bullets.map((bullet, index) => (
                  <li key={index}>• {bullet}</li>
                ))}
              </ul>
            </div>
          )}

          {item.tools && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Tools / Focus</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MainSite() {
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      className="min-h-screen bg-black text-white"
      onClick={() => setIsResumeDropdownOpen(false)}
    >
      <Navbar
        isResumeDropdownOpen={isResumeDropdownOpen}
        onToggleResumeDropdown={() =>
          setIsResumeDropdownOpen((prev) => !prev)
        }
        onCloseResumeDropdown={() => setIsResumeDropdownOpen(false)}
      />

      <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      <Hero />

      <div className="relative z-20 -mt-24">
        {featuredRows.map((row) => (
          <Row
            key={row.id}
            id={row.id}
            title={row.title}
            items={row.items}
            onSelect={setSelectedItem}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <>
      <audio ref={audioRef} preload="auto">
        <source src="/netflix-intro.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {entered ? (
          <motion.div
            key="main-site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MainSite />
          </motion.div>
        ) : (
          <IntroScreen
            key="intro-screen"
            onEnter={handleEnter}
            audioRef={audioRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
