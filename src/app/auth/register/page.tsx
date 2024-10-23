"use client";
import {useState} from "react";
import FormOne from "@app/features/authentication/components/FormOne";
import FormTwo from "@app/features/authentication/components/FormTwo";
import Header from "@app/components/header/Header";

const Page = () => {
  const [currentForm, setCurrentForm] = useState(1);
    const getTodayDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    };
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: true,
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    accept_terms_and_condition: "1",
    country_id: 0,
    state_id: 0,
    address: "",
    institution: "",
    institution_type: "University",
    year_of_admission: 1900,
    duration_of_study: 1,
    years_in_school: 1,
    profile_photo_path: "default_photo.jpg",
    cover_photo_path: "default_cover.jpg",
    date_of_call: getTodayDate(),
  });

  const handleNext = (data: { fullName: string; email: string; phone: string; password: string; confirmPassword: string }) => {
    const [first_name, last_name] = data.fullName.split(" "); // Split fullName into first and last names
    setFormData((prev) => ({
      ...prev,
      first_name,
      last_name: last_name || "",
      username: first_name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      password_confirmation: data.confirmPassword,
    }));
    setCurrentForm(2);
  };
  const handleSubmit = async (data: {
    country: number;
    state: number;
    address: string;
    institution: string;
    institution_type: string;
    duration_of_study: number;
    years_in_school: number;
  }) => {
    setFormData((prev) => ({
      ...prev,
      country_id: data.country,
      state_id: data.state,
      address: data.address,
      institution: data.institution,
      institution_type: data.institution_type,
      duration_of_study: data.duration_of_study,
      years_in_school: data.years_in_school,
      username: data.institution
    }));

    // Send the combined formData to the API
    try {
      const response = await fetch("https://staging-dlawnet.buckslaw.net/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
          <FormTwo onBack={() => setCurrentForm(1)} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Page;
