"use client";
import React, { useState } from "react";
import Cards from "@/components/cards/cards";
import PlusIcon from "@/assets/Plus.png";
import { Barlow } from "next/font/google";
import { Button } from "@/components/ui/button";

const barlow400 = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const barlow500 = Barlow({
  subsets: ["latin"],
  weight: "500",
});

const barlow700 = Barlow({
  subsets: ["latin"],
  weight: "700",
});

interface Partida {
  game: string;
  date: string;
  hour: string;
  contactPlatform: string;
  numParticipants: number;
  maxParticipants: number;
}

export default function Profile() {
  const [username, setUsername] = useState("");
  const [activeTab, setActiveTab] = useState("partidas");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [partidas, setPartidas] = useState({
    open: [] as Partida[],
    closed: [] as Partida[],
    historical: [] as Partida[],
  });

  const allPartidas: Partida[] = [
    {
      game: "CS:GO",
      date: "2024-12-01",
      hour: "20:00",
      contactPlatform: "Discord",
      numParticipants: 8,
      maxParticipants: 10,
    },
    {
      game: "Valorant",
      date: "2024-12-05",
      hour: "18:30",
      contactPlatform: "WhatsApp",
      numParticipants: 10,
      maxParticipants: 10,
    },
    {
      game: "League of Legends",
      date: "2024-12-15",
      hour: "12:30",
      contactPlatform: "Skype",
      numParticipants: 10,
      maxParticipants: 10,
    },
    {
      game: "Valorant",
      date: "2024-12-15",
      hour: "12:00",
      contactPlatform: "Discord",
      numParticipants: 1,
      maxParticipants: 10,
    },
    {
      game: "Overcooked 2",
      date: "2024-12-29",
      hour: "21:00",
      contactPlatform: "WhatsApp",
      numParticipants: 2,
      maxParticipants: 4,
    },
    {
      game: "Minecraft",
      date: "2024-12-16",
      hour: "14:00",
      contactPlatform: "Telegram",
      numParticipants: 5,
      maxParticipants: 6,
    },
  ];

  const fetchPartidas = () => {
    const currentDateTime = new Date();
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const filteredPartidas = allPartidas.filter((partida) => {
      const partidaDateTime = new Date(`${partida.date}T${partida.hour}:00`);

      const isWithinDateRange =
        (!start || partidaDateTime >= start) &&
        (!end || partidaDateTime <= end);

      return isWithinDateRange;
    });

    const sortByDateTime = (a: Partida, b: Partida): number => {
      const dateTimeA = new Date(`${a.date}T${a.hour}:00`);
      const dateTimeB = new Date(`${b.date}T${b.hour}:00`);
      return dateTimeA.getTime() - dateTimeB.getTime();
    };

    const filteredOpenGames = filteredPartidas
      .filter(
        (partida) =>
          partida.numParticipants < partida.maxParticipants &&
          new Date(`${partida.date}T${partida.hour}:00`) > currentDateTime
      )
      .sort(sortByDateTime);

    const filteredClosedGames = filteredPartidas
      .filter(
        (partida) =>
          partida.numParticipants === partida.maxParticipants &&
          new Date(`${partida.date}T${partida.hour}:00`) > currentDateTime
      )
      .sort(sortByDateTime);

    const filteredHistoricalGames = filteredPartidas
      .filter(
        (partida) =>
          new Date(`${partida.date}T${partida.hour}:00`) < currentDateTime
      )
      .sort(sortByDateTime);

    setPartidas({
      open: filteredOpenGames,
      closed: filteredClosedGames,
      historical: filteredHistoricalGames,
    });
  };

  return (
    <div className="bg-[#F5F5F5] ml-[280px] mt-[64px] flex flex-col h-full">
      <div className="ml-[40px] mt-[64px] flex flex-col gap-[124px]">
        <div className="flex flex-col gap-[25px]">
          <div className={`${barlow400.className} text-[32px] text-[#000000]`}>
            Qual o username?
          </div>
          <div className="flex flex-row items-center gap-[30px]">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite o username"
              className={`border border-[#D9D9D9] rounded-[4px] px-[10px] py-[6px] text-[#292929] text-[16px] w-[320px] h-[52px] ${barlow400.className}`}
            />
            <Button
              onClick={fetchPartidas}
              className={`bg-[#58CBFB] hover:bg-[#2CAAE3] border-[#D9D9D9] text-[#F5F5F5] text-[16px] ${barlow700.className} w-[100px] h-[40px] rounded-[15px]`}
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Buscar
            </Button>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-row items-center gap-[20px] relative ml-[50px]">
              <div
                onClick={() => setActiveTab("partidas")}
                className={`border-[#D1CFCF] cursor-pointer px-[40px] py-[5px] rounded-t-[8px] bg-[#E2F4EC] text-[16px] ${
                  barlow400.className
                } ${
                  activeTab === "partidas"
                    ? "border-t border-l border-r"
                    : "border"
                }`}
              >
                Partidas
              </div>
              <div
                onClick={() => setActiveTab("historico")}
                className={`border-[#D1CFCF] cursor-pointer px-[40px] py-[5px] rounded-t-[8px] bg-[#F0F0F0] text-[16px] ${
                  barlow400.className
                } ${
                  activeTab === "historico"
                    ? "border-t border-l border-r"
                    : "border"
                }`}
              >
                Histórico
              </div>
            </div>
            <div className="border-b-[1px] border-[#D1CFCF] w-[1469px] mt-[-1px]" />
          </div>
          <div>
            {activeTab === "partidas" ? (
              <div className="flex flex-col gap-[50px] mt-[30px]">
                <div className="flex flex-col gap-[60px]">
                  <div className="flex flex-row items-center gap-[890px]">
                    <div className={`text-[32px] ${barlow500.className}`}>
                      Partidas abertas
                    </div>
                    <div className="flex flex-row items-center gap-[20px]">
                      <input
                        type="date"
                        value={startDate}
                        className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                      <input
                        type="date"
                        value={endDate}
                        className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                  {partidas.open.length > 0 ? (
                    <div className="flex flex-row flex-wrap items-center gap-[20px]">
                      {partidas.open.map((partida, index) => (
                        <Cards
                          key={index}
                          game={partida.game}
                          date={partida.date}
                          hour={partida.hour}
                          contactPlatform={partida.contactPlatform}
                          numParticipants={partida.numParticipants}
                          maxParticipants={partida.maxParticipants}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className={`${barlow400.className} text-[24px]`}>
                        Não há partidas abertas
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-[60px]">
                  <div className={`text-[32px] ${barlow500.className}`}>
                    Partidas fechadas
                  </div>
                  {partidas.closed.length > 0 ? (
                    <div className="flex flex-row flex-wrap items-center gap-[20px]">
                      {partidas.closed.map((partida, index) => (
                        <Cards
                          key={index}
                          game={partida.game}
                          date={partida.date}
                          hour={partida.hour}
                          contactPlatform={partida.contactPlatform}
                          numParticipants={partida.numParticipants}
                          maxParticipants={partida.maxParticipants}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className={`${barlow400.className} text-[24px]`}>
                        Não há partidas fechadas
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col mt-[30px] gap-[60px]">
                <div className="flex flex-row items-center gap-[829px]">
                  <div className={`text-[32px] ${barlow500.className}`}>
                    Histórico de partidas
                  </div>
                  <div className="flex flex-row items-center gap-[20px]">
                    <input
                      type="date"
                      value={startDate}
                      className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                      type="date"
                      value={endDate}
                      className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                {partidas.historical.length > 0 ? (
                  <div className="flex flex-row flex-wrap items-center gap-[20px]">
                    {partidas.historical.map((partida, index) => (
                      <Cards
                        key={index}
                        game={partida.game}
                        date={partida.date}
                        hour={partida.hour}
                        contactPlatform={partida.contactPlatform}
                        numParticipants={partida.numParticipants}
                        maxParticipants={partida.maxParticipants}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className={`${barlow400.className} text-[24px]`}>
                      Não há partidas
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <Button
            className="w-[60px] h-[60px] rounded-[16px] bg-[#51E678] hover:bg-[#3EC65A] fixed bottom-[40px] right-[130px]"
            onClick={() =>
              window.open(
                "https://www.youtube.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <img src={PlusIcon.src} alt="Plus" className="w-[30px] h-[30px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
