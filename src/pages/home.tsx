import { Header } from "@/components/header";
import { SideBar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-red-300 w-20">
        <SideBar />
      </div>
      <div className="bg-blue-200 w-full">
        <Header />
      </div>
    </div>
  );
}
