import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../base/card";

interface ReusableCardProps {
  imageSrc: string;
  title: string;
  description: string;
  hidden: string;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  imageSrc,
  title,
  description,
  hidden,
}) => {
  return (
    <Card
      className={`${hidden} bg-gradient-to-b from-[#FDDF5A] to-[#E7C42A] text-[#491217] w-[370px] sm:w-[273px] h-[200px] sm:h-[200px] border-none rounded-[5px] cursor-pointer hover:scale-105`}
    >
      <div className="flex items-end justify-end">
        <img src="/images/arrow.png" alt="icon" className="w-[32px]" />
      </div>
      <CardContent>
        <CardTitle className="ml-[-5px]">
          <img src={imageSrc} alt="icon" />
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
