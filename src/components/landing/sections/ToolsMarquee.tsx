const TOOLS = ['Cursor', 'Claude', 'OpenAI', 'Next.js', 'Supabase', 'Vercel', 'GitHub'];

export default function ToolsMarquee() {
  return (
    <section id="tools" className="py-16 md:py-24 overflow-hidden bg-[#F9F9F9]">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        <span className="text-sm font-bold tracking-widest uppercase text-[#5A6061]/50 px-6 text-center">
          לומדים עם הטכנולוגיות המובילות
        </span>
        <div className="relative w-full overflow-hidden">
          <div className="landing-marquee items-center gap-12 md:gap-24 whitespace-nowrap px-8">
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <span
                key={i}
                className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight text-[#2D3435]/25 hover:text-[#2D3435] transition-colors duration-300 cursor-default select-none"
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
