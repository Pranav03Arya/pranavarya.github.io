const projectsData = {
  intro: "A selection of projects spanning machine learning, full-stack web applications, and applied research.",
  projects: [
    {
      category: "EdTech / Simulation", title: "CapitalCrisis",
      description: "Browser-based CFO simulation game played by 100+ students across 6 rounds and 12 decisions. Custom financial engine handles debt/equity modelling, ROI calculation, and risk-event resolution. Architected with 15+ React components, a centralised useReducer for session state, Claude API-driven debriefs, and live Recharts valuation tracking. Deployed on Vercel.",
      tags: ["React", "TypeScript", "Claude API"],
      link: "https://github.com/Pranav03Arya/CapitalCrisis"
    },
    {
      category: "Full-Stack AI", title: "AIMAILER",
      description: "Full-stack AI-powered job application email generator. Node.js backend with PostgreSQL and Prisma ORM across 7+ normalised tables, OpenAI GPT-4 integration for personalised email generation, JWT + OAuth 2.0 authentication, and a real-time AI chat interface backed by an application tracking dashboard.",
      tags: ["Node.js", "PostgreSQL", "GPT-4"],
      link: "https://github.com/Pranav03Arya/AIMAILER"
    },
    {
      category: "Conversational AI", title: "Agent Chaari",
      description: "RAG chatbot that helps users explore temples in India. Streamlit + Python frontend over a cleaned pandas temple dataset, semantic retrieval via Sentence-Transformers (all-MiniLM-L6-v2) + FAISS, hybrid intent/entity extraction, and FLAN-T5 for answering temple QA, trip planning, and cost-estimation queries with map-based exploration.",
      tags: ["Python", "RAG", "FAISS"],
      link: "https://github.com/Pranav03Arya/agent-chaari"
    },
    {
      category: "EdTech Research Tool", title: "Behavioral Finance Games",
      description: "A suite of decision-making games built in React + TypeScript to study behavioral patterns in financial choices. Deployed to a 50-student MBA class and logged 100+ structured decisions used for ongoing research analysis at the Costello College of Business.",
      tags: ["React", "TypeScript", "Research"],
      link: "#"
    }
  ]
};
