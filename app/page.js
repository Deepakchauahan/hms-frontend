import About from "./components/home/About";
import Appointment from "./components/home/Appointment";
import FAQ from "./components/home/FAQ";
import GetTouch from "./components/home/GetTouch";
import HappyBanner from "./components/home/HappyBanner";
import HowWork from "./components/home/HowWork";
import Outreach from "./components/home/Outreach";
import Relax from "./components/home/Relax";
import Restore from "./components/home/Restore";
import Specialities from "./components/home/Specialities";
import TakeCare from "./components/home/TakeCare";
import VideoBanner from "./components/home/VideoBanner";
import ZigZag from "./components/home/ZigZag";

export default function Home() {
  return (
    <main>
      <VideoBanner />
      <HappyBanner />
      <About />
      <Relax />
      <Outreach />
      <Restore />
      <HowWork />
      <TakeCare />
      <ZigZag />
      <GetTouch />
      <Specialities />
      <Appointment />
      <FAQ />
    </main>
  );
}
