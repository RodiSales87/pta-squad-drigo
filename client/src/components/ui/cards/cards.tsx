"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ParticipantsIcon from "@/assets/Participants.png";

export default function ExampleCard() {
  const [participants, setParticipants] = useState(6);
  const threshold = 5;

  const isCreator = true;

  const eventDate = "2024-12-01";
  const eventTime = "22:00";

  const [day, month, year] = eventDate.split("/");
  const eventDateISO = `${year}-${month}-${day}`;

  const currentDate = new Date();
  const eventDateTime = new Date(`${eventDate}T${eventTime}`);

  const isEventExpired = currentDate > eventDateTime;

  const cardColor = isCreator
    ? "bg-[#D0F4E4]"
    : isEventExpired
    ? "bg-[#DEDEDE]"
    : participants < threshold
    ? "bg-[#D2EFFE]"
    : "bg-[#D5C6FA]";

  return (
    <Card
      className={`w-[230px] h-[99px] mx-auto border shadow-lg text-[14px] ${cardColor}`}
    >
      <div className="ml-[16px] flex flex-col gap-[3px]">
        <div className="mt-[12px]">Jogo</div>
        <div className="mt-[2px]">Plataforma</div>
        <div className="flex flex-row justify-between items-end">
          <div>00/00/0000 | 00h</div>
          <div className="flex flex-row mr-[16px] items-end gap-[3px]">
            00
            <img
              src={ParticipantsIcon.src}
              alt="Participants"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
