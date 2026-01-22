import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import {
  Heart,
  Users,
  Award,
  Clock,
  CheckCircle,
  Phone,
  Star,
  Shield,
  Target,
  Lightbulb
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "We treat every senior and family member with the kindness and respect they deserve. Your loved one is never just a client—they're family."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We're fully licensed, insured, and background-checked. We do what we say we'll do, and we're always honest about what's best for your situation."
    },
    {
      icon: Target,
      title: "Personalized Care",
      description: "No cookie-cutter solutions. We take time to understand your unique needs and create custom plans that actually work for your family."
    },
    {
      icon: Lightbulb,
      title: "Expert Guidance",
      description: "With 15+ years of experience, we've helped thousands of families navigate senior care. We know what works and what doesn't."
    }
  ];

  const team = [
    {
      name: "Margaret Chen",
      role: "Founder & CEO",
      bio: "After caring for her own parents, Margaret founded By My Side to help other families navigate the challenges of senior care with less stress and more support.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
    },
    {
      name: "David Thompson",
      role: "Director of Care Services",
      bio: "A registered nurse with 20 years of geriatric care experience, David ensures every caregiver meets our high standards of compassion and competence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Sarah Martinez",
      role: "Senior Placement Specialist",
      bio: "Sarah has personally toured over 500 assisted living communities. She knows exactly what to look for and how to find the perfect fit for each family.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop"
    }
  ];

  const stats = [
    { value: "5,000+", label: "Families Served" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "Team Members" }
  ];

  return (
    <>
      <SEO
        title="About Us | By My Side Senior Services"
        description="Learn about By My Side Senior Services - our mission, values, and the compassionate team dedicated to helping seniors age with dignity."
        canonical="https://bymysideseniorservices.com/about"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We're Here Because We've Been There
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              By My Side was founded by a daughter who struggled to find quality care for her aging parents.
              We know how overwhelming it can be—and we're here to make it easier for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
                From Personal Experience to Professional Mission
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  In 2009, our founder Margaret Chen faced every family's nightmare: her father had a stroke,
                  and suddenly she was scrambling to find safe housing, reliable caregivers, and home modifications—all
                  while working full-time and raising her own children.
                </p>
                <p>
                  She spent countless hours researching options, visiting facilities, and coordinating between
                  multiple service providers. There had to be a better way.
                </p>
                <p>
                  That's why she created By My Side—a single trusted resource where families can find everything
                  they need to help their loved ones age safely and comfortably, whether at home or in a community setting.
                </p>
                <p className="font-medium text-slate-900">
                  Today, we've helped over 5,000 families navigate senior care with less stress and more confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516733968668-dbdce39c5f7b?w=600&h=500&fit=crop"
                alt="Family caring for senior"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These aren't just words on a wall—they guide every decision we make and every family we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
              Meet the People Behind the Care
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our leadership team brings decades of experience in healthcare, social work, and senior services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
              What Families Say About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-600 italic mb-6">
                  "By My Side took the burden off our shoulders during the most difficult time of our lives.
                  They found the perfect assisted living community for Dad and handled everything with such care."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Robert & Linda Johnson</p>
                    <p className="text-sm text-slate-500">Family from Phoenix, AZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-600 italic mb-6">
                  "The home safety modifications they installed gave my mother the confidence to stay in her home.
                  The grab bars and walk-in shower have been life-changing."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-slate-900">Michelle Park</p>
                    <p className="text-sm text-slate-500">Daughter from Seattle, WA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Talk About Your Family's Needs
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Every family's situation is unique. Schedule a free consultation and let's discuss how we can help your loved one age with dignity and independence.
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
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7"
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
