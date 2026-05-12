import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Workflow, ShieldCheck, ArrowRight, Activity, Target, Zap, Brain, RefreshCw, Megaphone, Award, BookOpen, Swords, CalendarCheck, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Service {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  icon: React.ReactNode;
  overlayIcon: React.ReactNode;
  bgImage: string;
  highlight: string;
}
const SERVICES: Service[] = [{
  id: 'soc-assessment',
  title: 'SOC Assessments',
  category: 'People, Process, Technology',
  problem: 'Most SOCs operate with tools in place but lack clarity on whether they are truly effective in detecting and responding to threats.',
  solution: 'We perform end-to-end SOC assessments covering people, processes, and technology-identifying detection gaps, response inefficiencies, and optimization opportunities to improve real-world security posture.',
  icon: <ShieldCheck className="w-7 h-7" />,
  overlayIcon: <Activity className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_gartner.png',
  highlight: 'End-to-end SOC validation'
}, {
  id: 'soc-consulting',
  title: 'SOC Consulting',
  category: 'Build from Scratch / Optimize Existing',
  problem: 'Organizations struggle to design SOCs that are both effective and cost-efficient, often overinvesting in tools without clear outcomes.',
  solution: 'We help you design and implement SOCs tailored to your needs-whether fully open-source, commercial, or hybrid-ensuring scalability, cost optimization, and operational maturity from day one.',
  icon: <Workflow className="w-7 h-7" />,
  overlayIcon: <Target className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/02/Module6_3UpCards_02@2x.jpg',
  highlight: 'Scalable, cost-optimized design'
}, {
  id: 'vapt',
  title: 'VAPT',
  category: 'Vulnerability Assessment & Penetration Testing',
  problem: 'Traditional VAPT engagements are often tool-driven and fail to simulate real-world attacker behavior, leading to superficial findings and limited security improvement.',
  solution: 'We deliver a comprehensive VAPT approach combining automated tools, AI-driven insights, and deep manual testing to uncover real vulnerabilities across applications, networks, and infrastructure. All assessments are conducted by highly skilled, OSCP-certified engineers, ensuring real-world attack simulation, deeper exploitation techniques, and actionable remediation guidance-not just generic reports.',
  icon: <Swords className="w-7 h-7" />,
  overlayIcon: <Zap className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_frost.jpg',
  highlight: 'OSCP-certified manual testing'
}, {
  id: 'training',
  title: 'Cybersecurity Training',
  category: 'Hands-on on Cyber Range',
  problem: 'Traditional training is theoretical and fails to prepare teams for real cyber incidents.',
  solution: 'We deliver immersive, hands-on training on our Cyber Range platform covering Incident Response & Threat Hunting, Offensive Security, OEM Trainings (Checkpoint, Palo Alto, Splunk, QRadar, Fortinet, F5), and Cyber Awareness for employees.',
  icon: <BookOpen className="w-7 h-7" />,
  overlayIcon: <Activity className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_gartner.png',
  highlight: 'Immersive Cyber Range platform'
}, {
  id: 'cyber-drills',
  title: 'Cyber Drills',
  category: 'Red vs Blue Simulations',
  problem: "Organizations don't know how their teams will perform during an actual cyber attack.",
  solution: "We conduct realistic cyber drills simulating live attacks-testing your team's detection, response, and coordination in a controlled environment.",
  icon: <Target className="w-7 h-7" />,
  overlayIcon: <Target className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/02/Module6_3UpCards_02@2x.jpg',
  highlight: 'Live Red vs Blue simulations'
}, {
  id: 'skill-assessment',
  title: 'Skill Assessment',
  category: 'Capability Benchmarking',
  problem: 'Organizations invest in training without knowing actual skill levels or ROI.',
  solution: 'We assess real-world capabilities of your engineers through practical evaluations-helping you identify gaps and invest in the right skills.',
  icon: <Award className="w-7 h-7" />,
  overlayIcon: <Zap className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_frost.jpg',
  highlight: 'Practical capability benchmarking'
}, {
  id: 'ai-consulting',
  title: 'AI & Cybersecurity Consulting',
  category: 'AI-Driven Security Operations',
  problem: 'Organizations want to adopt AI in security but lack clarity on where and how to implement it effectively.',
  solution: 'We help integrate AI into cybersecurity operations-from threat detection and automation to predictive analytics-ensuring measurable impact and ROI.',
  icon: <Brain className="w-7 h-7" />,
  overlayIcon: <Activity className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_gartner.png',
  highlight: 'AI-powered threat detection & automation'
}, {
  id: 'bas',
  title: 'Continuous Security Validation and Remediation',
  category: 'BAS + Cyber Range',
  problem: 'Security controls are deployed but rarely tested continuously against evolving threats.',
  solution: 'We combine Breach & Attack Simulation (BAS) with Cyber Range to continuously test, validate, and improve your security posture in a closed-loop model.',
  icon: <RefreshCw className="w-7 h-7" />,
  overlayIcon: <Target className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/02/Module6_3UpCards_02@2x.jpg',
  highlight: 'Closed-loop BAS & validation'
}, {
  id: 'awareness',
  title: 'Cyber Awareness Programs',
  category: 'Citizen & Enterprise',
  problem: 'Human error remains the biggest cybersecurity risk.',
  solution: 'We deliver engaging, scenario-based awareness programs that help users identify and prevent real-world cyber frauds and attacks.',
  icon: <Megaphone className="w-7 h-7" />,
  overlayIcon: <Zap className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_frost.jpg',
  highlight: 'Scenario-based human-layer defense'
}, {
  id: 'talent',
  title: 'Cybersecurity Talent Assurance',
  category: 'Role-Based Hiring & Validation',
  problem: 'Traditional hiring relies on resumes, not real capability-leading to poor hiring decisions and skill gaps.',
  solution: 'We provide pre-validated, deployment-ready cybersecurity professionals evaluated through practical assessments and real-world scenarios. Role-based hiring with flexible engagement models-contract, full-time, or project-based-ensures you hire professionals who deliver from day one.',
  icon: <Users className="w-7 h-7" />,
  overlayIcon: <Activity className="w-9 h-9 text-white" />,
  bgImage: 'https://www.sentinelone.com/wp-content/uploads/2025/07/industry_bg_gartner.png',
  highlight: 'Pre-validated, deployment-ready talent'
}];
const STATS = [{
  id: 'stat-1',
  value: '10',
  suffix: '+',
  label: 'Specialized Services',
  detail: 'Covering the full cybersecurity lifecycle'
}, {
  id: 'stat-2',
  value: 'OSCP',
  suffix: '',
  label: 'Certified Engineers',
  detail: 'Real-world attack simulation expertise'
}, {
  id: 'stat-3',
  value: '360°',
  suffix: '',
  label: 'Security Coverage',
  detail: 'People, Process & Technology validation'
}] as any[];

const CONTACT_URL = 'https://www.purplesynapz.com/contact-us';
const SERVICES_URL = 'https://www.purplesynapz.com/';

// @component: PurpleTestedFramework
export const PurpleTestedFramework = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  // @return
  return <div className="w-full bg-background overflow-hidden">
      {/* Main content section */}
      <div className="py-24 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Our Cybersecurity Services
            </motion.div>

            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="text-5xl md:text-7xl font-light tracking-tight text-foreground leading-[1.1]">
              <span>Validate, Strengthen,</span>
              <br />
              <span className="text-primary font-normal">Defend with Confidence</span>
            </motion.h2>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              From SOC assessments to talent assurance, our end-to-end cybersecurity
              services are designed to close the gap between assumption and reality-
              giving your organization measurable, real-world security outcomes.
            </motion.p>
          </div>

          {/* Services Grid - 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {SERVICES.map((service, index) => <motion.div key={service.id} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index % 4 * 0.08
          }} viewport={{
            once: true
          }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} className="group relative flex flex-col min-h-[480px] border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors duration-500">
                {/* Card Header */}
                <div className="p-7 flex flex-col flex-none relative z-10 bg-card border-b border-border">
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-2.5 bg-muted rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-500">
                      {service.icon}
                    </div>
                    <motion.div role="button" tabIndex={0} aria-label={`Contact us about ${service.title}`} onClick={() => navigateTo(CONTACT_URL)} onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    navigateTo(CONTACT_URL);
                  }
                }} className="cursor-pointer" animate={{
                  x: hoveredIndex === index ? 5 : 0
                }} transition={{
                  duration: 0.2
                }}>
                      <ArrowRight className={cn('w-5 h-5 transition-colors duration-300', hoveredIndex === index ? 'text-primary' : 'text-muted-foreground')} />
                    </motion.div>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    {service.category}
                  </span>

                  <h3 className="text-[21px] font-bold tracking-tight text-foreground mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {hoveredIndex === index && <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-1.5">
                    Problem:
                  </span>}

                  <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-3">
                    {hoveredIndex === index ? service.problem : service.solution}
                  </p>

                  {/* Animated solution reveal on hover */}
                  <div className={cn('grid transition-all duration-500 ease-in-out', hoveredIndex === index ? 'grid-rows-[1fr] mt-5 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0')}>
                    <div className="overflow-hidden border-t border-border pt-4">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-1.5">
                        Our Solution:
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {service.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Media Section */}
                <div className="relative flex-grow overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{
                backgroundImage: `url(${service.bgImage})`
              }} />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500" />

                  {/* Floating overlay card */}
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="w-full max-w-[220px] backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-white text-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-center mb-2.5">
                        {service.overlayIcon}
                      </div>
                      <p className="text-sm font-medium tracking-tight leading-snug">
                        {service.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom hover accent line */}
                <motion.div className="absolute bottom-0 left-0 h-1 bg-primary z-20" initial={{
              width: 0
            }} animate={{
              width: hoveredIndex === index ? '100%' : '0%'
            }} transition={{
              duration: 0.4
            }} />
              </motion.div>)}
          </div>

          {/* Stats Bar */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="w-full bg-muted/50 border border-border rounded-2xl p-8 md:p-12 shadow-sm mb-0">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
              {STATS.map((stat, i) => <div key={stat.id} className={cn('flex flex-col items-center md:items-start px-8 w-full md:w-1/3 text-center md:text-left', i > 0 && 'pt-8 md:pt-0')}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{stat.value}</span>
                    {stat.suffix && <span className="text-2xl font-bold text-primary">{stat.suffix}</span>}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-light">{stat.detail}</p>
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Strip - full-bleed solid */}
      <motion.section initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.7,
      delay: 0.2
    }} viewport={{
      once: true
    }} className="w-full bg-primary">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left copy */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <CalendarCheck className="w-5 h-5 text-white/70" />
              <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Ready to strengthen your security posture?
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
              <span>Let's build your</span>
              <br />
              <span className="font-semibold">security roadmap together.</span>
            </h2>
            <p className="text-white/60 text-base font-light max-w-xl leading-relaxed">
              Talk to one of our experts to identify gaps, prioritize your defenses, and get
              a tailored plan for your organization-no commitment required.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4 flex-shrink-0">
            <button onClick={() => navigateTo(CONTACT_URL)} className="group inline-flex items-center gap-2.5 bg-white text-primary font-semibold text-sm tracking-wide px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a Free Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button onClick={() => navigateTo(SERVICES_URL)} className="group inline-flex items-center gap-2.5 bg-transparent text-white font-medium text-sm tracking-wide px-8 py-4 rounded-full border border-white/30 hover:border-white/70 hover:bg-white/5 transition-all duration-300">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Fine print */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 text-center">
            <p className="text-white/40 text-xs font-light">
              * The Standard in Security Excellence. Trusted by leading organizations worldwide.
            </p>
          </div>
        </div>
      </motion.section>
    </div>;
};