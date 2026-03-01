import NotificationSettings from "./components/NotificationSettings";
import PaliaClock from "./components/PaliaClock";
import MapModal from "./components/MapModal";
import ToggleThemeButton from "./components/ToggleThemeButton";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">

      <MapModal/>

      <div className="relative py-8 px-4 md:py-10 md:px-24">
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-4xl font-bold">Palia Scheduler</h1>
            <ToggleThemeButton />
          </div>
          <h2 className="text-slate-500">Current time in Palia</h2>
          <PaliaClock />
          <NotificationSettings />
        </div>
        <ContentContainer />
        <Footer />
      </div>
    </div>
  );
}
