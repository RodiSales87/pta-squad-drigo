"use client";
import React, { useState } from "react";
import UserCircleIcon from "@/assets/UserCircle.png";
import { Barlow } from "next/font/google";
import { Button } from "@/components/ui/button";

const barlow400 = Barlow({ subsets: ["latin"], weight: "400" });

const barlow500 = Barlow({ subsets: ["latin"], weight: "500" });

const barlow700 = Barlow({ subsets: ["latin"], weight: "700" });

interface Match {
  id: string;
  game: string;
  date: string;
  hour: string;
  contactPlatform: string;
  description: string;
  link: string;
  participants: string[];
  numParticipants: number;
  maxParticipants: number;
}

export default function Details({
  id,
  game,
  date,
  hour,
  contactPlatform,
  description,
  link,
  participants,
  numParticipants,
  maxParticipants,
}: Match) {
  const currentDate = new Date();
  const eventDateTime = new Date(`${date}T${hour}`);
  const isEventExpired = currentDate > eventDateTime;

  // const isUserInMatch = participants.includes(id);

  // const cardColor = participants.includes(id)
  //   ? "bg-[#D0F4E4]"
  //   : isEventExpired
  //   ? "bg-[#DEDEDE]"
  //   : numParticipants < maxParticipants
  //   ? "bg-[#D2EFFE]"
  //   : "bg-[#D5C6FA]";

  const [currentParticipants, setCurrentParticipants] = useState(participants);

  const handleButtonClick = () => {
    if (isUserInMatch) {
      setCurrentParticipants((prev) => prev.filter((user) => user !== id));
    } else {
      setCurrentParticipants((prev) => [...prev, id]);
    }
  };

  const isUserInMatch = currentParticipants.includes(id);

  const cardColor = isUserInMatch
    ? "bg-[#D0F4E4]"
    : isEventExpired
    ? "bg-[#DEDEDE]"
    : currentParticipants.length < maxParticipants
    ? "bg-[#D2EFFE]"
    : "bg-[#D5C6FA]";

  return (
    <>
      <div className="bg-[#F5F5F5] flex flex-row gap-[64px]">
        <div className="ml-[344px] text-[#292929] flex flex-col gap-[80px] items-center">
          <div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col mt-[176px]">
                <div
                  className={`${barlow400.className} text-[#6800E4] text-[14px]`}
                >
                  Partidas
                </div>
                <div
                  className={`${barlow500.className} text-[#000000] text-[28px]`}
                >
                  {game}
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div
                  className={`${barlow400.className} text-[#454545] text-[16px]`}
                >
                  {`${eventDateTime.toLocaleDateString(
                    "pt-BR"
                  )}   |   ${eventDateTime.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}`}
                </div>
                <div
                  className={`${barlow400.className} text-[#454545] text-[16px]`}
                >
                  {contactPlatform}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[40px] gap-[25px]">
              <div className="flex flex-col gap-[5px]">
                <div
                  className={`${barlow500.className} text-[#000000] text-[16px]`}
                >
                  Descrição:
                </div>
                <div className="w-[592px] rounded-[4px] bg-white bg-opacity-50">
                  <div
                    className={`${barlow400.className} flex p-[17px] text-[#454545] text-[14px]`}
                  >
                    {description}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div
                  className={`${barlow500.className} text-[#000000] text-[16px]`}
                >
                  Link:
                </div>
                <div className="w-[592px] rounded-[4px] bg-white bg-opacity-50">
                  <Button
                    variant="link"
                    className={`${barlow400.className} p-[10px] text-[#454545] text-[14px]`}
                    onClick={() =>
                      window.open(link, "_blank", "noopener,noreferrer")
                    }
                  >
                    {link}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={handleButtonClick}
            className={`w-[320px] h-[48px] rounded-[15px] text-[#F5F5F5] text-[20px] ${
              barlow700.className
            }  ${
              isEventExpired || numParticipants >= maxParticipants
                ? "bg-[#DEDEDE] cursor-not-allowed"
                : isUserInMatch
                ? "bg-[#EA394A] hover:bg-[#C42C3B]"
                : "bg-[#51E678] hover:bg-[#3ABF5C]"
            }`}
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            disabled={isEventExpired || numParticipants >= maxParticipants}
          >
            {isEventExpired || numParticipants >= maxParticipants
              ? "Entrar"
              : isUserInMatch
              ? "Sair"
              : "Entrar"}
          </Button>
        </div>
        <div
          className="flex flex-col items-center w-[400px] h-[782px] mt-[169px] rounded-[16px] gap-[20px] p-[20px]"
          style={{
            boxShadow: `
              0px 1px 3px 1px rgba(0, 0, 0, 0.15), 
              0px 1px 2px 0px rgba(0, 0, 0, 0.30)
            `,
          }}
        >
          <div
            className={`${barlow500.className} text-[#000000] text-[24px] flex flex-row gap-[100px] ml-[20px]`}
          >
            <div>Participantes</div>
            <div>{`${currentParticipants.length}/${maxParticipants}`}</div>
          </div>
          <div
            className={`${barlow400.className} text-[#454545] text-[16px] flex flex-col rounded-[16px] w-[331px] h-[678px] p-[30px] gap-[14px] ${cardColor} overflow-y-auto`}
          >
            {currentParticipants.map((participant, index) => (
              <div key={index} className="flex flex-row items-center gap-[8px]">
                <img
                  src={UserCircleIcon.src}
                  alt="UserCircle"
                  className="w-[26px] h-[26px]"
                />
                {participant}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
