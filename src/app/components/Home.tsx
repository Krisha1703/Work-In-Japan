import Navbar from "./Navbar";
import HeroVideo from "./HeroVideo";
import FilterJobs from "./search";
import Introduction from "./Introduction";
import SearchJob from "./jobs";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroVideo />
      <FilterJobs />
      <Introduction />
      <SearchJob />
      <Footer />
    </div>
  );
}
