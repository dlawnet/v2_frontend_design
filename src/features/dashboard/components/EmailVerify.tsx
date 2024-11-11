'use client'
import React, { useState } from 'react';
import { DialogContent } from "@app/components/base/dialog";
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from "@app/components/base/button";

interface EmailVerificationDialogContentProps {
  email: string;
  setEmail: (email: string) => void;
  onEmailSubmit: () => void;
}

const EmailVerify: React.FC<EmailVerificationDialogContentProps> = ({
  email,
  setEmail,
  onEmailSubmit,
}) => {
  const [step, setStep] = useState(1);

  const handleEmailSubmit = () => {
    if (email) {
      onEmailSubmit();
      setStep(2);
    }
  };

  return (
    <DialogContent className="w-full max-w-2xl p-6 bg-white rounded-[10px] overflow-hidden">
      {step === 1 ? (
        <div className="flex flex-col items-center gap-4">
          <Mail className="w-10 h-10 text-[#491217]" />
          <h2 className="text-2xl font-semibold text-[#491217]">Verify Your Email</h2>
          <p className="text-gray-600 text-center">
            Enter your email address, and we'll send you a link to verify it.
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#491217]"
          />
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
            A verification link has been sent to <strong>{email}</strong>. Please check your inbox.
          </p>
        </div>
      )}
    </DialogContent>
  );
};

export default EmailVerify;
