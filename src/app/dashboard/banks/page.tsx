'use client'
import React, { useState } from 'react'
import BanksPage1 from "@app/components/dashboard/banks/BanksPage1";
import BanksPage2 from "@app/components/dashboard/banks/BanksPage2";

const page = () => {
  const [selectedMenu, setSelectedMenu] = useState("Banks");
  const [bankPage, setBankPage] = useState("BanksPage1");

  return (
    <div>
      {selectedMenu === "Banks" &&
        (bankPage === "BanksPage1" ? (
          <BanksPage1 setBankPage={setBankPage} />
        ) : (
          <BanksPage2 />
        )
      )}
    </div>
  )
}

export default page