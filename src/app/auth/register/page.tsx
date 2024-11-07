"use client";
import {useState} from "react";
import RegisterFormOne from "@app/features/authentication/components/RegisterFormOne";
import RegisterFormTwo from "@app/features/authentication/components/RegisterFormTwo";
import Header from "@app/features/landing-page/components/Header";

const Page = () => {
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = () => {
    setCurrentForm(2);
  };

  const handleBack = () => {
    setCurrentForm(1);
  };

  return (
    <div>
      <Header />
      {currentForm === 1 ? (
        <RegisterFormOne onNext={handleNext} />
      ) : (
        <RegisterFormTwo onBack={handleBack} />
      )}
    </div>
  );
};

export default Page;
