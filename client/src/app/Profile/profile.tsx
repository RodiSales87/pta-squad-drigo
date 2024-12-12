"use client";
import React, { useState } from "react";
import Cards from "@/components/cards/cards";
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
  const [username, setUsername] = useState(""); // Estado para o campo de texto
  const [activeTab, setActiveTab] = useState("partidas"); // Estado para abas
  return (
    <div className="bg-[#F5F5F5] ml-[280px] mt-[64px] flex flex-col">
      <div className="ml-[40px]">
        <div>
          <div className={`${barlow400.className} text-[32px] text-[#000000]`}>
            Qual o username?
          </div>
          <div className="flex flex-row items-center gap-[30px]">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu username"
              className={`border border-[#D9D9D9] rounded-[4px] px-[10px] py-[6px] text-[#292929] text-[16px] w-[320px] h-[52px] ${barlow400.className}`}
            />
            <Button
              className={`bg-[#58CBFB] border-[#D9D9D9] text-[#F5F5F5] text-[16px] ${barlow700.className} w-[100px] h-[40px] rounded-[15px]`}
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Buscar
            </Button>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-[50px] border-b border-[#DEDEDE] mb-[20px]">
            <div
              onClick={() => setActiveTab("partidas")}
              className={`cursor-pointer pb-[8px] ml-[51px] ${
                activeTab === "partidas"
                  ? "border-b-[2px] border-[#6800E4] text-[#6800E4]"
                  : "text-[#454545]"
              } text-[16px] ${barlow400.className}`}
            >
              Partidas
            </div>
            <div
              onClick={() => setActiveTab("historico")}
              className={`cursor-pointer pb-[8px] ${
                activeTab === "historico"
                  ? "border-b-[2px] border-[#6800E4] text-[#6800E4]"
                  : "text-[#454545]"
              } text-[16px] ${barlow400.className}`}
            >
              Histórico
            </div>
          </div>
          <div>
            {activeTab === "partidas" ? (
              <div className="flex flex-col gap-[100px]">
                {/* Partidas Abertas */}
                <div className="flex flex-col">
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="text-[16px] font-bold">
                      Partidas abertas
                    </div>
                    <input
                      type="date"
                      className="bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px]"
                    />
                    <input
                      type="date"
                      className="bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px]"
                    />
                  </div>
                  <div className="mt-[10px]">
                    {username
                      ? `Nenhuma partida encontrada para ${username}`
                      : "Não há partidas abertas"}
                  </div>
                </div>

                {/* Partidas Fechadas */}
                <div className="flex flex-col">
                  <div className="text-[16px] font-bold">Partidas fechadas</div>
                  <div className="mt-[10px]">Não há partidas fechadas</div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {/* Histórico */}
                <div className="flex flex-row items-center gap-[10px]">
                  <div className="text-[16px] font-bold">
                    Histórico de partidas
                  </div>
                  <input
                    type="date"
                    className="bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px]"
                  />
                  <input
                    type="date"
                    className="bg-[#FFFFFF] border border-[#D9D9D9] rounded-[4px] px-[15px] text-[#292929] text-[16px] w-[164px] h-[52px]"
                  />
                </div>
                <div className="mt-[10px]">Não há partidas</div>
              </div>
            )}
          </div>
          <Button>+</Button>
        </div>
      </div>
    </div>
  );
}
