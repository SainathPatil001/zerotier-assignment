import Footer from "@/components/footer/footer";
import MainContent from "@/components/main-content/main-content";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Image
        src={"/bg_2.png"}
        alt={""}
        width={300}
        height={300}
        className="main-bg-image"
      />
      <MainContent />
      <Footer />
    </main>
  );
}
