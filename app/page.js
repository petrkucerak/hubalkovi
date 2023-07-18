import Cover from "../components/cover";
import Footer from "../components/footer";
import GalleryCustom from "../components/gallery-custom";
import Infromation from "../components/information";
import Story from "../components/story";
import Timeline from "../components/timeline";
export default function Home() {
  return (
    <main className="ease-in-out duration-300">
      <Cover />
      <Story />
      <Timeline />
      <Infromation />
      <Footer />
      <GalleryCustom />
    </main>
  );
}
