import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import {
  BookOpen,
  FileText,
  CheckSquare,
  Phone,
  Heart,
  Download,
  ExternalLink,
  HelpCircle,
  Users,
  Home,
  Shield,
  AlertCircle
} from "lucide-react";

export default function Resources() {
  const guides = [
    {
      icon: BookOpen,
      title: "Complete Guide to Senior Care Options",
      description: "Understanding the differences between in-home care, assisted living, memory care, and nursing homes. Learn which option is right for your loved one.",
      type: "Guide",
      readTime: "15 min read"
    },
    {
      icon: Shield,
      title: "Home Safety Checklist for Seniors",
      description: "A room-by-room checklist to identify fall hazards and safety concerns. Print it out and walk through your loved one's home.",
      type: "Checklist",
      readTime: "5 min read"
    },
    {
      icon: HelpCircle,
      title: "Questions to Ask When Touring Assisted Living",
      description: "Don't forget to ask these 25 essential questions when visiting senior living communities. Includes red flags to watch for.",
      type: "Guide",
      readTime: "10 min read"
    },
    {
      icon: Users,
      title: "Caregiver Self-Care Guide",
      description: "Caring for a loved one is rewarding but exhausting. Learn how to take care of yourself while caring for others.",
      type: "Guide",
      readTime: "8 min read"
    },
    {
      icon: FileText,
      title: "Important Documents Checklist",
      description: "Essential legal and medical documents every family should have organized. Includes healthcare proxy, power of attorney, and more.",
      type: "Checklist",
      readTime: "6 min read"
    },
    {
      icon: Home,
      title: "Downsizing & Moving Tips",
      description: "How to help your loved one downsize with dignity. Practical tips for sorting, donating, and making the transition easier.",
      type: "Guide",
      readTime: "12 min read"
    }
  ];

  const faqs = [
    {
      question: "How do I know if my parent needs help?",
      answer: "Warning signs include: forgetting to take medications, unexplained weight loss, difficulty with daily tasks like bathing or dressing, increased falls or balance issues, unpaid bills or financial confusion, and social withdrawal. If you notice several of these signs, it's time to have a conversation about getting some help."
    },
    {
      question: "What's the difference between assisted living and a nursing home?",
      answer: "Assisted living provides help with daily activities (bathing, dressing, meals) while allowing residents to maintain independence. Nursing homes provide 24/7 skilled medical care for those with serious health conditions. Many people start in assisted living and transition to nursing care only if their health declines significantly."
    },
    {
      question: "How much does in-home care cost?",
      answer: "In-home care typically costs $25-35 per hour depending on your location and the level of care needed. Many families start with just a few hours per week for companionship and light help, then increase as needed. We can help you understand your options and find care that fits your budget."
    },
    {
      question: "Does Medicare pay for assisted living?",
      answer: "Medicare does not cover assisted living costs. However, Medicaid may help in some states, and long-term care insurance often covers assisted living. Veterans may qualify for Aid & Attendance benefits. We can help you understand your coverage options during your free consultation."
    },
    {
      question: "How do I start the conversation about getting help?",
      answer: "Start by expressing your concerns from a place of love, not criticism. Use 'I' statements like 'I worry about you being alone' rather than 'You can't take care of yourself.' Focus on their goals—most seniors want to stay independent, and getting help with some tasks actually helps them do that longer."
    },
    {
      question: "What if my parent refuses help?",
      answer: "This is very common. Try to understand their fears (losing independence, being a burden, cost concerns). Start small—maybe just a weekly visitor for companionship. Sometimes having a doctor recommend help carries more weight. We've helped many families navigate these difficult conversations."
    }
  ];

  const externalResources = [
    {
      name: "Eldercare Locator",
      description: "Free national service connecting older adults and caregivers with local services",
      url: "https://eldercare.acl.gov"
    },
    {
      name: "AARP Caregiving Resources",
      description: "Comprehensive caregiving information and support",
      url: "https://www.aarp.org/caregiving"
    },
    {
      name: "Alzheimer's Association",
      description: "Resources for families dealing with dementia and memory loss",
      url: "https://www.alz.org"
    },
    {
      name: "Medicare.gov",
      description: "Official Medicare information and coverage details",
      url: "https://www.medicare.gov"
    },
    {
      name: "Benefits Check Up",
      description: "Find benefits programs for seniors you may not know about",
      url: "https://www.benefitscheckup.org"
    },
    {
      name: "Family Caregiver Alliance",
      description: "Support and resources for family caregivers",
      url: "https://www.caregiver.org"
    }
  ];

  return (
    <>
      <SEO
        title="Senior Care Resources | By My Side Senior Services"
        description="Free guides, checklists, and resources to help families navigate senior care decisions. Expert advice on home safety, caregiving, assisted living, and more."
        canonical="https://bymysideseniorservices.com/resources"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Free Resources for Families
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Caring for an aging loved one is challenging. These guides, checklists, and FAQs will help you
              make informed decisions and feel more confident about the road ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Guides & Checklists */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Guides & Checklists</h2>
            <p className="text-lg text-slate-600">Practical resources to help you take the next step</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <guide.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                          {guide.type}
                        </span>
                        <span className="text-xs text-slate-500">{guide.readTime}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{guide.title}</h3>
                      <p className="text-sm text-slate-600 mb-4">{guide.description}</p>
                      <Button variant="outline" size="sm" className="text-teal-600 border-teal-600 hover:bg-teal-50">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Answers to the questions we hear most often from families</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <HelpCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-9">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Helpful Organizations</h2>
            <p className="text-lg text-slate-600">Trusted external resources for additional support</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-slate-600">{resource.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-teal-600 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions We Didn't Answer?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Every family's situation is unique. Schedule a free consultation and get personalized
            answers to your specific questions about senior care.
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
