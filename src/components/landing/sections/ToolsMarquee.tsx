const TOOLS = ['Cursor', 'Claude', 'OpenAI', 'Next.js', 'Supabase', 'Vercel', 'GitHub'];

export default function ToolsMarquee() {
  return (
    <section id="tools" className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[#F5F5F7]">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        <span className="text-sm font-bold tracking-widest uppercase text-[#7E7F90]/50 px-6 text-center">
          לומדים עם הטכנולוגיות המובילות
        </span>
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10" />

          <div className="landing-marquee items-center gap-12 md:gap-24 whitespace-nowrap px-8">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <span
                key={i}
                className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight text-[#303150]/25 hover:text-[#303150] transition-colors duration-300 cursor-default select-none"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
