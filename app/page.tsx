'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { IndiaMap } from '@/components/visualizations/IndiaMap'

const FV: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const SV: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// ── shared inline styles ──────────────────────────────────────
const S = {
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '11px',
    letterSpacing: '0.09em',
    textTransform: 'uppercase' as const,
    color: '#8f8f8e',
  },
  limeLabel: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '11px',
    letterSpacing: '0.09em',
    textTransform: 'uppercase' as const,
    color: '#4cc02b',
  },
  bodyLg: { fontSize: '19px', color: '#6f6f6e', lineHeight: 1.5, letterSpacing: '-0.2px' },
  bodySm: { fontSize: '16px', color: '#6f6f6e', lineHeight: 1.55 },
  caption: { fontSize: '14px', color: '#8f8f8e', lineHeight: 1.5 },
  rule: { borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 },
  vertRule: { width: '1px', background: 'rgba(0,0,0,0.1)', alignSelf: 'stretch' as const },
}

const ARTICLES = [
  { slug: 'what-is-alzheimers',  title: "What is Alzheimer's Disease?",                    tag: 'Basics' },
  { slug: 'what-is-dementia',    title: 'Understanding Dementia: More Than Just Memory Loss', tag: 'Basics' },
  { slug: 'early-signs',         title: "9 Early Signs of Alzheimer's Disease",              tag: 'Symptoms' },
  { slug: 'diagnosis',           title: 'Getting a Diagnosis in India',                       tag: 'Healthcare' },
  { slug: 'progression',         title: "The Stages of Alzheimer\u2019s: How the Disease Progresses", tag: 'Progression' },
]

const FEATURES = [
  { n: '01', title: 'Medical Article Library',   desc: '15+ guides on symptoms, diagnosis, progression, and caregiving — all reviewed by SCARF Chennai clinicians before publication.' },
  { n: '02', title: 'Daily Symptom Log',          desc: 'Track memory episodes, wandering incidents, sleep quality, agitation level, and appetite with a single tap per day.' },
  { n: '03', title: 'Blood Pressure Tracker',     desc: 'Record systolic, diastolic, and pulse readings. Every entry is timestamped so your doctor sees exactly when readings were taken.' },
  { n: '04', title: 'Doctor Visit Export',         desc: 'One-tap PDF generation. Bring six months of structured data to your next appointment instead of trying to remember everything under pressure.' },
  { n: '05', title: 'India Resource Directory',    desc: 'NGOs, memory clinics, ARDSI chapters, and dementia helplines — searchable by state, not translated from a Western resource list.' },
]

const STATS = [
  { value: '8.8M',  label: 'Indians 60+ living with dementia' },
  { value: '12.9%', label: 'Prevalence rate in high-burden states' },
  { value: '2×',    label: 'Projected growth by 2050' },
  { value: '₹0',    label: 'Cost to access every resource here' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#edede8' }}>

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '80px' }}>
        <motion.div
          className="container-layout"
          style={{ textAlign: 'center' }}
          initial="hidden" animate="visible" variants={SV}
        >
          {/* Trust eyebrow — no icon, just a live dot + text */}
          <motion.div
            variants={FV}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}
          >
            <span className="dot-live" />
            <span style={S.caption}>Medically reviewed by SCARF Chennai</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FV}
            style={{
              fontSize: 'clamp(38px, 6.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#292929',
              maxWidth: '820px',
              marginInline: 'auto',
              marginBottom: '28px',
            }}
          >
            Navigate dementia with clarity and confidence.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={FV}
            style={{
              ...S.bodyLg,
              maxWidth: '520px',
              marginInline: 'auto',
              marginBottom: '48px',
            }}
          >
            Free, medically reviewed guides for the 8.8 million families living with dementia in India. No login. No cost. No fine print.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={FV} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/tracker" className="btn btn-primary">Start Symptom Log</Link>
            <Link href="/understand" className="btn btn-secondary">Read the Guides</Link>
          </motion.div>

          {/* Trust bar — text only, no icons */}
          <motion.div
            variants={FV}
            style={{
              marginTop: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {[
              'SCARF Chennai reviewed',
              'Zero paywalls',
              'India-specific resources',
              'Works offline',
            ].map((item, i) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {i > 0 && <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#c0c0c0', display: 'inline-block' }} />}
                <span style={S.caption}>{item}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. STATS — pure typography, no cards ────────────────── */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <motion.div
          className="container-layout"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={SV}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.value}
                variants={FV}
                style={{
                  padding: '56px 48px',
                  borderRight:  (i % 2 === 0) ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  borderBottom: (i < 2)        ? '1px solid rgba(0,0,0,0.1)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(44px, 5vw, 72px)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#292929',
                  marginBottom: '12px',
                }}>
                  {s.value}
                </div>
                <div style={S.caption}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── 3. INFORMATION GAP — dark full-width editorial ──────── */}
      <section style={{ background: '#141414', padding: '96px 0' }}>
        <motion.div
          className="container-layout"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={SV}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '0 64px', alignItems: 'start' }}>
            {/* Left: editorial statement */}
            <motion.div variants={FV}>
              <div style={{ ...S.eyebrow, color: '#6f6f6e', marginBottom: '28px' }}>The problem</div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: 'clamp(22px, 3vw, 32px)',
                lineHeight: 1.3,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                margin: 0,
              }}>
                The available information on dementia is almost entirely written for Western families. It assumes a GP, a care home, and a healthcare system most Indian families will never encounter.
              </p>
            </motion.div>

            {/* Vertical rule */}
            <div style={S.vertRule} />

            {/* Right: prose */}
            <motion.div variants={FV} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ ...S.bodyLg, color: '#8f8f8e', margin: 0 }}>
                India has 8.8 million people living with dementia. The number is expected to double by 2050. Yet families navigating this are often doing it completely alone, with no roadmap built for their reality.
              </p>
              <p style={{ ...S.bodyLg, color: '#8f8f8e', margin: 0 }}>
                Project Lantern is not a substitute for ARDSI or the Dementia India Alliance. It is an addition: a free, open, plainly written resource with content written specifically for how dementia presents and is managed in India.
              </p>
              <p style={{ ...S.bodyLg, color: '#8f8f8e', margin: 0 }}>
                Every article has been reviewed by the clinical team at SCARF Chennai before publication. The symptom tracker stores data only on your device. Nothing is ever sent to a server.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── 4. WHAT WE BUILT — numbered editorial list ──────────── */}
      <section style={{ background: '#edede8', padding: '96px 0' }}>
        <motion.div
          className="container-layout"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={SV}
        >
          <motion.div variants={FV} style={{ marginBottom: '56px' }}>
            <div style={{ ...S.eyebrow, marginBottom: '16px' }}>What we built</div>
            <h2 style={{ color: '#292929', maxWidth: '520px' }}>
              Five tools for every stage of the journey.
            </h2>
          </motion.div>

          <div>
            {FEATURES.map((f, i) => (
              <motion.div key={f.n} variants={FV}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr 1fr',
                  gap: '0 48px',
                  padding: '36px 0',
                  alignItems: 'start',
                }}>
                  <span style={{ ...S.limeLabel, paddingTop: '3px' }}>{f.n}</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', color: '#292929' }}>
                    {f.title}
                  </h3>
                  <p style={{ ...S.bodySm, margin: 0 }}>{f.desc}</p>
                </div>
                {i < FEATURES.length - 1 && <hr style={S.rule} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── 5. INDIA MAP — 2-col asymmetric ─────────────────────── */}
      <section style={{ background: '#dbdbd2', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '0' }}>
        <motion.div
          className="container-layout"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '540px' }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={SV}
        >
          {/* Text */}
          <motion.div
            variants={FV}
            style={{ padding: '72px 64px 72px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(0,0,0,0.1)' }}
          >
            <div style={{ ...S.eyebrow, marginBottom: '16px' }}>Data</div>
            <h2 style={{ color: '#292929', marginBottom: '24px' }}>
              A demographic shift hiding in plain sight.
            </h2>
            <p style={{ ...S.bodyLg, color: '#6f6f6e', marginBottom: '16px' }}>
              Awareness remains devastatingly low. Symptoms like memory loss and confusion are frequently dismissed as normal aging, delaying crucial care by years.
            </p>
            <p style={{ ...S.bodyLg, color: '#6f6f6e', margin: 0 }}>
              Prevalence varies significantly by state and region. The burden falls disproportionately on rural populations, women, and families with no specialist access within 100km.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div variants={FV} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
            <IndiaMap />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 6. ARTICLE PREVIEW — newspaper index ────────────────── */}
      <section style={{ background: '#edede8', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '96px 0' }}>
        <motion.div
          className="container-layout"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={SV}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 96px', alignItems: 'start' }}>
            {/* Left: sticky label + CTA */}
            <motion.div variants={FV} style={{ position: 'sticky', top: '80px' }}>
              <div style={{ ...S.eyebrow, marginBottom: '16px' }}>Guide library</div>
              <h2 style={{ color: '#292929', marginBottom: '24px' }}>
                From the guide library
              </h2>
              <p style={{ ...S.bodySm, color: '#6f6f6e', marginBottom: '32px' }}>
                Every article is written by the Project Lantern editorial team and reviewed by the SCARF Chennai clinical board before publication.
              </p>
              <Link href="/understand" className="btn btn-primary">
                Read all guides
              </Link>
            </motion.div>

            {/* Right: article list */}
            <motion.div variants={FV}>
              {ARTICLES.map((a, i) => (
                <div key={a.slug}>
                  <Link
                    href={`/understand/${a.slug}`}
                    style={{ display: 'block', padding: '28px 0', textDecoration: 'none' }}
                  >
                    <div style={{ ...S.caption, color: '#4cc02b', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {a.tag}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '20px', letterSpacing: '-0.02em', color: '#292929', lineHeight: 1.3 }}>
                      {a.title}
                    </div>
                  </Link>
                  {i < ARTICLES.length - 1 && <hr style={S.rule} />}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── 7. TRACKER MOCKUP — 2-col, HTML mockup ─────────────── */}
      <section style={{ background: '#141414', padding: '96px 0' }}>
        <motion.div
          className="container-layout"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={SV}
        >
          {/* Text */}
          <motion.div variants={FV}>
            <div style={{ ...S.eyebrow, color: '#6f6f6e', marginBottom: '16px' }}>Daily Tracker</div>
            <h2 style={{ color: '#ffffff', marginBottom: '24px' }}>
              Everything your doctor needs. In under two minutes a day.
            </h2>
            <p style={{ ...S.bodyLg, color: '#8f8f8e', marginBottom: '40px' }}>
              The hardest part of a doctor's appointment is remembering six months of gradual change under pressure. The tracker solves that — log once a day, export a structured PDF before you visit.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Memory, sleep, agitation, and appetite — logged by tapping, not typing',
                'Blood pressure readings with exact timestamps',
                'One-tap PDF export for your doctor appointment',
                'Stored only on your device. Never sent to a server.',
              ].map(line => (
                <div key={line} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span className="dot-live" style={{ marginTop: '8px', flexShrink: 0 }} />
                  <span style={{ ...S.bodySm, color: '#8f8f8e' }}>{line}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '40px' }}>
              <Link href="/tracker" className="btn" style={{ background: '#ffffff', color: '#141414' }}>
                Open Tracker
              </Link>
            </div>
          </motion.div>

          {/* Static HTML Mockup of the tracker — no screenshot */}
          <motion.div variants={FV}>
            <div style={{
              background: '#edede8',
              borderRadius: '8px',
              padding: '28px',
              fontFamily: 'var(--font-sans)',
            }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#8f8f8e', marginBottom: '4px' }}>Today</div>
                  <div style={{ fontSize: '17px', fontWeight: 500, color: '#292929', letterSpacing: '-0.01em' }}>Daily Log</div>
                </div>
                <div style={{
                  background: '#141414', color: '#fff',
                  borderRadius: '200px', padding: '6px 16px',
                  fontSize: '13px', fontWeight: 500,
                }}>Export PDF</div>
              </div>

              <hr style={{ ...S.rule, marginBottom: '20px' }} />

              {/* Symptom rows */}
              {[
                { label: 'Memory', rating: 3 },
                { label: 'Sleep quality', rating: 4 },
                { label: 'Agitation', rating: 1 },
                { label: 'Appetite', rating: 4 },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '15px', color: '#6f6f6e' }}>{row.label}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[1,2,3,4,5].map(n => (
                      <div key={n} style={{
                        width: '28px', height: '28px',
                        borderRadius: '6px',
                        background: n <= row.rating ? '#292929' : '#dbdbd2',
                        fontSize: '12px', color: n <= row.rating ? '#fff' : '#8f8f8e',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 500,
                      }}>{n}</div>
                    ))}
                  </div>
                </div>
              ))}

              <hr style={{ ...S.rule, margin: '20px 0' }} />

              {/* BP section */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ ...S.caption, color: '#8f8f8e', marginBottom: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Blood Pressure</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {[
                    { l: 'Systolic', v: '128' },
                    { l: 'Diastolic', v: '82' },
                    { l: 'Pulse', v: '74' },
                  ].map(f => (
                    <div key={f.l} style={{ background: '#dbdbd2', borderRadius: '6px', padding: '10px 12px' }}>
                      <div style={{ fontSize: '11px', color: '#8f8f8e', marginBottom: '4px' }}>{f.l}</div>
                      <div style={{ fontSize: '20px', fontWeight: 400, color: '#292929', letterSpacing: '-0.02em' }}>{f.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 8. SCARF QUOTE — full-width editorial ───────────────── */}
      <section style={{ background: '#dbdbd2', borderTop: '1px solid rgba(0,0,0,0.1)', padding: '96px 0' }}>
        <motion.div
          className="container-layout"
          style={{ maxWidth: '800px', textAlign: 'center' }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={FV}
        >
          <div style={{ ...S.eyebrow, marginBottom: '40px' }}>Clinical Endorsement</div>
          <blockquote style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            lineHeight: 1.4,
            letterSpacing: '-0.02em',
            color: '#292929',
            margin: '0 0 32px 0',
          }}>
            Thank you for your efforts in developing this initiative and contributing to improving the lives of people living with dementia and their families.
          </blockquote>
          <div style={{ fontSize: '15px', color: '#6f6f6e', fontWeight: 500 }}>
            Dr. Rohith Khanna Deivasigamani
            <span style={{ color: '#8f8f8e', fontWeight: 400 }}> &nbsp;·&nbsp; SCARF Chennai</span>
          </div>
        </motion.div>
      </section>

      {/* ─── 9. PWA INSTALL GUIDE ─────────────────────────────────── */}
      <section style={{ background: '#edede8', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <motion.div
          className="container-layout"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={SV}
        >
          <div style={{ padding: '96px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <motion.div variants={FV} style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ ...S.eyebrow, marginBottom: '16px' }}>Offline Access</div>
              <h2 style={{ color: '#292929', margin: 0 }}>
                Install the app to your phone.
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '0 64px' }}>
              
              {/* iPhone */}
              <motion.div variants={FV} style={{ paddingRight: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#141414', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icon.svg" width={24} height={24} alt="" />
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 500, color: '#292929', letterSpacing: '-0.02em' }}>iPhone</div>
                </div>
                <div style={{ ...S.bodySm, color: '#6f6f6e', marginBottom: '16px' }}>
                  <strong>1.</strong> Open this website in Safari.
                </div>
                <div style={{ ...S.bodySm, color: '#6f6f6e' }}>
                  <strong>2.</strong> Tap the Share button at the bottom, then select <strong>Add to Home Screen</strong>.
                </div>
              </motion.div>

              {/* Vertical Rule */}
              <div style={S.vertRule} />

              {/* Android */}
              <motion.div variants={FV} style={{ paddingLeft: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#141414', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/icon.svg" width={24} height={24} alt="" />
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 500, color: '#292929', letterSpacing: '-0.02em' }}>Android</div>
                </div>
                <div style={{ ...S.bodySm, color: '#6f6f6e', marginBottom: '16px' }}>
                  <strong>1.</strong> Open this website in Chrome.
                </div>
                <div style={{ ...S.bodySm, color: '#6f6f6e' }}>
                  <strong>2.</strong> Tap the menu (three dots) at the top right, then select <strong>Install app</strong> or Add to Home screen.
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 10. CTA BAND ─────────────────────────────────────────── */}
      <section style={{ background: '#141414', padding: '96px 0' }}>
        <div className="container-layout" style={{ textAlign: 'center' }}>
          <div style={{ ...S.eyebrow, color: '#6f6f6e', marginBottom: '24px' }}>Get started</div>
          <h2 style={{
            color: '#ffffff',
            fontSize: 'clamp(28px, 4vw, 48px)',
            marginBottom: '40px',
            maxWidth: '520px',
            marginInline: 'auto',
          }}>
            Start finding answers today.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/understand" className="btn" style={{ background: '#ffffff', color: '#141414' }}>
              Read the Guides
            </Link>
            <Link href="/tracker" className="btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>
              Open Symptom Log
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
