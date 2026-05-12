import { ChevronDown, Compass, LayoutDashboard, Milestone, Menu, Server, ShieldCheck, SlidersHorizontal, Users, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

const purpleRangeLinks = ["Platform Overview", "Features & Capabilities", "Use Cases", "Supported Workloads", "Compliance & Certifications", "Customer Stories", "Our Journey"]
const solutionsLinks = ["By Industry", "By Use Case", "By Role", "Case Studies"]
const industriesLinks = ["FinTech", "HealthTech", "EduTech", "ManufacturingTech"]
const resourcesLinks = [{
  title: "Blog",
  icon: "fi-rs-document"
}, {
  title: "Open Source Projects",
  icon: "fi-rs-code-branch"
}, {
  title: "Case studies",
  icon: "fi-rs-briefcase"
}, {
  title: "Whitepapers",
  icon: "fi-rs-file-pdf"
}, {
  title: "PurpleSnapz Academy",
  icon: "fi-rs-graduation-cap"
}, {
  title: "Webinars & Events",
  icon: "fi-rs-calendar"
}]
const aboutLinks = [{
  title: "About us",
  icon: "fi-rs-info"
}, {
  title: "Careers",
  icon: "fi-rs-briefcase"
}, {
  title: "Partner program",
  icon: "fi-rs-handshake"
}, {
  title: "Contact us",
  icon: "fi-rs-envelope"
}, {
  title: "Trust & Security",
  icon: "fi-rs-shield-check"
}, {
  title: "Privacy Policy",
  icon: "fi-rs-lock"
}, {
  title: "Terms of Service",
  icon: "fi-rs-document-signed"
}]

export const MegaNavbar2 = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const showExtendedNavigation = false
  const showAboutDropdown = false
  const visibleResourcesLinks = resourcesLinks.filter(link => link.title === "Blog" || link.title === "Open Source Projects")

  const PurpleRangeDropdownMenu = ({
    onMouseEnter,
    onMouseLeave
  }: {
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }) => {
    const purpleRangeData = [{
      title: "Platform Overview",
      description: "The world's first truly customizable cyber range",
      icon: LayoutDashboard,
      href: "/purplerange"
    }, {
      title: "Features & Capabilities",
      description: "50+ scenarios, 2,000+ attacks, fully scalable",
      icon: SlidersHorizontal,
      href: "/purplerange#platform-capabilities"
    }, {
      title: "Use Cases",
      description: "Validate your security under real attack conditions",
      icon: Compass,
      href: "/purplerange#key-use-cases"
    }, {
      title: "Supported Workloads",
      description: "Test your entire security ecosystem end-to-end",
      icon: Server,
      href: "/purplerange#supported-workloads"
    }, {
      title: "Compliance & Certifications",
      description: "ISO 27001 & ISO 9001 certified",
      icon: ShieldCheck,
      href: "/purplerange#compliance-certifications"
    }, {
      title: "Customer Stories",
      description: "Trusted by enterprises, governments, and universities globally",
      icon: Users,
      href: "/purplerange"
    }, {
      title: "Our Journey",
      description: "Learn about our mission to transform security validation",
      icon: Milestone,
      href: "/purplerange"
    }] satisfies Array<{ title: string; description: string; icon: LucideIcon; href: string }>

    return (
      <div className="absolute left-1/2 top-full pt-[24px] w-[920px] max-w-[calc(100vw-2rem)] z-50" style={{ transform: 'translateX(-35%)' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-[#8559EE]/10 border border-[#8559EE]/5">
          <div className="px-12 py-12">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {purpleRangeData.map((item, index) => (
                    <a key={index} href={item.href} className="block group">
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-[#8559EE] mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <div className="font-bold text-[#334155] text-[15px] mb-1.5 group-hover:text-[#8559EE] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[#64748B] text-sm leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-1 bg-gradient-to-br from-[#400080] via-[#8559EE] to-[#9d6ef0] rounded-r-2xl px-8 pt-28 pb-0 flex flex-col justify-between items-center text-center -my-12 -mr-12 self-stretch shadow-lg shadow-[#8559EE]/30 relative">
                <div className="flex flex-col items-center mb-2">
                  <h5 className="text-white mb-6">Ready to Validate Your Security Controls?</h5>
                  <a href="/contact-us" className="bg-white text-[#400080] px-6 py-3 rounded-xl mb-4 hover:bg-white/90 hover:shadow-lg transition-all w-full font-semibold text-center">Book a demo</a>
                  <a href="/purplerange" className="text-white hover:underline text-sm">Learn More →</a>
                </div>
                <div className="w-full mt-auto flex justify-center items-end">
                  <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/lab_c3a65fb7-8cbf-4aa5-b719-d5dcac94f783.png" alt="Purple Range™ Lab" className="w-full h-auto object-cover rounded-br-2xl" style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ProductsDropdownMenu = ({
    onMouseEnter,
    onMouseLeave
  }: {
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }) => {
    const column1Data = [
      { title: "Cyber Drill", description: "Validate team readiness against real attacks", hasAI: false, hasNew: true, icon: "fi-rs-shield-check" },
      { title: "Red vs Blue", description: "Adversarial simulation training", hasAI: false, hasNew: false, icon: "fi-rs-swords" },
      { title: "Hiring Validation", description: "Verify candidate skills through simulation", hasAI: false, hasNew: false, icon: "fi-rs-user-check" },
      { title: "Product Benchmarking", description: "Prove security before deployment", hasAI: false, hasNew: false, icon: "fi-rs-chart-histogram" }
    ]
    const column2Data = [
      { title: "Cyber War Game", description: "Team-based red vs blue exercises", hasAI: false, hasNew: true, icon: "fi-rs-gamepad" },
      { title: "Training & Simulation", description: "Measure and improve security competency", hasAI: false, hasNew: false, icon: "fi-rs-graduation-cap" },
      { title: "IR on Purple Range™", description: "Exercise and optimize incident response", hasAI: false, hasNew: false, icon: "fi-rs-bell-ring" }
    ]
    const column3Data = [
      { title: "PurpleTested™ Overview", description: "The validation framework that proves security works", hasAI: false, hasNew: false, icon: "fi-rs-badge-check" },
      { title: "Validation Meter", description: "Real-time security effectiveness scoring", hasAI: false, hasNew: false, icon: "fi-rs-dashboard" },
      { title: "How It Works", description: "People, Process, Technology validation", hasAI: false, hasNew: false, icon: "fi-rs-settings" },
      { title: "Platform Overview", description: "Connect industry-leading data across your entire tech stack", hasAI: false, hasNew: false, icon: "fi-rs-apps" }
    ]
    const column4Data = [
      { title: "Security Consulting", description: "Expert guidance for security transformation", hasAI: false, hasNew: false, icon: "fi-rs-user-headset" },
      { title: "Validation Services", description: "Professional security validation and testing", hasAI: false, hasNew: false, icon: "fi-rs-check-circle" },
      { title: "Custom Simulations", description: "Tailored attack scenarios for your environment", hasAI: false, hasNew: false, icon: "fi-rs-customize" },
      { title: "Managed Services", description: "White glove services for large-scale and complex validation requests", hasAI: false, hasNew: false, icon: "fi-rs-headset" }
    ]

    return (
      <div className="fixed top-[72px] pt-[24px] w-[1200px] max-w-[calc(100vw-2rem)] z-50" style={{ right: 'calc(1rem + 50px)', left: 'auto' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-[#8559EE]/10 border border-[#8559EE]/5">
          <div className="px-12 py-12">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-1">
                <div className="text-[#400080] uppercase mb-4"><small><strong>PRODUCT</strong></small></div>
                <div className="space-y-6">
                  {column1Data.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <i className={`fi ${item.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-1.5">
                            {item.hasAI && (<div className="shrink-0 w-5 h-5 rounded-full bg-[#EF4444] flex items-center justify-center"><span className="text-white text-[9px]">AI</span></div>)}
                            <div className="flex items-center gap-2 flex-wrap">
                              <div className="font-bold text-[#334155] text-[15px] group-hover:text-[#8559EE] transition-colors">{item.title}</div>
                              {item.hasNew && (<span className="bg-[#60A5FA] text-white text-[11px] px-2 py-0.5 rounded">New</span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#64748B] text-sm leading-relaxed">{item.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <div className="text-[#400080] uppercase mb-4 invisible">PRODUCT</div>
                <div className="space-y-6">
                  {column2Data.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <i className={`fi ${item.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-1.5">
                            {item.hasAI && (<div className="shrink-0 w-5 h-5 rounded-full bg-[#EF4444] flex items-center justify-center"><span className="text-white text-[9px]">AI</span></div>)}
                            <div className="flex items-center gap-2 flex-wrap">
                              <div className="font-bold text-[#334155] text-[15px] group-hover:text-[#8559EE] transition-colors">{item.title}</div>
                              {item.hasNew && (<span className="bg-[#60A5FA] text-white text-[11px] px-2 py-0.5 rounded">New</span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#64748B] text-sm leading-relaxed">{item.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <div className="text-[#400080] uppercase mb-4"><small><strong>PLATFORM</strong></small></div>
                <div className="space-y-6">
                  {column3Data.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <i className={`fi ${item.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                        <div className="flex-1">
                          <div className="font-bold text-[#334155] text-[15px] mb-1.5 group-hover:text-[#8559EE] transition-colors">{item.title}</div>
                          <div className="text-[#64748B] text-sm leading-relaxed">{item.description}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <div className="text-[#400080] uppercase mb-4"><small><strong>PROFESSIONAL SERVICES</strong></small></div>
                <div className="space-y-6">
                  {column4Data.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="flex items-start gap-3">
                        <i className={`fi ${item.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                        <div className="flex-1">
                          <div className="font-bold text-[#334155] text-[15px] mb-1.5 group-hover:text-[#8559EE] transition-colors">{item.title}</div>
                          <div className="text-[#64748B] text-sm leading-relaxed">{item.description}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-1 bg-gradient-to-br from-[#400080] via-[#8559EE] to-[#9d6ef0] rounded-r-2xl px-8 pt-28 pb-0 flex flex-col justify-between items-center text-center -my-12 -mr-12 self-stretch shadow-lg shadow-[#8559EE]/30 relative">
                <div className="flex flex-col items-center mb-2">
                  <h5 className="text-white mb-6">Boost Your Security with PurpleRange™</h5>
                  <button className="bg-white text-[#400080] px-6 py-3 rounded-xl mb-4 hover:bg-white/90 hover:shadow-lg transition-all w-full">Book a demo</button>
                  <a href="#" className="text-white hover:underline">Learn More →</a>
                </div>
                <div className="w-full mt-auto flex justify-center items-end">
                  <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/lab_c3a65fb7-8cbf-4aa5-b719-d5dcac94f783.png" alt="Lab" className="h-auto object-cover rounded-br-2xl" style={{ width: '190%', maxWidth: 'none' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const DropdownMenu = ({
    items,
    width = "w-[220px]",
    onMouseEnter,
    onMouseLeave
  }: {
    items: Array<{ title: string; icon: string }>
    width?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }) => (
    <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-[24px] ${width} z-50`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-[#8559EE]/10 border border-[#8559EE]/5">
        <div className="py-4">
          {items.map(item => (
            <a key={item.title} href={item.title === "Blog" ? "https://kb.purplesynapz.com/" : item.title === "Open Source Projects" ? "/open-source-projects" : item.title === "About us" ? "/about-us" : item.title === "Contact us" ? "/contact-us" : "#"} className="block px-6 py-2.5 text-[#181818] text-[15px] hover:text-[#8559EE] transition-colors">
              <div className="flex items-center gap-3">
                <i className={`fi ${item.icon} text-[18px] text-[#8559EE]`}></i>
                <span>{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  const SolutionsDropdownMenu = ({
    onMouseEnter,
    onMouseLeave
  }: {
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }) => {
    const topSectionData = [{
      header: "VALIDATION",
      links: [
        { title: "Security Assessment", description: "Measure current security effectiveness", icon: "fi-rs-shield-interrogation" },
        { title: "Threat Detection", description: "Identify vulnerabilities before attackers do", icon: "fi-rs-search-alt" },
        { title: "Compliance Validation", description: "Prove regulatory compliance continuously", icon: "fi-rs-badge-check" },
        { title: "Risk Scoring", description: "Quantify security posture in real-time", icon: "fi-rs-chart-line-up" }
      ]
    }, {
      header: "SIMULATION",
      links: [
        { title: "Cyber Drill", description: "Validate team readiness against real attacks", icon: "fi-rs-shield-check" },
        { title: "Red vs Blue", description: "Team-based adversarial exercises", icon: "fi-rs-sword" },
        { title: "War Game Scenarios", description: "Practice coordinated defense strategies", icon: "fi-rs-chess" },
        { title: "Attack Simulation", description: "Experience realistic threat scenarios", icon: "fi-rs-target" },
        { title: "Tabletop Exercises", description: "Strategic decision-making practice", icon: "fi-rs-users-alt" }
      ]
    }, {
      header: "OPTIMIZATION",
      links: [
        { title: "Workflow Automation", description: "Streamline security operations", icon: "fi-rs-workflow" },
        { title: "Response Optimization", description: "Reduce incident response time", icon: "fi-rs-time-fast" },
        { title: "Performance Analytics", description: "Track security team effectiveness", icon: "fi-rs-stats" },
        { title: "Integration Hub", description: "Connect security tools seamlessly", icon: "fi-rs-link" }
      ]
    }]
    const bottomSectionData = [
      { title: "PurpleSnapz Academy", description: "Courses and certifications that build expertise", icon: "fi-rs-graduation-cap" },
      { title: "Enterprise Solutions", description: "Comprehensive validation for industry", icon: "fi-rs-building" },
      { title: "API & Integrations", description: "Extend validation across your security stack", icon: "fi-rs-plug" }
    ]

    return (
      <div className="absolute left-1/2 top-full pt-[24px] w-[920px] z-50" style={{ transform: 'translateX(calc(-50% + 100px))' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-[#8559EE]/10 border border-[#8559EE]/5">
          <div className="px-12 py-12">
            <div className="grid grid-cols-3 gap-12 mb-16">
              {topSectionData.map((column, colIndex) => (
                <div key={colIndex}>
                  <div className="text-[#400080] uppercase mb-4"><small><strong>{column.header}</strong></small></div>
                  <div className="w-12 h-px bg-[#E2E8F0] mb-6"></div>
                  <div className="space-y-7">
                    {column.links.map((link, linkIndex) => (
                      <a key={linkIndex} href="#" className="block group">
                        <div className="flex items-start gap-3">
                          <i className={`fi ${link.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                          <div className="flex-1">
                            <div className="font-bold text-[#334155] text-[15px] mb-2 group-hover:text-[#8559EE] transition-colors">{link.title}</div>
                            <div className="text-[#64748B] text-sm leading-relaxed">{link.description}</div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-[#8559EE]/10">
              {bottomSectionData.map((item, index) => (
                <a key={index} href="#" className="block group">
                  <div className="flex items-start gap-3">
                    <i className={`fi ${item.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                    <div className="flex-1">
                      <div className="font-bold text-[#334155] text-[15px] mb-2 group-hover:text-[#8559EE] transition-colors">{item.title}</div>
                      <div className="text-[#64748B] text-sm leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const IndustriesDropdownMenu = ({
    onMouseEnter,
    onMouseLeave
  }: {
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }) => {
    const industriesData = [
      { title: "FinTech", description: "Security validation for financial services", icon: "fi-rs-bank" },
      { title: "HealthTech", description: "Patient data protection validation", icon: "fi-rs-heart" },
      { title: "EduTech", description: "Secure learning platform validation", icon: "fi-rs-book-alt" },
      { title: "ManufacturingTech", description: "OT/IT convergence security validation", icon: "fi-rs-industry-alt" },
      { title: "RetailTech", description: "POS and payment security validation", icon: "fi-rs-shopping-cart" },
      { title: "TelecomTech", description: "Network infrastructure security validation", icon: "fi-rs-signal-alt" },
      { title: "DefenceTech", description: "Mission-critical system validation", icon: "fi-rs-shield" },
      { title: "GovernmentTech", description: "Compliance-ready security validation", icon: "fi-rs-bank" }
    ]
    return (
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-[24px] w-[600px] z-50" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-[#8559EE]/10 border border-[#8559EE]/5">
          <div className="px-8 py-8">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {industriesData.map((industry, index) => (
                <a key={index} href="#" className="block group">
                  <div className="flex items-start gap-3">
                    <i className={`fi ${industry.icon} text-[20px] text-[#8559EE] mt-0.5`}></i>
                    <div className="flex-1">
                      <div className="font-bold text-[#334155] text-[15px] mb-2 group-hover:text-[#8559EE] transition-colors">{industry.title}</div>
                      <div className="text-[#64748B] text-sm leading-relaxed">{industry.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const NavItem = ({
    label,
    items,
    width,
    isSolutions = false,
    isProducts = false,
    isIndustries = false,
    isPurpleRange = false
  }: {
    label: string
    items: string[] | Array<{ title: string; icon: string }>
    width?: string
    isSolutions?: boolean
    isProducts?: boolean
    isIndustries?: boolean
    isPurpleRange?: boolean
  }) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      setActiveDropdown(label)
    }

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null)
      }, 150)
    }

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    return (
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className={`flex items-center gap-1 text-[15px] transition-colors pb-5 ${activeDropdown === label ? 'text-[#8559EE]' : 'text-[#181818] hover:text-[#8559EE]'}`}>
          {label}
          <ChevronDown className="w-4 h-4" />
        </button>
        {activeDropdown === label && (
          <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-[#8559EE] via-[#9d6ef0] to-[#8559EE] bottom-[-1px] sm:bottom-[-4px] shadow-lg shadow-[#8559EE]/50" />
        )}
        {activeDropdown === label && (
          isPurpleRange ? (
            <PurpleRangeDropdownMenu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          ) : isProducts ? (
            <ProductsDropdownMenu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          ) : isSolutions ? (
            <SolutionsDropdownMenu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          ) : isIndustries ? (
            <IndustriesDropdownMenu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          ) : (
            <DropdownMenu items={items as Array<{ title: string; icon: string }>} width={width} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          )
        )}
      </div>
    )
  }

  const SimpleNavLink = ({
    label,
    href,
    external = false
  }: {
    label: string
    href: string
    external?: boolean
  }) => (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="text-[15px] text-[#181818] hover:text-[#8559EE] transition-colors pb-5">
      {label}
    </a>
  )

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#8559EE]/10 sticky top-0 z-50 shadow-sm" style={{ borderBottomWidth: '1px' }}>
      <AnimatePresence>
        {activeDropdown && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 top-[72px] bg-[#400080]/5 backdrop-blur-sm -z-10 h-screen w-screen" />
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-2 pb-0 sm:pb-1">
        <div className="flex items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <a href="/">
              <img src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Frame_1171275932.png" alt="Purple Synapse Logo" width={170} height={45} className="h-11 sm:h-10 md:h-11 w-auto cursor-pointer" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-7 ml-[58px] mt-[10px] pt-[10px]">
            <NavItem label="Purple Range™" items={purpleRangeLinks} width="w-[200px]" isPurpleRange={true} />
            <SimpleNavLink label="Get PurpleTested™" href="https://purpletested.com/" external={true} />
            {showExtendedNavigation && (
              <>
                <NavItem label="Solutions" items={solutionsLinks} width="w-[200px]" isSolutions={true} />
                <NavItem label="Industries" items={industriesLinks} width="w-[200px]" isIndustries={true} />
              </>
            )}
            <NavItem label="Resources" items={visibleResourcesLinks} width="w-[240px]" />
            <SimpleNavLink label="Contact Us" href="/contact-us" />
            {showAboutDropdown ? (
              <NavItem label="About" items={aboutLinks} width="w-[240px]" />
            ) : (
              <SimpleNavLink label="About Us" href="/about-us" />
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-[#181818] hover:text-[#8559EE] transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a href="/contact-us" className="hidden md:inline-flex items-center justify-center h-10 px-5 bg-[#8559EE] text-white text-[14px] font-medium rounded-lg hover:bg-[#7046c2] transition-colors">
            Book a demo
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden bg-white border-t border-[#8559EE]/10">
            <nav className="px-4 py-6 space-y-4">
              <div>
                <button onClick={() => { const newValue = activeDropdown === "Purple Range™" ? null : "Purple Range™"; setActiveDropdown(newValue) }} className="w-full flex items-center justify-between text-[15px] text-[#181818] hover:text-[#8559EE] transition-colors py-2">
                  Purple Range™
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "Purple Range™" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "Purple Range™" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="pl-4 mt-2 space-y-3">
                        {[
                          { title: "Platform Overview", description: "The world's first truly customizable cyber range", icon: "fi-rs-cube" },
                          { title: "Features & Capabilities", description: "50+ scenarios, 2,000+ attacks, fully scalable", icon: "fi-rs-layers" },
                          { title: "Use Cases", description: "Validate your security under real attack conditions", icon: "fi-rs-target" },
                          { title: "Supported Workloads", description: "Test your entire security ecosystem end-to-end", icon: "fi-rs-cloud" },
                          { title: "Compliance & Certifications", description: "ISO 27001 & ISO 9001 certified", icon: "fi-rs-diploma" },
                          { title: "Customer Stories", description: "Trusted by enterprises, governments, and universities globally", icon: "fi-rs-users" },
                          { title: "Our Journey", description: "Learn about our mission to transform security validation", icon: "fi-rs-marker" }
                        ].map((item, idx) => (
                          <a key={idx} href="/purplerange" onClick={() => setIsMobileMenuOpen(false)} className="block group">
                            <div className="flex items-center gap-3">
                              <i className={`fi ${item.icon} text-[16px] text-[#8559EE]`}></i>
                              <span className="text-sm text-[#334155] group-hover:text-[#8559EE] transition-colors font-semibold">{item.title}</span>
                            </div>
                            <p className="text-xs text-[#64748B] mt-1 pl-7">{item.description}</p>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button onClick={() => { const newValue = activeDropdown === "Resources" ? null : "Resources"; setActiveDropdown(newValue) }} className="w-full flex items-center justify-between text-[15px] text-[#181818] hover:text-[#8559EE] transition-colors py-2">
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "Resources" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "Resources" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="pl-4 mt-2 space-y-2">
                        {visibleResourcesLinks.map((link, idx) => (
                          <a key={idx} href={link.title === "Blog" ? "https://kb.purplesynapz.com/" : link.title === "Open Source Projects" ? "/open-source-projects" : link.title === "Contact us" ? "/contact-us" : "#"} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-[#334155] hover:text-[#8559EE] transition-colors">
                            <div className="flex items-center gap-2">
                              <i className={`fi ${link.icon} text-[16px] text-[#8559EE]`}></i>
                              <span>{link.title}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="https://purpletested.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[15px] font-semibold text-[#181818] hover:text-[#8559EE] transition-colors">Get PurpleTested™</a>
              <a href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[15px] font-semibold text-[#181818] hover:text-[#8559EE] transition-colors">About Us</a>
              <a href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-[15px] font-semibold text-[#181818] hover:text-[#8559EE] transition-colors">Contact Us</a>

              <div className="pt-4 border-t border-[#8559EE]/10">
                <a href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="w-full h-11 px-4 bg-[#8559EE] text-white rounded-lg hover:bg-[#7046c2] transition-colors flex items-center justify-center">
                  Book a demo
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
