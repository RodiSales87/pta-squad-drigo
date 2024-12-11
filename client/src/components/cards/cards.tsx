"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import ParticipantsIcon from "@/assets/Participants.png";
import { Barlow } from "next/font/google";

const barlow300 = Barlow({
  subsets: ["latin"],
  weight: "300",
});

const barlow500 = Barlow({
  subsets: ["latin"],
  weight: "500",
});

interface Card {
  game: string;
  date: string;
  hour: string;
  contactPlatform: string;
  numParticipants: number;
  maxParticipants: number;
}

export default function Cards({
  game,
  date,
  hour,
  contactPlatform,
  numParticipants,
  maxParticipants,
}: Card) {
  const isUserInMatch = false;

  const currentDate = new Date();
  const eventDateTime = new Date(`${date}T${hour}`);
  const isEventExpired = currentDate > eventDateTime;

  const cardColor = isUserInMatch
    ? "bg-[#D0F4E4]"
    : isEventExpired
    ? "bg-[#DEDEDE]"
    : numParticipants < maxParticipants
    ? "bg-[#D2EFFE]"
    : "bg-[#D5C6FA]";

  return (
    <a
      href="https://www.youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      <Card
        className={`w-[230px] h-[99px] mx-auto border shadow-lg text-[14px] text-[#292929] ${cardColor} ${barlow300.className}`}
      >
        <div className="ml-[16px] flex flex-col gap-[3px]">
          <div className={`mt-[12px] ${barlow500.className}`}>{game}</div>
          <div className="mt-[2px] ">{contactPlatform}</div>
          <div className="flex flex-row justify-between items-end">
            <div>
              {new Date(eventDateTime).toLocaleDateString()} | {hour}
            </div>
            <div className="flex flex-row mr-[16px] items-end gap-[3px]">
              {numParticipants}
              <img
                src={ParticipantsIcon.src}
                alt="Participants"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
}
