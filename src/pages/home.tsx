import { Header } from "@/components/header";
import { SideBar } from "@/components/sidebar";

import BusinessMan from "@/assets/images/businessman.svg";

export default function Home() {
  return (
    <div className="flex h-screen font-jetMono bg-[#f0f0f0]">
      <div className=" w-20">
        <SideBar />
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="w-full">
          <Header />
        </div>
        <div className="grid md:grid-cols-2 h-full  max-md:grid-cols">
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold">André Caracioly</h1>
            <h2 className="text-2xl font-semibold">{"<Desenvolvedor />"}</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada, magna in vestibulum tincidunt, mauris lectus blandit
              tortor, quis sodales massa quam sed lectus.
            </p>
          </div>
          <div className="flex p-6 justify-center items-center md:visible max-md:hidden">
            <img src={BusinessMan} alt="BusinessMan" />
          </div>
        </div>
      </div>
    </div>
  );
}
