import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";

// Images
import collegeImg from "../src/assets/barclays.jpeg";
import jpmcImg from "../src/assets/jpmc.jpeg";
import freelance1 from "../src/assets/freelance1.png";
import freelance2 from "../src/assets/freelance2.png";
import freelance3 from "../src/assets/freelance3.png";
import freelance4 from "../src/assets/freelance4.png";
import freelance5 from "../src/assets/freelance5.png";
import nocode from "../src/assets/nocode.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        title="College Experience"
        points={[
          "Graduated with a BTech in Electronics and a minor in Computer Science.",
          "Achieved an 8.35 CGPA at Sardar Patel Institute of Technology.",
          "Solved long queues for railway concession forms by digitizing the process.",
          "Learned Flutter, formed a team, and deployed the app on Play Store and web.",
          "Won hackathons and contributed to open-source projects.",
        ]}
        image={collegeImg}
      />
      <Section
        title="Professional Experience"
        points={[
          "Interned at JPMorgan for 7 months during the final semester of college.",
          "Automated repetitive tasks using Selenium and VBA.",
          "Worked on 40+ projects and collaborated with 28+ diverse teams.",
          "Developed a predictive machine learning model with 91% accuracy.",
          "Created an interactive Tableau dashboard.",
          "Worked as a Junior Analyst in Investment Banking, combining tech and finance.",
          "Built a Resume Screener tool using machine learning and LLM integration.",
        ]}
        image={jpmcImg}
        reverse
      />
      <CarouselSection
        title="Freelancing and Skills"
        text="Highlights of my freelancing work and technical skills:"
        images={[freelance1, freelance2, freelance3, freelance4, freelance5]}
        points={[
          "Helped businesses digitize their operations.",
          "Solved problems regardless of complexity.",
          "Skilled in Web Development, Mobile Development, Cloud, DevOps, and Blockchain.",
        ]}
      />
	<Section
		title="No-Code Automation Platform Pitch"
		image={nocode}
		points={[
			"During my time as a Fintech Intern at JPMorgan, I noticed a recurring challenge: every project required us to write code from scratch to automate repetitive tasks. This approach not only consumed a lot of time but also required deep coding knowledge, making it less accessible to the analysts who often had the domain expertise but not the technical skills.",
			"This experience sparked an idea for a no-code solution: a platform that allows users to create automation flows using a visual flowchart interface. The idea is simple: analysts could design workflows with logic and then have the system automatically generate executable code based on their flowchart design. This way, they wouldn’t need coding knowledge or a dedicated tech team to implement their solutions.",
			"I believe that such a platform could be a game-changer for companies, especially those in sectors like fintech, where automation is crucial but often requires a lot of technical expertise. With a no-code solution, analysts could easily build and deploy automation tools, saving time and increasing efficiency.",
			"I’m excited about the opportunity to work with BrowserStack on this idea. BrowserStack’s infrastructure and expertise could be the perfect environment to bring this no-code automation platform to life, and I believe it would be a valuable offering for many companies in the fintech and other industries that rely on automation.",
		]}
	/>
      <Footer />
    </div>
  );
};

export default App;