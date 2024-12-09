"use client";
import React, { useState } from "react";
import UserCircleIcon from "@/assets/UserCircle.png";
import { Barlow } from "next/font/google";

const barlow400 = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const barlow500 = Barlow({
  subsets: ["latin"],
  weight: "500",
});

export default function Details() {
  const [gameName, setGameName] = useState("Minecraft");
  const [participants, setParticipants] = useState(4);
  const [maxParticipants, setMaxParticipants] = useState(5);

  const [eventDate, setEventDate] = useState("2024-12-02");
  const [eventTime, setEventTime] = useState("23:52");

  const [meetingPlatform, setMeetingPlatform] = useState("Dircord");

  const isCreator = false;

  const currentDate = new Date();
  const eventDateTime = new Date(`${eventDate}T${eventTime}`);
  const isEventExpired = currentDate > eventDateTime;

  const cardColor = isCreator
    ? "bg-[#D0F4E4]"
    : isEventExpired
    ? "bg-[#DEDEDE]"
    : participants < maxParticipants
    ? "bg-[#D2EFFE]"
    : "bg-[#D5C6FA]";

  return (
    <>
      <div className="bg-[#F5F5F5] flex flex-row gap-[64px]">
        <div className="ml-[344px] text-[#292929] flex flex-col">
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
                Minecraft
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`${barlow400.className} text-[#454545] text-[16px]`}
              >
                06/07/2023 | 19h
              </div>
              <div
                className={`${barlow400.className} text-[#454545] text-[16px]`}
              >
                Discord
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
              <div
                className="w-[592px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "4px",
                }}
              >
                <div
                  className={`${barlow400.className} flex p-[17px] text-[#454545] text-[14px]`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu rutrum mauris, quis ullamcorper urna. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  eu rutrum mauris, quis ullamcorper urna. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Suspendisse eu rutrum
                  mauris, quis ullamcorper urna. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse eu rutrum mauris,
                  quis ullamcorper urna.
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`${barlow500.className} text-[#000000] text-[16px]`}
              >
                Link:
              </div>
              <div
                className="w-[592px]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "4px",
                }}
              >
                <div
                  className={`${barlow400.className} p-[10px] text-[#454545] text-[14px]`}
                >
                  Lorem ipsum dolor sit amet consec...
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[112px] ml-[136px]">BOTÃO</div>
        </div>
        <div
          className="flex flex-col w-[400px] h-[782px] mt-[169px]"
          style={{
            borderRadius: "16px",
            boxShadow: `
              0px 1px 3px 1px rgba(0, 0, 0, 0.15), 
              0px 1px 2px rgba(0, 0, 0, 0.30)
            `,
          }}
        >
          <div
            className={`${barlow500.className} text-[#000000] text-[24px] flex flex-row`}
          >
            <div>Participantes</div>
            <div className="ml-[px]">5/25</div>
          </div>
          <div
            className={`${barlow400.className} text-[#454545] text-[16px] flex flex-row`}
            style={{
              border: "1px solid #000000",
              borderRadius: "16px",
              boxShadow: `
              0px 4px 4px rgba(0, 0, 0, 0.25)`,
            }}
          >
            Usuário 1
          </div>
        </div>
      </div>
    </>
  );
}
