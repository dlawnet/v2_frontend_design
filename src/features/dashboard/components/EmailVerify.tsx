'use client'
import React, { useState } from 'react';
import { DialogContent, DialogTrigger } from "@app/components/base/dialog";
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from "@app/components/base/button";

interface EmailVerifyDialogProps {
  userEmail: string;
}

const EmailVerify: React.FC<EmailVerifyDialogProps> = ({ userEmail }) => {
  const [step, setStep] = useState(1);

  const handleEmailSubmit = () => {

      // Custom API logic to send Verification mail, e.g., DLawNet API
      setStep(2);

  };

  return (
    <div>
      <DialogContent className="w-full max-w-2xl p-6 bg-white rounded-[10px] overflow-hidden">
        {step === 1 ? (
          <div className="flex flex-col items-center gap-4">
            <Mail className="w-10 h-10 text-[#491217]" />
            <h2 className="text-2xl font-semibold text-[#491217]">Verify Your Email</h2>
            <Button
              onClick={handleEmailSubmit}
              className="bg-[#491217] text-white rounded px-4 py-2 hover:bg-[#491217] hover:scale-105"
            >
              Send Verification Email
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
            <h2 className="text-2xl font-semibold text-[#491217]">Verification Email Sent!</h2>
            <p className="text-gray-600 text-center">
              A verification link has been sent to <strong>{userEmail}</strong>. Please check your inbox.
            </p>
          </div>
        )}
      </DialogContent>
    </div>
  );
};

export default EmailVerify;
