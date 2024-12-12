import Image from "next/image";

import { LogoCITi } from "../assets";
import Profile from "@/app/Profile/profile";
import Details from "@/app/GameDetails/gameDetails";

export default function Home() {
  return (
    // <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
    //   <div>
    //     <Image src={LogoCITi} alt="Logo citi" />
    //   </div>
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
    //     <p className="text-white text-xl">
    //       Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
    //       <strong>&hearts;</strong> by CITi
    //     </p>
    //   </div>
    // </div>

    <Profile />

    // <Details
    //   id="1"
    //   game="Valorant"
    //   date="2022-11-11"
    //   hour="12:00"
    //   contactPlatform="Discord"
    //   description="Vamos jogar Valorant?"
    //   link="https://discord.gg/valorant"
    //   participants={["1", "2", "3"]}
    //   numParticipants={3}
    //   maxParticipants={5}
    // />
  );
}
