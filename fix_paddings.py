import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Fix Stats grid borders & padding
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
content = content.replace(
    "variants={FV}",
    "variants={FV}\n                className={`p-8 md:p-14 border-b border-[rgba(0,0,0,0.1)] ${i % 2 === 0 ? 'sm:border-r' : ''} ${i >= 2 ? 'sm:border-b-0' : ''}`}"
)


# Fix India map border & padding
content = content.replace(
    "style={{ padding: '72px 64px 72px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid rgba(0,0,0,0.1)' }}",
    "className=\"py-12 md:py-[72px] md:pr-[64px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)]\""
)

# Fix Article list border
content = content.replace(
    "style={{ padding: '72px 0 72px 64px', display: 'flex', flexDirection: 'column', gap: '32px' }}",
    "className=\"py-12 md:py-[72px] md:pl-[64px] flex flex-col gap-8\""
)
content = content.replace(
    "style={{ padding: '72px 64px 72px 0', borderRight: '1px solid rgba(0,0,0,0.1)' }}",
    "className=\"py-12 md:py-[72px] md:pr-[64px] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)]\""
)


# Fix Tracker Mockup padding
content = content.replace(
    "style={{ padding: '96px 64px 96px 0', borderRight: '1px solid rgba(255,255,255,0.1)' }}",
    "className=\"py-12 md:py-[96px] md:pr-[64px] border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.1)]\""
)

with open('app/page.tsx', 'w') as f:
    f.write(content)

