import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import {
  Heart,
  Phone,
  Shield,
  Smartphone,
  Home,
  Users,
  Building2,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Award,
  Sparkles,
  Play,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Smartphone,
      title: "Smart Home Technology",
      description: "Medical alert systems, fall detection, and monitoring technology that keeps your loved ones safe and connected.",
      href: "/services/tech-monitoring",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Home Safety Modifications",
      description: "Professional installation of grab bars, walk-in showers, stairlifts, and accessibility features.",
      href: "/services/safety-mobility",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Home,
      title: "Decluttering & Downsizing",
      description: "Compassionate help sorting, organizing, and transitioning to a smaller living space.",
      href: "/services/decluttering",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: Users,
      title: "In-Home Caregiving",
      description: "Trained, caring professionals providing companionship, meals, and personal care assistance.",
      href: "/services/in-home-care",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50"
    },
    {
      icon: Building2,
      title: "Assisted Living Search",
      description: "Free expert guidance to find the perfect senior living community for your loved one.",
      href: "/services/assisted-living",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50"
    }
  ];

  const stats = [
    { value: "5,000+", label: "Families Helped" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      quote: "By My Side gave us our lives back. Mom is thriving with her new caregiver, and the home modifications make such a difference. I finally have peace of mind.",
      author: "Jennifer Martinez",
      role: "Daughter of client",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      quote: "The team helped Dad transition from his home of 40 years to assisted living. They handled everything with such compassion. I can't thank them enough.",
      author: "Michael Thompson",
      role: "Son of client",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      quote: "After Mom's fall, we were scared to leave her alone. The medical alert system they installed detected another fall and got help immediately. It saved her life.",
      author: "Susan Chen",
      role: "Daughter of client",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "Share your concerns and goals. We listen carefully to understand your unique situation."
    },
    {
      step: "2",
      title: "Personalized Assessment",
      description: "Our experts evaluate needs in-home and recommend the right combination of services."
    },
    {
      step: "3",
      title: "Custom Care Plan",
      description: "We create a tailored plan that addresses immediate needs and anticipates future requirements."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "As needs change, we adapt. Our team is always available to adjust and support your family."
    }
  ];

  return (
    <>
      <SEO
        title="By My Side Senior Services | Compassionate Care for Aging in Place"
        description="Comprehensive senior care services: home safety modifications, in-home caregiving, smart home technology, decluttering help, and assisted living placement. Serving families nationwide with compassion."
        canonical="https://bymysideseniorservices.com"
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-36 pb-16 overflow-hidden">
        {/* Background - warm, visible image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1447005497901-b3e9ee359928?w=1920&q=80')"
            }}
          />
          {/* Lighter gradient overlay so image is visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-600 rounded-full px-5 py-2.5 mb-8">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Trusted by 5,000+ Families</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
                Helping Your Loved Ones
                <br />
                <span className="text-teal-400">Age with Dignity</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-xl">
                From home safety modifications to compassionate caregiving, we provide everything
                your family needs to navigate aging—together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-7 shadow-xl"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Free Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-7 bg-white/10 backdrop-blur-sm"
                >
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="hidden lg:block">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Get Your Free Care Assessment
                    </h3>
                    <p className="text-slate-600">
                      Tell us about your situation and we'll recommend the right services.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                    />
                    <select className="w-full px-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-600 text-lg">
                      <option value="">What do you need help with?</option>
                      <option value="safety">Home Safety Modifications</option>
                      <option value="caregiving">In-Home Caregiving</option>
                      <option value="technology">Smart Home Technology</option>
                      <option value="downsizing">Decluttering & Downsizing</option>
                      <option value="placement">Assisted Living Search</option>
                      <option value="other">Not Sure / Multiple Services</option>
                    </select>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 text-lg">
                      Get Free Assessment
                    </Button>
                  </div>
                  <p className="text-center text-sm text-slate-500 mt-4">
                    No obligation. We'll call within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-900/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Everything Your Family Needs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you need help making a home safer, finding quality care, or navigating senior
              living options—we're by your side every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${service.bgColor}`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-teal-600 font-semibold group-hover:text-teal-700"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Why Families Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
                We Treat Your Family Like Our Own
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Caring for an aging loved one is one of life's most important responsibilities.
                We approach every family with the compassion, respect, and dedication we'd want
                for our own parents.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Comprehensive Care Coordination",
                    description: "We connect all the pieces—home modifications, technology, caregiving, and transitions—so you don't have to manage multiple providers."
                  },
                  {
                    title: "Licensed & Vetted Professionals",
                    description: "Every team member undergoes rigorous background checks and is trained in senior care best practices."
                  },
                  {
                    title: "Personalized, Not Cookie-Cutter",
                    description: "We create custom plans based on your loved one's unique needs, preferences, and goals."
                  },
                  {
                    title: "24/7 Family Support",
                    description: "Questions don't follow business hours. Our team is always available for emergencies and peace of mind."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Caregiver helping senior"
                className="rounded-3xl shadow-2xl"
              />
              <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-0 max-w-xs">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-teal-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic text-sm mb-3">
                    "They gave us our lives back. We finally have peace of mind."
                  </p>
                  <p className="font-semibold text-slate-900 text-sm">— The Martinez Family</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Getting Started Is Easy
            </h2>
            <p className="text-xl text-slate-900/70 max-w-2xl mx-auto">
              We've simplified the process so you can focus on what matters most—your loved one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-transparent -translate-x-8" />
                )}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center text-3xl font-bold text-slate-900 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-900/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Hear From Families We've Helped
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-teal-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/logo.svg" alt="By My Side" className="h-16 w-16 mx-auto mb-8 brightness-0 invert opacity-80" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-900/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Every family's journey is unique. Let's talk about how we can help your loved one
            live safely, comfortably, and with dignity. Your free consultation is just a call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-teal-600 font-bold text-lg px-10 py-7 shadow-xl"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-slate-900 hover:bg-white/10 font-semibold text-lg px-10 py-7"
            >
              <a href="tel:+18005551234">
                <Phone className="mr-2 h-5 w-5" />
                (800) 555-1234
              </a>
            </Button>
          </div>
          <p className="mt-8 text-slate-900/70">
            No obligation. No pressure. Just honest advice from people who care.
          </p>
        </div>
      </section>
    </>
  );
}
