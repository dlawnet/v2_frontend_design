import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@app/components/base/card";

interface ReusableCardProps {
  imageSrc: string;
  title: string;
  description: string;
  duration: string;
}

const VideoCard: React.FC<ReusableCardProps> = ({
  imageSrc,
  title,
  description,
  duration,
}) => {
  return (
    <Card className=" text-[#491217] w-[330px] sm:w-[273px]  border-none shadow-none cursor-pointer hover:scale-105">
      <div className="relative w-[270px] h-[143px] bg-black rounded-full mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-[276px] h-[153px]"
        />
        <div className="absolute right-0 bottom-0 p-1 bg-black text-white text-sm">
          {duration}
        </div>
      </div>
      <CardContent className="flex gap-2">
        <div>
          <img src="/images/logo.svg" alt="logo" className="w-10 h-10" />
        </div>
        <div>
          <CardTitle className="text-sm">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1 ">
            <p className="text-sm">Dlawnet</p>
            {description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
