import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#systems", label: "Systems" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
]

export function Navbar({ brandVisible, navTransparent, headerVisible, setMobileNavOpen, mobileNavOpen }: {
  brandVisible: boolean,
  navTransparent: boolean,
  headerVisible: boolean,
  setMobileNavOpen: (open: boolean) => void,
  mobileNavOpen: boolean
}) {
  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-500
        ${navTransparent
          ? "bg-transparent border-transparent"
          : "border-cyan-300/10 bg-[#050912]/85 backdrop-blur supports-[backdrop-filter]:bg-[#050912]/70"}
        transition-opacity duration-1000`}
      style={{
        textShadow: '0 1px 8px rgba(0,0,0,0.18), 0 2px 16px rgba(0,0,0,0.16)'
      }}
    >
      <div className="flex h-16 w-full items-center px-6 pl-7 text-white md:pl-11 md:pr-8">
        <Link
          className={`mr-6 flex shrink-0 items-center space-x-2 transition duration-700 ${
            brandVisible && headerVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
          href="#hero"
          aria-hidden={!brandVisible}
          tabIndex={brandVisible ? 0 : -1}
        >
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-white">
            John Carroll
          </span>
        </Link>
        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav className="flex items-center space-x-6 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition duration-500 hover:text-cyan-200 ${
                  headerVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/John_Carroll_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`transition duration-500 ${
              headerVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 80}ms` }}
          >
            <Button variant="outline" className="border-cyan-300/40 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </Link>
        </div>
        <button
          className={`ml-auto flex items-center justify-center rounded p-2 transition duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 md:hidden ${
            headerVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
          }`}
          aria-label="Open navigation menu"
          onClick={() => setMobileNavOpen(true)}
        >
          <Menu className="h-6 w-6 text-cyan-200" />
        </button>
      </div>
      {mobileNavOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-7 overflow-y-auto bg-[#050912]/98 text-2xl font-semibold text-white">
          <div className="absolute top-4 right-4">
            <button
              className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="Close navigation menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <Link
            href="#hero"
            onClick={() => setMobileNavOpen(false)}
            className="mb-2 mt-2 font-mono text-3xl font-semibold uppercase tracking-[0.18em] text-cyan-100"
          >
            John Carroll
          </Link>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)} className="hover:text-cyan-200">
              {item.label}
            </Link>
          ))}
          <Link
            href="/John_Carroll_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs mt-8"
            download
          >
            <Button variant="outline" className="w-full border-cyan-300/40 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
