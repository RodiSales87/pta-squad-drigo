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

export default function Profile() {
  const [username, setUsername] = useState("");
  const [activeTab, setActiveTab] = useState("partidas");
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
                        className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                      />
                      <input
                        type="date"
                        className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                      />
                    </div>
                  </div>
                  <div className="items-center flex flex-col">
                    <div className={`${barlow400.className} text-[24px]`}>
                      Não há partidas abertas
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[60px]">
                  <div className={`text-[32px] ${barlow500.className}`}>
                    Partidas fechadas
                  </div>
                  <div className="items-center flex flex-col">
                    <div className={`${barlow400.className} text-[24px]`}>
                      Não há partidas fechadas
                    </div>
                  </div>
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
                      className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                    />
                    <input
                      type="date"
                      className={`bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px] ${barlow400.className}`}
                    />
                  </div>
                </div>
                <div className="items-center flex flex-col">
                  <div className={`${barlow400.className} text-[24px]`}>
                    Não há partidas
                  </div>
                </div>
              </div>
            )}
          </div>
          <Button className="w-[60px] h-[60px] rounded-[16px] bg-[#51E678] hover:bg-[#3EC65A] fixed bottom-[40px] right-[130px]">
            <img src={PlusIcon.src} alt="Plus" className="w-[30px] h-[30px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
