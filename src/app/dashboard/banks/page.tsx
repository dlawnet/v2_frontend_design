'use client'
import React, { useState } from 'react';
import { useUser } from "@app/lib/auth";
import BanksPage1 from "@app/features/dashboard/components/banks/BanksPage1";
import BanksPage2 from "@app/features/dashboard/components/banks/BanksPage2";

const page = () => {
  const { data: user } = useUser();
  const [bankPage, setBankPage] = useState("BanksPage1");

  return (
    <div>
      {user?.data?.status === 'activated' 
        ? (
          <BanksPage2 />
        ) : (
          // <BanksPage1 setBankPage={setBankPage} />
          <BanksPage2 />
        )
      }
    </div>
  )
}

export default page