'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import LogoMark from '@/components/Logo';

const services = [
  { name: 'PVC Visgraat', href: '/diensten/pvc-visgraat' },
  { name: 'Gietvloeren', href: '/diensten/gietvloeren' },
  { name: 'Tapijttegels', href: '/diensten/tapijttegels' },
  { name: 'Laminaat', href: '/diensten/laminaat' },
  { name: 'Trap Renovatie', href: '/diensten/trap-renovatie' },
  { name: 'Behang & Wandafwerking', href: '/diensten/behang' },
  { name: 'Volledig Interieur', href: '/diensten/volledig-interieur' },
  { name: 'Commerciële Projecten', href: '/diensten/commerciele-projecten' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '/diensten', hasDropdown: true },
  { name: 'Projecten', href: '/projecten' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/85 shadow-lg shadow-black/20 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center gap-3"
              aria-label="MOVT Projects — Home"
            >
              <LogoMark className="h-10 w-10 text-cream" />
              <span className="flex flex-col items-start">
                <span className="font-heading text-xl font-bold uppercase tracking-[0.25em] text-cream">
                  MOVT
                </span>
                <span className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
                  Projects
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm font-medium text-cream/80 transition-colors duration-300 hover:text-gold"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.hasDropdown && (
                    <div
                      className={`absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-300 ${
                        dropdownOpen
                          ? 'pointer-events-auto translate-y-0 opacity-100'
                          : 'pointer-events-none -translate-y-2 opacity-0'
                      }`}
                    >
                      <div className="min-w-[220px] rounded-lg border border-white/10 bg-charcoal-light p-2 shadow-xl shadow-black/30">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-md px-4 py-2.5 text-sm text-cream/80 transition-colors duration-200 hover:bg-white/5 hover:text-gold"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Offerte Aanvragen
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label="Menu"
            >
              <span
                className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-300 ${
                  mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-300 ${
                  mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6 px-8">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full text-center">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex w-full items-center justify-center gap-2 text-2xl font-medium text-cream transition-colors duration-300 hover:text-gold"
                  >
                    {link.name}
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ${
                        mobileDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDropdownOpen ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base text-cream/60 transition-colors duration-200 hover:text-gold"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-cream transition-colors duration-300 hover:text-gold"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-md bg-gold px-8 py-3 text-base font-semibold text-charcoal transition-all duration-300 hover:bg-gold-light"
          >
            Offerte Aanvragen
          </Link>
        </nav>
      </div>
    </>
  );
}
