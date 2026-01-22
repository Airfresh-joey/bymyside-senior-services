import { Link } from "wouter";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Clock,
  Shield,
  Award,
  Users
} from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Smart Home Technology", href: "/services/tech-monitoring" },
    { name: "Home Safety Modifications", href: "/services/safety-mobility" },
    { name: "Decluttering & Downsizing", href: "/services/decluttering" },
    { name: "In-Home Caregiving", href: "/services/in-home-care" },
    { name: "Assisted Living Search", href: "/services/assisted-living" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Testimonials", href: "/about#testimonials" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const resources = [
    { name: "Senior Care Guide", href: "/resources/care-guide" },
    { name: "Safety Checklist", href: "/resources/safety-checklist" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Caregiver Resources", href: "/resources/caregivers" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Trust Bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-teal-400 mb-3" />
              <div className="font-semibold">Licensed & Insured</div>
              <div className="text-sm text-slate-400">Full protection</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-teal-400 mb-3" />
              <div className="font-semibold">15+ Years</div>
              <div className="text-sm text-slate-400">Trusted experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-teal-400 mb-3" />
              <div className="font-semibold">5,000+ Families</div>
              <div className="text-sm text-slate-400">Successfully served</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-teal-400 mb-3" />
              <div className="font-semibold">24/7 Support</div>
              <div className="text-sm text-slate-400">Always here for you</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="By My Side" className="h-14 w-14 brightness-0 invert" />
              <div>
                <div className="text-xl font-bold leading-tight">By My Side</div>
                <div className="text-xs text-slate-400 font-medium tracking-wide">
                  SENIOR SERVICES
                </div>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Helping seniors age in place with dignity and independence. From home safety
              modifications to compassionate caregiving, we're by your side every step of the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(800) 555-1234</span>
              </a>
              <a
                href="mailto:care@bymysideseniorservices.com"
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>care@bymysideseniorservices.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5" />
                <span>Serving Families Nationwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} By My Side Senior Services. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-slate-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
