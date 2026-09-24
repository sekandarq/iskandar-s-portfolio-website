"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, FileText, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState("#home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const section = document.querySelector(link.href)
        return section instanceof HTMLElement ? section : null
      })
      .filter((section): section is HTMLElement => section !== null)

    const updateNavState = () => {
      const scrollPosition = window.scrollY + 140
      let currentSection = "#home"

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = `#${section.id}`
        }
      }

      setActiveSection(currentSection)
      setIsScrolled(window.scrollY > 24)
    }

    updateNavState()
    window.addEventListener("scroll", updateNavState, { passive: true })
    window.addEventListener("resize", updateNavState)

    return () => {
      window.removeEventListener("scroll", updateNavState)
      window.removeEventListener("resize", updateNavState)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setActiveSection(href)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-5",
        isScrolled &&
          "bg-[linear-gradient(180deg,rgba(7,17,11,0.92),rgba(7,17,11,0.72))] backdrop-blur-xl",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[26px] border border-transparent px-4 py-3 sm:px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-6",
          isScrolled ? "lg:py-3" : "lg:py-4",
          isScrolled &&
            "border-white/10 bg-[linear-gradient(180deg,rgba(8,16,11,0.96),rgba(7,17,11,0.88))] shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl",
        )}
      >
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3"
            onClick={() => handleNavClick("#home")}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_0_1px_rgba(0,255,0,0.05)]">
              <Image
                src="/profile-picture.jpg"
                alt="Aliff Iskandar profile picture"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </span>

            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-[0.02em] text-foreground sm:text-base">
                Aliff Iskandar
              </span>
              <span className="hidden items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground sm:inline-flex">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,255,0,0.8)]" />
                Available for Hire
              </span>
            </span>
          </a>

          <nav className="hidden items-center justify-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all duration-200",
                    activeSection === link.href
                      ? "bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(0,255,0,0.24)]"
                      : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
                  )}
                  aria-current={activeSection === link.href ? "page" : undefined}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_12px_24px_rgba(0,255,0,0.2)] sm:inline-flex"
            >
              <FileText className="h-4 w-4" />
              Download & View Resume
            </a>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                className="h-11 w-11 rounded-full border border-white/10 bg-white/[0.04] text-foreground hover:bg-white/[0.08] hover:text-primary lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="top"
                className="border-b border-primary/20 bg-[linear-gradient(180deg,rgba(7,17,11,0.98),rgba(7,17,11,0.94))] px-4 pb-6 pt-4 text-foreground shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
              >
                <SheetHeader className="px-0 pb-4">
                  <SheetTitle className="flex items-center gap-3 text-left">
                    <span className="relative flex h-10 w-10 overflow-hidden rounded-2xl border border-primary/20 bg-primary/10">
                      <Image
                        src="/profile-picture.jpg"
                        alt="Aliff Iskandar profile picture"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        Aliff Iskandar
                      </span>
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                        Full Stack and AI Developer
                      </span>
                    </span>
                  </SheetTitle>
                  <SheetDescription className="text-left text-sm text-muted-foreground">
                    Explore the sections or open my resume.
                  </SheetDescription>
                </SheetHeader>

                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm transition-all duration-200",
                        activeSection === link.href
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-white/10 bg-white/[0.03] text-foreground hover:border-primary/20 hover:bg-white/[0.05]",
                      )}
                      aria-current={activeSection === link.href ? "page" : undefined}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" />
                    View Resume
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
      </div>
    </header>
  )
}
