import { Switch, Route } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import TechMonitoring from "@/pages/services/TechMonitoring";
import SafetyMobility from "@/pages/services/SafetyMobility";
import Decluttering from "@/pages/services/Decluttering";
import InHomeCare from "@/pages/services/InHomeCare";
import AssistedLiving from "@/pages/services/AssistedLiving";
import NotFound from "@/pages/NotFound";

// Scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/services/tech-monitoring" component={TechMonitoring} />
          <Route path="/services/safety-mobility" component={SafetyMobility} />
          <Route path="/services/decluttering" component={Decluttering} />
          <Route path="/services/in-home-care" component={InHomeCare} />
          <Route path="/services/assisted-living" component={AssistedLiving} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
