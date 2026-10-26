import Header from './components/Header/Header';
import TabsSection from './components/TabsSection/TabsSection';
import AboutSection from './components/AboutSection/AboutSection';
import ObjectivesSection from './components/ObjectivesSection/ObjectivesSection';
import WhySection from './components/WhySection/WhySection';
import HowSection from './components/HowSection/HowSection';
import DistrictModelSection from './components/DistrictModelSection/DistrictModelSection';
import JoinSection from './components/JoinSection/JoinSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="hero-container">
        <Header />
        <TabsSection />
      </div>
      <AboutSection />
      <ObjectivesSection />
      <WhySection />
      <HowSection />
      <DistrictModelSection />
      <JoinSection />
      <TestimonialsSection />
    </div>
  );
}

export default App;

