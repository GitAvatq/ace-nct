"use client"
import Advantages from "@/widgets/advantages/Advantages";
import Footer from "@/widgets/footer";
import Header from "@/widgets/header"
import Hero from "@/widgets/hero";
import PopularSubjects from "@/widgets/pop-subjects/PopularSubjects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <PopularSubjects />
      <div className="max-w-[1280px] mx-auto dark:bg-dark">
      </div>
      <Footer />
    </>
  );
};

export default Home;