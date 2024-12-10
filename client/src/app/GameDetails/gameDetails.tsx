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
  // const currentUser = "user123";
  // const isUserInMatch = participants.includes(currentUser);

  const currentUserId = "user123";
  const [participantsa, setParticipants] = useState(["user123", "user456"]);
  const isUserInMatch = participantsa.includes(currentUserId);

  const currentDate = new Date();
  const eventDateTime = new Date(`${date}T${hour}`);
  const isEventExpired = currentDate > eventDateTime;

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
              <div className="flex flex-col">
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
            <div className="flex flex-col mt-[50px] gap-[25px]">
              <div className="flex flex-col gap-[2px]">
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
              <div className="flex flex-col">
                <div
                  className={`${barlow500.className} text-[#000000] text-[16px]`}
                >
                  Link:
                </div>
                <div className="w-[592px] rounded-[4px] bg-white bg-opacity-50">
                  <Button
                    variant="link"
                    className={`${barlow400.className} p-[10px] text-[#454545] text-[14px]`}
                  >
                    {link}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="default"
            size="default"
            className={`w-[320px] h-[48px] rounded-[15px] text-[#F5F5F5] text-[20px] ${
              barlow700.className
            }  ${
              isEventExpired
                ? "bg-[#DEDEDE] cursor-not-allowed"
                : isUserInMatch
                ? "bg-[#EA394A] hover:bg-[#C42C3B]"
                : "bg-[#51E678] hover:bg-[#3ABF5C]"
            }`}
            disabled={isEventExpired}
            onClick={() => {
              if (isUserInMatch) {
                setParticipants((prev) =>
                  prev.filter((id) => id !== currentUserId)
                ); // Remover usuário
              } else {
                setParticipants((prev) => [...prev, currentUserId]); // Adicionar usuário
              }
            }}
          >
            {isUserInMatch ? "Sair" : "Entrar"}
          </Button>
        </div>
        <div
          className="flex flex-col items-center w-[400px] h-[782px] mt-[169px] rounded-[16px] gap-[20px] p-[20px]"
          style={{
            boxShadow: `
              0px 1px 3px 1px rgba(0, 0, 0, 0.15), 
              0px 1px 2px rgba(0, 0, 0, 0.30)
            `,
          }}
        >
          <div
            className={`${barlow500.className} text-[#000000] text-[24px] flex flex-row gap-[100px] ml-[20px]`}
          >
            <div>Participantes</div>
            <div>5/25</div>
          </div>
          <div
            className={`${barlow400.className} text-[#454545] text-[16px] flex flex-col overflow-y-auto rounded-[16px] w-[331px] h-[678px] bg-[#D5C6FA]`}
            style={{
              boxShadow: `
              0px 4px 4px rgba(0, 0, 0, 0.25)`,
            }}
          >
            <div className="flex flex-row items-center p-[31px] gap-[8px]">
              <img
                src={UserCircleIcon.src}
                alt="UserCircle"
                className="w-[32px] h-[32px]"
              />
              Usuário 1
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
