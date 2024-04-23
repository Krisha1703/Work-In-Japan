import Navbar from "./Navbar";
import HeroVideo from "./HeroVideo";
import SearchJob from "./jobs";
import JobListing from "./Job_Listing";
import Introduction from "./Introduction";

import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroVideo />
      <JobListing />
      <Introduction />
      <SearchJob />
      <Footer />
    </div>
  );
}
