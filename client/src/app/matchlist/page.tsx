import Cards from "@/components/cards/cards";
import Sidebar from "@/components/sidebar";
import { Barlow } from "next/font/google";

const barlow400 = Barlow({ subsets: ["latin"], weight: "400" });

const barlow500 = Barlow({ subsets: ["latin"], weight: "500" });

const barlow700 = Barlow({ subsets: ["latin"], weight: "700" });

const examples = [
    {
      game: "League of Legends",
      date: "2024-12-15",
      hour: "18:30",
      contactPlatform: "Discord",
      numParticipants: 4,
      maxParticipants: 10,
    },
    {
      game: "Valorant",
      date: "2024-12-16",
      hour: "20:00",
      contactPlatform: "WhatsApp",
      numParticipants: 2,
      maxParticipants: 5,
    },
    {
      game: "Fortnite",
      date: "2024-12-17",
      hour: "15:00",
      contactPlatform: "Telegram",
      numParticipants: 3,
      maxParticipants: 4,
    },
    {
      game: "Minecraft",
      date: "2024-12-18",
      hour: "14:00",
      contactPlatform: "Slack",
      numParticipants: 5,
      maxParticipants: 10,
    },
    {
      game: "Among Us",
      date: "2024-12-19",
      hour: "16:00",
      contactPlatform: "Zoom",
      numParticipants: 6,
      maxParticipants: 10,
    },
    {
      game: "PUBG",
      date: "2024-12-20",
      hour: "19:00",
      contactPlatform: "Skype",
      numParticipants: 8,
      maxParticipants: 8,
    },
    {
      game: "Counter-Strike",
      date: "2024-12-21",
      hour: "21:00",
      contactPlatform: "Discord",
      numParticipants: 5,
      maxParticipants: 5,
    },
    {
      game: "Overwatch",
      date: "2024-12-22",
      hour: "13:00",
      contactPlatform: "WhatsApp",
      numParticipants: 3,
      maxParticipants: 6,
    },
    {
      game: "Dota 2",
      date: "2024-12-23",
      hour: "18:30",
      contactPlatform: "Telegram",
      numParticipants: 7,
      maxParticipants: 10,
    },
    {
      game: "Call of Duty: Warzone",
      date: "2024-12-24",
      hour: "20:30",
      contactPlatform: "Slack",
      numParticipants: 4,
      maxParticipants: 4,
    },
    {
      game: "Apex Legends",
      date: "2024-12-25",
      hour: "17:00",
      contactPlatform: "Discord",
      numParticipants: 2,
      maxParticipants: 3,
    },
    {
      game: "FIFA 24",
      date: "2024-12-26",
      hour: "18:00",
      contactPlatform: "Zoom",
      numParticipants: 2,
      maxParticipants: 4,
    },
    {
      game: "Rocket League",
      date: "2024-12-27",
      hour: "19:45",
      contactPlatform: "Skype",
      numParticipants: 4,
      maxParticipants: 6,
    },
    {
      game: "GTA V Online",
      date: "2024-12-28",
      hour: "20:15",
      contactPlatform: "WhatsApp",
      numParticipants: 6,
      maxParticipants: 30,
    },
    {
      game: "Roblox",
      date: "2024-12-29",
      hour: "15:30",
      contactPlatform: "Telegram",
      numParticipants: 10,
      maxParticipants: 20,
    },
    {
      game: "World of Warcraft",
      date: "2024-12-30",
      hour: "22:00",
      contactPlatform: "Slack",
      numParticipants: 25,
      maxParticipants: 40,
    },
    {
      game: "Elden Ring Co-op",
      date: "2024-12-31",
      hour: "23:00",
      contactPlatform: "Discord",
      numParticipants: 1,
      maxParticipants: 2,
    },
    {
      game: "The Division 2",
      date: "2024-12-14",
      hour: "16:30",
      contactPlatform: "Zoom",
      numParticipants: 3,
      maxParticipants: 8,
    },
    {
      game: "Sea of Thieves",
      date: "2024-12-13",
      hour: "14:45",
      contactPlatform: "Skype",
      numParticipants: 2,
      maxParticipants: 4,
    },
    {
      game: "Destiny 2",
      date: "2024-12-12",
      hour: "21:15",
      contactPlatform: "Discord",
      numParticipants: 5,
      maxParticipants: 6,
    },
  ];
  

export default function matchlist()
{
    return(
        <div id = "screen" className = "bg-[#F5F5F5] w-screen h-screen">
          <Sidebar />
            <div id = "main-container " className = "ml-[452px] pt-[64px]">
                <p id = "title" className ={`${barlow400.className} text-[28px] mb-[32px]`}>Próximas partidas</p>
                <div id = "matches-grid" className = "grid grid-cols-4 gap-y-[32px] w-[1080px]">
                    <Cards {...examples[0]}/>
                    <Cards {...examples[1]}/>
                    <Cards {...examples[2]}/>
                    <Cards {...examples[3]}/>
                    <Cards {...examples[4]}/>
                    <Cards {...examples[5]}/>
                    <Cards {...examples[6]}/>
                    <Cards {...examples[7]}/>
                    <Cards {...examples[8]}/>
                    <Cards {...examples[9]}/>
                    <Cards {...examples[10]}/>
                    <Cards {...examples[11]}/>
                    <Cards {...examples[12]}/>
                    <Cards {...examples[13]}/>
                    <Cards {...examples[14]}/>
                    <Cards {...examples[15]}/>
                    <Cards {...examples[16]}/>
                    <Cards {...examples[17]}/>
                    <Cards {...examples[18]}/>
                    <Cards {...examples[19]}/>


            </div>
                <div className = "w-[60px] h-[60px] bg-[#51E678] rounded-lg text-white text-[40px] flex justify-center items-center fixed bottom-0 right-0 mr-[400px] mb-[40px]">
                    <a href = "https://youtube.com" className = {`${barlow700.className} `}>+</a>
                </div>
                
            </div>
        </div>
        
    )
    
}