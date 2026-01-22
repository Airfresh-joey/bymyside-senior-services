import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import {
  Smartphone,
  Shield,
  Home,
  Users,
  Building2,
  Phone,
  ArrowRight,
  CheckCircle,
  Heart
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Smart Home Technology",
      description: "Medical alert systems, fall detection, and monitoring technology that keeps your loved ones safe and connected 24/7.",
      href: "/services/tech-monitoring",
      features: ["Medical alert systems", "Fall detection", "Video monitoring", "Motion sensors"],
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Home Safety Modifications",
      description: "Professional installation of grab bars, walk-in showers, stairlifts, and accessibility features to prevent falls.",
      href: "/services/safety-mobility",
      features: ["Grab bars & handrails", "Walk-in showers", "Stairlifts", "Ramp installation"],
      color: "bg-emerald-500"
    },
    {
      icon: Home,
      title: "Decluttering & Downsizing",
      description: "Compassionate help sorting, organizing, and transitioning to a smaller living space with dignity.",
      href: "/services/decluttering",
      features: ["Sorting & organizing", "Estate sales", "Moving coordination", "Donation pickup"],
      color: "bg-amber-500"
    },
    {
      icon: Users,
      title: "In-Home Caregiving",
      description: "Trained, caring professionals providing companionship, meals, and personal care assistance.",
      href: "/services/in-home-care",
      features: ["Personal care", "Companionship", "Meal preparation", "Light housekeeping"],
      color: "bg-rose-500"
    },
    {
      icon: Building2,
      title: "Assisted Living Search",
      description: "Free expert guidance to find the perfect senior living community for your loved one's needs and budget.",
      href: "/services/assisted-living",
      features: ["Community tours", "Cost comparison", "Placement assistance", "Transition support"],
      color: "bg-violet-500"
    }
  ];

  return (
    <>
      <SEO
        title="Our Services | By My Side Senior Services"
        description="Comprehensive senior care services including home safety modifications, in-home caregiving, smart home technology, decluttering help, and assisted living placement."
        canonical="https://bymysideseniorservices.com/services"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Services That Help Seniors Thrive
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether your loved one wants to stay at home safely or transition to assisted living,
              we have the services and expertise to make it happen with compassion and care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                    <div className={`bg-slate-100 min-h-[300px] flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <service.icon className="h-32 w-32 text-slate-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Every family's situation is unique. Schedule a free consultation and we'll help you figure out
            which services would benefit your loved one the most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-teal-600 font-bold text-lg px-10 py-7"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-2 border-white font-semibold text-lg px-10 py-7"
            >
              <a href="tel:+18005551234">
                <Phone className="mr-2 h-5 w-5" />
                (800) 555-1234
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
