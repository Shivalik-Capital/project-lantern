import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# 1. Stats Grid
content = content.replace(
    "<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>",
    "<div className=\"grid grid-cols-1 sm:grid-cols-2\">"
)
content = content.replace(
    "borderRight:  (i % 2 === 0) ? '1px solid rgba(0,0,0,0.1)' : 'none',",
    ""
)
content = content.replace(
    "borderBottom: (i < 2)        ? '1px solid rgba(0,0,0,0.1)' : 'none',",
    ""
)
content = content.replace(
    "padding: '56px 48px',",
    ""
)
# Precise replacement for Stats variants
content = content.replace(
    "<motion.div\n                key={s.value}\n                variants={FV}\n                style={{",
    "<motion.div\n                key={s.value}\n                variants={FV}\n                className={`p-8 md:p-14 border-b border-[rgba(0,0,0,0.1)] ${i % 2 === 0 ? 'sm:border-r' : ''} ${i >= 2 ? 'sm:border-b-0' : ''}`}\n                style={{"
)


# 2. Info Gap
content = content.replace(
    '<div style={{ display: \'grid\', gridTemplateColumns: \'1fr 1px 1fr\', gap: \'0 64px\', alignItems: \'start\' }}>',
    '<div className="flex flex-col md:grid md:grid-cols-[1fr_1px_1fr] gap-12 md:gap-16 items-start">'
)
content = content.replace(
    '<div style={S.vertRule} />',
    '<div className="hidden md:block" style={S.vertRule} /><hr className="md:hidden" style={{ border: \'none\', borderTop: \'1px solid rgba(255,255,255,0.15)\', margin: \'0\' }} />'
)

# 3. What We Built
content = content.replace(
    "<motion.div variants={FV} key={idx} style={{ display: 'grid', gridTemplateColumns: '56px 1fr 1fr', gap: '24px 48px', alignItems: 'flex-start' }}>",
    "<motion.div variants={FV} key={idx} className=\"flex flex-col md:grid md:grid-cols-[56px_1fr_1fr] gap-6 md:gap-12 items-start\">"
)

# 4. India Map
content = content.replace(
    "<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 64px' }}>",
    "<div className=\"flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16\">"
)
content = content.replace(
    "style={{ padding: '72px 64px 72px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(0,0,0,0.1)' }}",
    "className=\"py-12 md:py-[72px] md:pr-[64px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)]\""
)

# 5. Article Preview
content = content.replace(
    "<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 64px' }}>",
    "<div className=\"flex flex-col md:grid md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16\">"
)
content = content.replace(
    "style={{ padding: '72px 0 72px 64px', display: 'flex', flexDirection: 'column', gap: '32px' }}",
    "className=\"py-12 md:py-[72px] md:pl-[64px] flex flex-col gap-8\""
)
content = content.replace(
    "style={{ padding: '72px 64px 72px 0', borderRight: '1px solid rgba(0,0,0,0.1)' }}",
    "className=\"py-12 md:py-[72px] md:pr-[64px] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)]\""
)

# 6. Tracker Mockup
content = content.replace(
    "<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>",
    "<div className=\"flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center\">"
)
content = content.replace(
    "style={{ padding: '96px 64px 96px 0', borderRight: '1px solid rgba(255,255,255,0.1)' }}",
    "className=\"py-12 md:py-[96px] md:pr-[64px] border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]\""
)

# 7. Tracker Mockup BP
content = content.replace(
    "<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>",
    "<div className=\"grid grid-cols-1 sm:grid-cols-3 gap-2\">"
)

# 8. PWA Install
content = content.replace(
    "<div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '0 64px' }}>",
    "<div className=\"flex flex-col md:grid md:grid-cols-[1fr_1px_1fr] gap-12 md:gap-16\">"
)
content = content.replace(
    "<div className=\"hidden md:block\" style={S.vertRule} /><hr className=\"md:hidden\" style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: '0' }} />\n\n              {/* Android */}",
    "<div className=\"hidden md:block\" style={S.vertRule} /><hr className=\"md:hidden\" style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: '0' }} />\n\n              {/* Android */}"
)


with open('app/page.tsx', 'w') as f:
    f.write(content)

