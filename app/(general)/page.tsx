import HomeCarousel from "@/components/HomeCarousel";
import HomePage from "@/components/HomePage";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div className="">
      <HomePage />

      <HomeCarousel />

      <Story />
    </div>
  );
}
