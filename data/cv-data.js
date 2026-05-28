const cvData = {
  intro: "A snapshot of my education, research, and engineering work across machine learning, full-stack development, and data systems.",
  experience: [
    {
      date: "Sep 2025 — May 2026", location: "Fairfax, VA", title: "Graduate Research Assistant",
      org: "Costello College of Business, George Mason University", orgLink: "https://business.gmu.edu",
      description: "Designed and built a modular ML-driven trading pipeline (ingestion → features → XGBoost + LSTM ensemble → risk engine → execution) covering 5 tickers and 20+ features, now used as the lab's reference implementation for ML-based trading strategies. Deployed unattended paper-trading on Alpaca via APScheduler with auto position-caps and drawdown halts, backed by a risk engine with stop-loss and circuit-breaker controls, SQLite logging, and 21 unit tests at 94% coverage. Also built Behavioral Finance Games in React + TypeScript, deployed to a 50-student MBA class and used to log 100+ decisions for research analysis."
    },
    {
      date: "Jan 2024 — Jun 2024", location: "Hyderabad, India", title: "Data Analyst Intern",
      org: "Tata Consultancy Services", orgLink: "https://www.tcs.com/",
      description: "Built a Streamlit application for PDF table extraction using Camelot-py (lattice + stream modes) and PyPDF, with built-in JSON serialization for downstream use; improved table-cell extraction accuracy by 30% on borderless tables through parser tuning and pre-processing. Built a Streamlit application for PDF table extraction using Camelot-py (lattice + stream modes) and PyPDF, with built-in JSON serialization for downstream use; improved table-cell extraction accuracy by 30% on borderless tables through parser tuning and pre-processing. Built a Streamlit application for PDF table extraction using Camelot-py (lattice + stream modes) and PyPDF, with built-in JSON serialization for downstream use; improved table-cell extraction accuracy by 30% on borderless tables through parser tuning and pre-processing."
    },
    {
      date: "Aug 2023 — Dec 2023", location: "Hyderabad, India", title: "Research Intern",
      org: "Defence Research and Development Organization (DRDO)", orgLink: "https://www.drdo.gov.in",
      description: "Manually annotated 10K+ images using LabelImg for 3-class detection (tanks, vehicles, personnel) to build a custom training dataset, then trained YOLOv7 on it — achieving mAP@0.5 of 0.86, 0.85, and 0.83 across the three classes. Built a Python (OpenCV + NumPy) calibration-based distance-estimation pipeline accurate to ±0.5m on drone imagery."
    },
    {
      date: "May 2023 — Jul 2023", location: "Hyderabad, India", title: "Data Analyst Intern",
      org: "Ernst & Young", orgLink: "https://www.ey.com",
      description: "Built Power BI dashboards with automated ETL refresh, eliminating 8 hours per week of manual Excel reporting. Developed DAX measures for year-to-date revenue and variance analysis tracking 15+ financial KPIs, and shipped region/product drill-down dashboards adopted by finance and audit teams for monthly reviews."
    }
  ],
  education: [
    {
      date: "2024 — 2026", location: "Fairfax, VA", title: "Master of Computer Science",
      org: "George Mason University", orgLink: "https://www.gmu.edu",
      description: "Graduate-level coursework in machine learning, distributed systems, and applied research. CGPA: 3.6."
    },
    {
      date: "2020 — 2024", location: "Jaipur, India", title: "Bachelor of Information Technology",
      org: "Manipal University Jaipur", orgLink: "https://jaipur.manipal.edu",
      description: "Foundations in computer science, data structures, software engineering, and information systems. CGPA: 3.7."
    }
  ],
  leadership: [
    {
      date: "Sep 2024", title: "9/11 Day of Service Volunteer", org: "President Greenhouse Facility", orgLink: "https://green.gmu.edu/campus-sustainability/campus-gardens/presidents-park-greenhouse/",
      description: "Volunteered at the President Greenhouse Facility as part of the 9/11 Day of Service."
    },
    {
      date: "May 2021 — May 2022", title: "Head Social Media and Marketing Coordinator", org: "IEEE SB Manipal University Jaipur", orgLink: "https://ieeemuj.com/",
      description: "Led social media and marketing coordination for IEEE Student Branch activities at Manipal University Jaipur."
    }
  ],
  skills: [
    "Python", "TypeScript", "SQL", "PyTorch", "OpenCV", "FastAPI", "JavaScript", "React",
    "Node.js", "PostgreSQL", "FAISS", "Sentence-Transformers", "AWS", "Docker", "S3", "EC2" ]
};
