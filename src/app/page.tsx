import Apps from "@/components/Apps";
import Customize from "@/components/Customize";
import Data from "@/components/Data";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Management from "@/components/Management";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";
import Testimonial from "@/components/Testimonial";
import Trial from "@/components/Trial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Management/>
      <Extension/>
      <Customize/>
      <Pricing/>
      <Work/>
      <Data/>
      <Sponsors/>
      <Apps/>
      <Testimonial/>
      <Trial/>
      <Footer/>
    </div>
  );
}
