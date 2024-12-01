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
  return (
    <Card className="w-[230px] h-[99px] mx-auto bg-white border shadow-lg text-[14px]">
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
