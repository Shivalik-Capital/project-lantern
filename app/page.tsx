'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, Users, MapPin, BarChart3, ShieldX } from 'lucide-react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const PREVALENCE_DATA = [
  { state: 'Jammu & Kashmir', prevalence: 12.94 },
  { state: 'Odisha', prevalence: 10.74 },
  { state: 'Andhra Pradesh', prevalence: 10.37 },
  { state: 'National Average', prevalence: 7.4 },
  { state: 'Chandigarh', prevalence: 1.82 },
]

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const STAGGER = {
  visible: { transition: { staggerChildren: 0.2 } }
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary-lighter border-b border-border-light pt-24 pb-28 md:pt-32 md:pb-40" aria-labelledby="hero-heading">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full pointer-events-none opacity-40">
          <div className="absolute -top-24 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-amber rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container-layout relative z-10 text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={STAGGER}
        >
          <motion.span 
            variants={FADE_UP}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-700 text-primary uppercase tracking-widest mb-6 shadow-sm"
          >
            <ShieldX className="w-3.5 h-3.5 text-amber" /> Open Source Infrastructure
          </motion.span>
          <motion.h1
            variants={FADE_UP}
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-7xl font-sans font-800 text-text leading-[1.1] mb-8 max-w-5xl"
          >
            Digital infrastructure for dementia education in India.
          </motion.h1>
          <motion.p 
            variants={FADE_UP}
            className="text-lg md:text-2xl text-text-muted leading-relaxed max-w-3xl mb-12"
          >
            An evidence-based, medically bounded framework waiting for clinical leadership. Built to serve 8.8 million families.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="/clinical-board" className="btn btn-primary w-full sm:w-auto text-base px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
              Join the Clinical Board
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
            <Link href="/charter" className="btn btn-outline w-full sm:w-auto text-base px-8 py-4 bg-surface/50 backdrop-blur-sm">
              Read our Editorial Charter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Public Health Data Dashboard */}
      <section className="py-20 md:py-32" aria-labelledby="data-heading">
        <motion.div 
          className="container-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={FADE_UP}>
              <h2 id="data-heading" className="text-3xl md:text-4xl font-sans font-800 text-text mb-6">
                The scale of the challenge requires scale in education.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                According to the 2023 Longitudinal Aging Study in India (LASI), an estimated 8.8 million Indians over the age of 60 live with dementia. The national prevalence is approximately 7.4%, but this masks extreme regional disparities.
              </p>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                States like Jammu & Kashmir experience prevalence rates as high as 12.94%. Furthermore, rural populations and women are disproportionately affected. Without accessible, localized education, millions of families are navigating this severe cognitive decline completely unequipped.
              </p>
              <div className="flex items-center gap-2 text-sm text-text-subtle font-600">
                <BarChart3 className="w-4 h-4" /> Data sourced from Alzheimer's & Dementia Journal (2023)
              </div>
            </motion.div>

            <motion.div variants={FADE_UP} className="card p-6 md:p-8 bg-surface border-border shadow-card h-[400px] flex flex-col">
              <h3 className="font-sans font-700 text-lg text-text mb-6">Dementia Prevalence by State (%)</h3>
              <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PREVALENCE_DATA} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 15]} hide />
                    <YAxis dataKey="state" type="category" axisLine={false} tickLine={false} tick={{ fill: '#5a6070', fontSize: 13, fontWeight: 600 }} />
                    <Tooltip cursor={{ fill: '#f2f7f5' }} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px 0 rgb(74 124 111 / 0.14)' }} />
                    <Bar dataKey="prevalence" radius={[0, 4, 4, 0]} barSize={24}>
                      {PREVALENCE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.state === 'National Average' ? '#c4793a' : '#4a7c6f'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Impact */}
      <section className="py-20 md:py-32 border-t border-border-light bg-primary-lighter/30" aria-labelledby="mission-heading">
        <motion.div 
          className="container-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
        >
          <motion.div variants={FADE_UP} className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-sans font-800 text-text mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              We have built the technical infrastructure. Now we strictly adhere to these three principles as we await clinical direction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={FADE_UP} className="card p-8 rounded-2xl bg-surface border-border shadow-sm hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans font-700 text-xl text-text mb-3">
                Evidence-Based
              </h3>
              <p className="text-text-muted leading-relaxed">
                All content will be meticulously researched. We strictly prohibit the use of diagnostic AI tools or unverified symptom checkers on this platform.
              </p>
            </motion.div>
            
            <motion.div variants={FADE_UP} className="card p-8 rounded-2xl bg-surface border-border shadow-sm hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-light flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-amber" />
              </div>
              <h3 className="font-sans font-700 text-xl text-text mb-3">
                Locally Contextual
              </h3>
              <p className="text-text-muted leading-relaxed">
                From identifying regional ARDSI chapters to addressing cultural stigmas, our upcoming resources are explicitly tailored for the Indian context.
              </p>
            </motion.div>
            
            <motion.div variants={FADE_UP} className="card p-8 rounded-2xl bg-surface border-border shadow-sm hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans font-700 text-xl text-text mb-3">
                Completely Free
              </h3>
              <p className="text-text-muted leading-relaxed">
                No paywalls, no advertisements, no affiliate links and no subscription fees. This infrastructure is built to remain accessible to all families indefinitely.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
