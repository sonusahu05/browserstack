import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        title="College Experience"
        text="I graduated with a BTech in Electronics and a minor in Computer Science from Sardar Patel Institute of Technology, earning an 8.35 CGPA. During college, I identified and solved issues like long queues for railway concession forms by digitizing the process and deploying apps on the Play Store and web."
        image="/images/college.jpg" // Replace with actual image path
      />
      <Section
        title="Professional Experience"
        text="I interned at JPMorgan for 7 months, automating tasks using Selenium and VBA, and developed machine learning solutions like a predictive model with 91% accuracy. Later, I worked as a Junior Analyst, combining tech and finance to create tools like a Resume Screener."
        image="/images/professional.jpg" // Replace with actual image path
        reverse
      />
      <Section
        title="Freelancing and Skills"
        text="I’ve freelanced to digitize businesses, solving problems regardless of the complexity. My skills include Web Development, Mobile Development, Cloud, DevOps, and Blockchain."
        image="/images/freelancing.jpg" // Replace with actual image path
      />
      <Footer />
    </div>
  );
};

export default App;