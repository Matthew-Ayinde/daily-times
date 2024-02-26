import HomeCarousel from "@/components/HomeCarousel";
import HomePage from "@/components/HomePage";
import Story from "@/components/Story";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="">
      {/* <HomePage /> */}

      <Banner />

      <HomeCarousel />

      

      <Story />
    </div>
  );
}
