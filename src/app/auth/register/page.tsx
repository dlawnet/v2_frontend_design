"use client";
import { useState } from "react";
import FormOne from "@app/components/auth/register/components/FormOne";
import FormTwo from "@app/components/auth/register/components/FormTwo";
import Header from "@app/components/header/Header";

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
        <FormOne onNext={handleNext} />
      ) : (
        <FormTwo onBack={handleBack} />
      )}
    </div>
  );
};

export default Page;
