"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"

const products = [
  {
    name: "1SYX",
    tagline: "1 System For Your X-Factor",
    description:
      "1SYX turns scattered content, scattered performance data, and scattered opinions into one clear decision system. It tells you what to double down on, what to kill, what to fix, and what to ship next, with proof gates at every step. You get fewer debates, faster decisions, and a content engine that feels calm, confident, and repeatable.",
    logo: "/1syx-logo.jpeg",
    url: "https://1syxai.com",
    accent: "from-blue-500/10 via-cyan-500/5 to-transparent",
    border: "group-hover:border-blue-500/20",
    shadow: "group-hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.15)]",
  },
  {
    name: "VoiShift",
    tagline: "Voice Intelligence, Redefined",
    description:
      "Ops is decision-heavy, exception-heavy, and scattered across people plus systems, so teams lose hours to status chasing, approvals, handoffs, and rework. Voice changes the world when it is a governed operating layer, not a gimmick: one spoken request pulls context, captures missing info, routes approvals, writes back to systems, and logs the why.",
    logo: "/voishift-logo.png",
    url: "https://voishiftai.com",
    accent: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    border: "group-hover:border-purple-500/20",
    shadow: "group-hover:shadow-[0_8px_40px_-12px_rgba(168,85,247,0.15)]",
  },
  {
    name: "Latenti",
    tagline: "Invisible Cultural Infrastructure via GiftOps",
    description:
      "Most brands chase loyalty with words. Latenti earns it with moments that land so perfectly they change how people feel. We build culture into repeatable rituals, not ad hoc gestures, with end-to-end execution built in. Employees feel seen, belong fast, and advocate. Customers come back warmer. Partners advocate harder. Event/Booth attendees remember you. People start wearing your brand like a badge, not a contract.",
    logo: "/latenti-logo.png",
    url: "/",
    accent: "from-orange-500/10 via-amber-500/5 to-transparent",
    border: "group-hover:border-orange-500/20",
    shadow: "group-hover:shadow-[0_8px_40px_-12px_rgba(249,115,22,0.15)]",
    comingSoon: true,
  },
]

const smoothSpring = {
  type: "spring",
  stiffness: 60,
  damping: 20,
  mass: 0.8
} as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: smoothSpring
  }
}

export default function Index() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#fafaf9] relative overflow-x-hidden font-sans text-slate-900 selection:bg-slate-900 selection:text-white pb-32">

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#fafaf9]"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-widest uppercase text-slate-900 px-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Welcome to KLYRR
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >

      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.25
        }}
      />

      <div className="fixed top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-slate-100 via-slate-50/50 to-transparent pointer-events-none z-0" />

      <motion.div
        animate={{ y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[-10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-sky-200/20 rounded-full blur-[120px] z-0 mix-blend-multiply pointer-events-none"
      />

      <motion.div
        animate={{ y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-[-10%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-orange-100/30 rounded-full blur-[140px] z-0 mix-blend-multiply pointer-events-none"
      />

      <section className="relative z-10 w-full min-h-[60vh] flex flex-col items-center justify-center pt-6 pb-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothSpring}
          className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6"
        >
          <img
            src="/klyrr-logo.png"
            alt="KLYRR"
            className="h-48 sm:h-64 md:h-[24rem] max-w-[90vw] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] mb-12"
          />
        </motion.div>

      </section>

      <section className="relative z-20 w-full max-w-7xl mx-auto px-6">

        <motion.div 
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-12 max-w-6xl mx-auto"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black tracking-tighter text-slate-900 mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our{" "}
            <span className="relative whitespace-nowrap inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-400/20 to-primary/20 blur-xl opacity-50" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 drop-shadow-sm">
                Brands
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light tracking-tight max-w-6xl mx-auto">
            Three powerful platforms. One mission —{" "}
            <span className="font-semibold text-slate-900">clarity</span>,{" "}
            <span className="font-semibold text-slate-900">precision</span>, and{" "}
            <span className="font-semibold text-slate-900">revenue</span>.
          </p>
        </motion.div>

        <motion.main
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {products.map((product) => (
            <motion.a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className={`group relative bg-white rounded-[2.5rem] p-10 md:p-12 flex flex-col items-start transition-all duration-700 hover:-translate-y-2 border border-slate-100 overflow-hidden cursor-pointer shadow-sm ${product.border} ${product.shadow}`}
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]`} />

              <div className="h-24 md:h-28 w-auto mb-12 z-10 transition-transform duration-700 ease-out group-hover:scale-105 mx-auto">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm mix-blend-multiply"
                />
              </div>

              <div className="space-y-4 z-10 flex-1 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {product.name}
                  {"comingSoon" in product && product.comingSoon && (
                    <span className="text-sm text-slate-500 font-normal mt-1"> (Coming Soon...)</span>
                  )}
                </h2>

                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-slate-900 transition-colors duration-500 pb-6">
                  {product.tagline}
                </p>

                <div className="w-12 h-px bg-slate-200 group-hover:w-full group-hover:bg-slate-300 transition-all duration-700 ease-in-out" />

                <p className="text-lg text-slate-600 leading-relaxed text-justify pt-6 font-medium">
                  {product.description}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between w-full z-10 pt-6">
                <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-6 h-px bg-transparent group-hover:bg-slate-900 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                  Explore Platform
                </span>

                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-slate-100 bg-white text-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-500 transform group-hover:rotate-45 shadow-sm">
                  <ArrowUpRight className="h-6 w-6 stroke-[2]" />
                </div>
              </div>

            </motion.a>
          ))}
        </motion.main>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="mt-32 max-w-4xl mx-auto text-center" > 
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16" /> 
          <p className="text-sm font-medium text-slate-400 tracking-[0.2em] uppercase flex items-center justify-center gap-2"> 
            Powered by{" "} 
            <a href="https://www.klyrr.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-slate-600 transition-colors inline-flex relative group"> 
              KLYRR 
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" /> 
            </a> 
          </p>
          <div className="mt-5 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/company/klyrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-[#0A66C2] transition-colors duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-xs font-semibold tracking-widest uppercase">Follow us on LinkedIn</span>
            </a>
          </div>
        </motion.div>

      </section>

      </motion.div>
    </div>
  )
}