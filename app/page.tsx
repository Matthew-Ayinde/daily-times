import Carousel from "@/components/Carousel";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <HomePage />

      <Carousel />

      <Footer />

    </div>
  );
}
