export function BrandLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {['Nord', 'Aster', 'Forma', 'Kinetik', 'Monarch', 'Pulse'].map((brand) => (
        <div
          key={brand}
          className="rounded-[24px] border border-white/10 bg-white/80 px-4 py-5 text-center text-sm font-semibold dark:bg-zinc-950/70"
        >
          {brand}
        </div>
      ))}
    </div>
  );
}
