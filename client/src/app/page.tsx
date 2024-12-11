import Image from "next/image";

import { LogoCITi } from "../assets";
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
    <div>
      <Details
        id="Player4"
        game="GameName"
        date="2025-07-06"
        hour="10:00"
        contactPlatform="Platform Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu rutrum mauris, quis ullamcorper urna."
        link="https://www.youtube.com"
        participants={["Player1", "Player2", "Player3"]}
        numParticipants={3}
        maxParticipants={4}
      />
    </div>
  );
}
