import React, { useState } from 'react';
import { 
  Briefcase, 
  Code, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  Database, 
  Cpu, 
  TrendingUp, 
  GraduationCap, 
  Award,
  ChevronRight,
  ExternalLink,
  Target,
  ShieldCheck,
  Navigation,
  Map,
  Tag,
  Users,
  Truck,
  Rocket,
  Zap
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const profile = {
    name: "Abdulrahman Al-Nuqaidan",
    title: "Operations Manager & Tech Founder",
    location: "Riyadh, Saudi Arabia",
    email: "abdulrhman@farq.sa",
    phone: "+966 563 333 463",
    linkedin: "abdulrhman-alnuqaydan-04595a392",
    website: "www.farq.sa",
    summary: "Strategic Operations Leader and Tech Entrepreneur with over 7 years of experience building large-scale geospatial systems. Expert in the POI lifecycle, managing 120,000+ km of road surveys and updating over 550,000+ data points across KSA through AI automation and multi-layered team leadership."
  };

  const experiences = [
    {
      company: "HudHud Maps",
      role: "Operations Manager / Field Ops & Quality Lead",
      period: "May 2024 – Present",
      location: "Riyadh, Saudi Arabia",
      highlights: [
        "Led the national effort to collect and update 550,000+ POIs across Saudi Arabia, ensuring market-leading data freshness.",
        "Directly lead a high-performance operations division of 3 Team Leads, 4 Supervisors, 25+ POI Reviewers, and 9 specialized field Surveyors.",
        "Spearheaded national branding initiatives, connecting 320,000+ branches to 4,000+ distinct brands across the Kingdom.",
        "Architected proprietary field survey application and central review dashboard to streamline lifecycle management.",
        "Deployed Random Forest ML model to predict POI quality, automating non-compliant data detection.",
        "Implemented 'Point-in-Polygon' algorithmic planning ensuring 100% urban coverage."
      ],
      icon: <Target className="w-5 h-5 text-blue-500" />
    },
    {
      company: "Farq Technology",
      role: "Founder",
      period: "Aug 2023 – Present",
      location: "Riyadh, Saudi Arabia",
      highlights: [
        "Launched KSA's first neutral price comparison platform for delivery and ride-sharing.",
        "Engineered real-time price aggregation engines and full-stack data strategy.",
        "Managing end-to-end startup growth, from legal framework to product-market fit."
      ],
      icon: <Cpu className="w-5 h-5 text-emerald-500" />
    },
    {
      company: "Urbi (Balady Project)",
      role: "Quality Assurance Manager",
      period: "Jan 2023 – May 2024",
      location: "Riyadh, Saudi Arabia",
      highlights: [
        "Managed more than 120,000 km of road surveys and street view data collection across the Kingdom.",
        "Planned and managed large-scale operations for both Field Surveyors and Road Surveyors across Riyadh.",
        "Enforced rigorous QC protocols for the national POI dataset, eliminating duplicates and ensuring high attribute accuracy.",
        "Bridged operational feedback loops between field teams and product engineering to improve data collection tools."
      ],
      icon: <Award className="w-5 h-5 text-amber-500" />
    },
    {
      company: "Urbi",
      role: "Operations Team Lead (Dubai Malls Project)",
      period: "Jan 2022 – Jan 2023",
      location: "Dubai, UAE (Hybrid)",
      highlights: [
        "Led the specialized Dubai Malls Project, focusing on high-density POI collection and indoor mapping for major retail hubs.",
        "Supervised UAE-wide survey teams, improving field efficiency by 15% through structured task assignment and real-time monitoring."
      ],
      icon: <Navigation className="w-5 h-5 text-purple-500" />
    },
    {
      company: "Google Maps",
      role: "Data Specialist",
      period: "Jul 2017 – Jan 2020",
      location: "San Francisco, CA (Hybrid)",
      highlights: [
        "High-level POI validation and quality improvement for global datasets.",
        "Expertise in core mapping workflows and geospatial analysis best practices."
      ],
      icon: <Globe className="w-5 h-5 text-red-500" />
    }
  ];

  const toolkit = [
    { category: "Languages", items: ["Python (Pandas, GeoPandas)", "SQL (PostGIS/BigQuery)", "FastAPI"] },
    { category: "Data & GIS", items: ["ArcGIS Suite", "Street View Capture", "Road Surveying", "Brand Linking"] },
    { category: "AI & Quality", items: ["Random Forest", "Automated QC", "Data Normalization"] },
    { category: "Leadership", items: ["Ops Team Scaling", "3+ Team Leads", "Multi-layer Supervision", "SOP Development"] }
  ];

  const ImpactMetric = ({ value, label, icon: Icon }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transition-all hover:shadow-md">
      {Icon && <Icon className="w-4 h-4 text-slate-400 mb-2" />}
      <span className="text-xl md:text-2xl font-bold text-blue-600 leading-tight">{value}</span>
      <span className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{label}</span>
    </div>
  );

  const ProjectCard = ({ title, description, impact, icon: Icon, colorClass }) => (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center transition-all hover:border-blue-200 hover:shadow-sm">
      <div className={`w-24 h-24 md:w-32 md:h-32 ${colorClass} rounded-full flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex gap-4">
          <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-slate-50 border border-slate-100`}>
            Impact: {impact}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 md:flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
            <p className="text-blue-600 font-medium text-lg mt-1">{profile.title}</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-slate-600">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" /> {profile.phone}
            </a>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {profile.location}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-8">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <ImpactMetric value="120K km" label="Road Survey" icon={Truck} />
          <ImpactMetric value="550K+" label="POI Collected" icon={MapPin} />
          <ImpactMetric value="40+" label="Direct Reports" icon={Users} />
          <ImpactMetric value="320K+" label="Branches Linked" icon={Tag} />
          <ImpactMetric value="4000" label="Brands Managed" icon={Award} />
          <ImpactMetric value="100%" label="Urban Coverage" icon={Map} />
        </div>

        {/* Executive Summary */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Executive Summary</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            {profile.summary}
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 mb-6 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-3 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Toolkit
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 font-semibold text-sm transition-all whitespace-nowrap ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Key Wins
            </button>
          </div>

          {/* Content Area */}
          <div className="transition-all duration-300">
            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden transition-all hover:border-blue-200 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-4 items-center">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                          <p className="text-slate-500 font-medium flex items-center gap-2">
                            {exp.company} <span className="text-slate-300">•</span> {exp.location}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full whitespace-nowrap hidden md:inline-block">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 ml-14">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {toolkit.map((skill, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      {skill.category === "Languages" && <Code className="w-5 h-5 text-blue-500" />}
                      {skill.category === "Data & GIS" && <Database className="w-5 h-5 text-emerald-500" />}
                      {skill.category === "AI & Quality" && <Cpu className="w-5 h-5 text-amber-500" />}
                      {skill.category === "Leadership" && <TrendingUp className="w-5 h-5 text-purple-500" />}
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-100 hover:bg-white hover:border-blue-200 transition-all cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Education & Global Certifications</h3>
                      <p className="opacity-80">Credentials & Continuous Learning</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm flex items-center gap-2 border border-white/20">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                      Google Maps Global Data Specialist Certificate
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                      Diploma in Data Analytics (TSU)
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                      ArcGIS Products Expert
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                      Market Fit Course
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 gap-6 pb-8">
                <ProjectCard 
                  title="AI-Assisted POI Quality Prediction"
                  description="Engineered and deployed a Random Forest Machine Learning model trained on historical validation datasets. The system predicts accuracy scores for new POI entries, automatically approving high-confidence data and flagging anomalies for human review."
                  impact="Reduced manual review cycles by 40% while maintaining 99%+ data accuracy"
                  icon={Zap}
                  colorClass="bg-yellow-50 text-yellow-600"
                />

                <ProjectCard 
                  title="Farq Technology: First-to-Market Neutral Platform"
                  description="Founded and launched KSA's first neutral price comparison platform for delivery and ride-sharing. Developed the real-time data aggregation backend that processes thousands of price points to offer users cost-efficient choices."
                  impact="Pioneered consumer choice transparency in the Kingdom's gig economy"
                  icon={Rocket}
                  colorClass="bg-emerald-50 text-emerald-600"
                />

                <ProjectCard 
                  title="120,000 km Road Survey & Street View"
                  description="Managed one of the largest road-level data collection projects in the region. Oversaw the logistics, hardware deployment, and quality validation for over 120,000 km of high-resolution street imagery and road network data across Saudi Arabia."
                  impact="Established National-Scale Street Level Data infrastructure"
                  icon={Truck}
                  colorClass="bg-blue-50 text-blue-600"
                />

                <ProjectCard 
                  title="National Brand Linking Architecture"
                  description="Created the logic and workflow to link 320,000+ commercial branches to over 4,000 unique parent brands. Standardized branding conventions and visual assets to ensure a consistent mapping experience nationwide."
                  impact="Validated 320K+ high-value branch links for national navigation"
                  icon={Tag}
                  colorClass="bg-orange-50 text-orange-600"
                />

                <ProjectCard 
                  title="Algorithmic Territory Planning"
                  description="Designed a GIS-based survey management system using 'Point-in-Polygon' logic. This automated the creation of surveyor zones, eliminating overlap between field teams and ensuring 100% urban coverage across major cities."
                  impact="Achieved 100% geographical completion with zero team overlap"
                  icon={Navigation}
                  colorClass="bg-purple-50 text-purple-600"
                />

                <ProjectCard 
                  title="Balady National POI Project"
                  description="Successfully managed large-scale field and road survey operations for the national Balady platform. Integrated multiple data streams into a unified quality control pipeline that serves millions of users."
                  impact="Guaranteed 100% Data Integrity for national mapping services"
                  icon={Map}
                  colorClass="bg-indigo-50 text-indigo-600"
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
            <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400 text-sm">© 2026 {profile.name} • Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
