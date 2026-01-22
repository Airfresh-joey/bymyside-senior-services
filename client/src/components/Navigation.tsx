import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Heart,
  ChevronDown,
  Smartphone,
  Shield,
  Home,
  Users,
  Building2,
  X
} from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Smart Home Technology",
      href: "/services/tech-monitoring",
      icon: Smartphone,
      description: "Medical alerts & monitoring"
    },
    {
      name: "Home Safety Modifications",
      href: "/services/safety-mobility",
      icon: Shield,
      description: "Grab bars, ramps & more"
    },
    {
      name: "Decluttering & Downsizing",
      href: "/services/decluttering",
      icon: Home,
      description: "Compassionate organizing help"
    },
    {
      name: "In-Home Caregiving",
      href: "/services/in-home-care",
      icon: Users,
      description: "Non-medical care & companionship"
    },
    {
      name: "Assisted Living Search",
      href: "/services/assisted-living",
      icon: Building2,
      description: "Free placement assistance"
    }
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (800) 555-1234
              </a>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">Serving Families Nationwide</span>
            </div>
            <div className="flex items-center gap-2 text-teal-400">
              <Heart className="h-4 w-4" />
              <span>Free Consultations Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="By My Side" className="h-14 w-14" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-[#2d4a6f] leading-tight">
                By My Side
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-wide">
                SENIOR SERVICES
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      location.startsWith("/services")
                        ? "text-teal-700 bg-teal-50"
                        : "text-slate-700 hover:text-teal-700 hover:bg-teal-50"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      location === link.href
                        ? "text-teal-700 bg-teal-50"
                        : "text-slate-700 hover:text-teal-700 hover:bg-teal-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-80">
                      <div className="mb-3 pb-3 border-b border-slate-100">
                        <Link
                          href="/services"
                          className="text-sm font-semibold text-slate-900 hover:text-teal-700"
                        >
                          View All Services →
                        </Link>
                      </div>
                      <div className="space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-teal-50 transition-colors group"
                          >
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                              <service.icon className="h-5 w-5 text-teal-600" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 group-hover:text-teal-700">
                                {service.name}
                              </div>
                              <div className="text-sm text-slate-500">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 text-slate-700 hover:text-teal-700 font-medium"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden xl:inline">(800) 555-1234</span>
            </a>
            <Button
              asChild
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 shadow-lg shadow-teal-600/25"
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center gap-3">
                    <img src="/logo.svg" alt="By My Side" className="h-10 w-10" />
                    <div>
                      <div className="font-bold text-[#2d4a6f]">By My Side</div>
                      <div className="text-xs text-slate-500">SENIOR SERVICES</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6">
                  <div className="space-y-2">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-900 hover:bg-teal-50"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-900 hover:bg-teal-50"
                    >
                      About Us
                    </Link>

                    {/* Services Section */}
                    <div className="pt-4 pb-2">
                      <div className="px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Our Services
                      </div>
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-teal-50"
                      >
                        <service.icon className="h-5 w-5 text-teal-600" />
                        <span className="font-medium text-slate-900">{service.name}</span>
                      </Link>
                    ))}

                    <div className="pt-4">
                      <Link
                        href="/resources"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-900 hover:bg-teal-50"
                      >
                        Resources
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-900 hover:bg-teal-50"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t bg-slate-50">
                  <Button
                    asChild
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6 text-lg"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Free Consultation
                    </Link>
                  </Button>
                  <a
                    href="tel:+18005551234"
                    className="flex items-center justify-center gap-2 mt-4 text-slate-700 font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    (800) 555-1234
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
