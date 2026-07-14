import Link from "next/link";

const footerSections = [
  {
    title: "Materials",
    links: ["New arrivals", "Campus bundles", "Professor notes", "Delivery"],
  },
  {
    title: "About",
    links: ["Our story", "Campus partnerships", "Press", "Careers"],
  },
  {
    title: "Support",
    links: ["Help center", "Returns", "Contact", "Seller support"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold">Campus Market</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A campus marketplace for digital course materials, professor resources, and instant access.
          </p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <p className="font-semibold">{section.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-foreground">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
