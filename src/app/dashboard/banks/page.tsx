'use client'
import React, { useState } from 'react';
import { useUser } from "@app/lib/auth";
import BanksPage1 from "@app/features/dashboard/components/banks/BanksPage1";
import BanksPage2 from "@app/features/dashboard/components/banks/BanksPage2";

const page = () => {
  const { data: user } = useUser();
  return (
    <div>
      {user?.data?.is_activated	 === true
        ? (
          <BanksPage2 />
        ) : (
          <BanksPage1 />
        )
      }
    </div>
  )
}

export default page
