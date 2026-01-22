import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone, Heart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-20 pb-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart className="h-12 w-12 text-teal-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          We couldn't find the page you're looking for. Let us help you get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-slate-900 font-semibold">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-5 w-5" />
              View Services
            </Link>
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-600 mb-4">Need immediate help?</p>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-lg"
          >
            <Phone className="h-5 w-5" />
            Call (800) 555-1234
          </a>
        </div>
      </div>
    </div>
  );
}
