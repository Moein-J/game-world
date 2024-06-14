import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingpage/LandingPage";
import AuthorSuggest from "./components/authorSection/AuthorSuggest";
import Popular from "./components/popularSection/Popular";
import RecentGames from "./components/recentGames/RecentGames";
import Advertisment from "./components/Advertisment";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-bgPrimary w-screen flex justify-center lg:pt-4 xl:pt-4 2xl:pt-4 relative">
        <div className="w-full md:w-[95%] 2xl:w-5/6 xs:p-2  rounded-xl flex flex-col lg:gap-20 md:gap-9 xs:gap-9">
          <Navbar />
          <LandingPage />
          <AuthorSuggest />
          <Popular />
          <Advertisment />
          <RecentGames />
          <Advertisment />
          {/* <ShowCase /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
