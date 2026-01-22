import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Heart,
  CheckCircle,
  MessageCircle,
  Calendar,
  Shield,
  Users
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with a care coordinator",
      value: "(800) 555-1234",
      href: "tel:+18005551234",
      color: "bg-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We respond within 24 hours",
      value: "care@bymysideseniorservices.com",
      href: "mailto:care@bymysideseniorservices.com",
      color: "bg-blue-500"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a time that works for you",
      value: "Choose a Time",
      href: "#schedule",
      color: "bg-teal-600"
    }
  ];

  const services = [
    "Smart Home Technology & Monitoring",
    "Home Safety Modifications",
    "Decluttering & Downsizing",
    "In-Home Caregiving",
    "Assisted Living Search",
    "Not sure / Need guidance"
  ];

  return (
    <>
      <SEO
        title="Contact Us | Free Senior Care Consultation | By My Side Senior Services"
        description="Get a free consultation for senior care services. Call (800) 555-1234 or fill out our form. We help with home safety, caregiving, and assisted living placement."
        canonical="https://bymysideseniorservices.com/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTItNCAwLTQgMi0yIDQtMiA0IDIgMiA0IDIgNC0yIDQtMnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-600/20 rounded-full px-4 py-2 mb-6">
            <Heart className="h-5 w-5 text-teal-400" />
            <span className="text-teal-400 font-medium">We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Talk About Your <span className="text-teal-400">Family's Needs</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Every journey starts with a conversation. Reach out today for a free, no-obligation
            consultation with one of our senior care specialists.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group"
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group-hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <method.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{method.title}</h3>
                    <p className="text-slate-500 text-sm mb-3">{method.description}</p>
                    <p className="text-teal-600 font-semibold group-hover:text-teal-700">
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Request a Free Consultation
              </h2>
              <p className="text-slate-600 mb-8">
                Tell us about your situation and we'll get back to you within 24 hours.
              </p>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        What services are you interested in? *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Relationship to Senior
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                        <option value="">Select relationship</option>
                        <option value="self">I am the senior</option>
                        <option value="child">Son/Daughter</option>
                        <option value="spouse">Spouse/Partner</option>
                        <option value="sibling">Sibling</option>
                        <option value="grandchild">Grandchild</option>
                        <option value="friend">Friend</option>
                        <option value="professional">Healthcare Professional</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Tell us about your situation
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                        placeholder="Please share any details that would help us understand your needs..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Best time to call
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {["Morning", "Afternoon", "Evening", "Anytime"].map((time) => (
                          <label key={time} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="callTime"
                              value={time}
                              className="w-4 h-4 text-amber-500 focus:ring-teal-500"
                            />
                            <span className="text-slate-700">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-slate-900 font-bold py-6 text-lg"
                    >
                      Request Free Consultation
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                      By submitting, you agree to receive calls and texts from By My Side Senior Services.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Column */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                What to Expect
              </h2>
              <p className="text-slate-600 mb-8">
                When you reach out, here's how we'll help you.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: MessageCircle,
                    title: "A Real Conversation",
                    description: "Not a sales pitch. We listen to understand your unique situation and concerns."
                  },
                  {
                    icon: Users,
                    title: "Expert Guidance",
                    description: "Our care coordinators have years of experience helping families navigate aging."
                  },
                  {
                    icon: Shield,
                    title: "Honest Recommendations",
                    description: "We'll tell you what we think you need—even if it's not our services."
                  },
                  {
                    icon: Clock,
                    title: "No Rush, No Pressure",
                    description: "Take your time. We're here when you're ready to move forward."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours Card */}
              <Card className="bg-slate-900 text-white border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-6 w-6 text-teal-400" />
                    <h3 className="text-xl font-bold">Hours of Operation</h3>
                  </div>
                  <div className="space-y-3 text-white/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-white">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-white">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="pt-4 mt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 text-teal-400">
                        <Phone className="h-5 w-5" />
                        <span className="font-semibold">24/7 Emergency Support Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="mt-6 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-teal-600" />
                    <h3 className="text-xl font-bold text-slate-900">Service Area</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    We proudly serve families across the United States with our comprehensive
                    senior care services.
                  </p>
                  <p className="text-teal-600 font-semibold">
                    Serving All 50 States
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Prefer to Talk Right Now?
          </h2>
          <p className="text-xl text-slate-800/80 mb-8">
            Our care coordinators are standing by to answer your questions.
          </p>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xl px-10 py-5 rounded-xl transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" />
            (800) 555-1234
          </a>
        </div>
      </section>
    </>
  );
}
