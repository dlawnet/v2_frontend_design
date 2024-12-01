"use client";
import React, { useState } from "react";
import { Input } from "@app/components/base/input";
import { Textarea } from "@app/components/base/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@app/components/base/select";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/components/base/table";
import { useDropzone } from "react-dropzone";
import { useGetServiceTypes } from "@app/features/dashboard"; 
import { axios } from "@app/lib/axios";

interface SubmittedQuestion {
  id: number;
  subject: string;
  question: string;
  charges: string;
  date: string;
  status: string;
}

const PanelOfExperts = () => {
  const [uploadedFiles, setUploadedFiles] = useState<
      Array<File & { preview: string; progress: number; uploaded: boolean }>
  >([]);
  const [questions, setQuestions] = useState<SubmittedQuestion[]>([]);
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const handleDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(
        acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              progress: 0,
              uploaded: false,
            })
        )
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    maxSize: 10485760,
    accept: {
      "image/*": [],
    },
  });

  const { data: getServiceTypes } = useGetServiceTypes();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!serviceType || !subject || !question) {
  //     alert("All fields are required!");
  //     return;
  //   }

  //   const newQuestion: SubmittedQuestion = {
  //     id: questions.length + 1,
  //     subject,
  //     question,
  //     charges: "20,000 credits", // You can dynamically calculate this
  //     date: new Date().toLocaleDateString(),
  //     status: "Pending", // Default status
  //   };

  //   setQuestions((prev) => [...prev, newQuestion]);

  //   // Clear inputs
  //   setSubject("");
  //   setQuestion("");
  //   setUploadedFiles([]);
  //   setServiceType(null);
  // };

  

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceType || !subject || !question) {
        alert("All fields are required!");
        return;
    }

    try {
        const response = await axios.post('/service-request', {
            service_type: serviceType,
            // subject,
            question,
            files: uploadedFiles.map((file) => file.name), 
        });

        console.log("Service request created:", response.data);

        const newQuestion: SubmittedQuestion = {
            id: questions.length + 1,
            subject,
            question,
            charges: "20,000 credits",
            date: new Date().toLocaleDateString(),
            status: "Pending",
        };
        setQuestions((prev) => [...prev, newQuestion]);

        setServiceType(null);
        setSubject("");
        setQuestion("");
        setUploadedFiles([]);

        alert("Service request submitted successfully!");
    } catch (error) {
        console.error("Failed to submit service request:", error);
        alert("An error occurred while submitting the service request. Please try again.");
    }
};


  return (
      <div className="w-full flex flex-col gap-2 md:gap-6 p-6">
        <div className="max-w-full w-full lg:max-w-[893px]">
          <h3 className="text-lg lg:text-2xl">Panel of Experts</h3>
          <p className="text-sm sm:text-base mt-1">
            Select a Service Type from our panel of experts.
          </p>
        </div>

        <div className="w-full flex justify-between gap-4 lg:gap-8 border border-[#000000] border-opacity-25 p-6 rounded-[10px]">
          <form className="w-full" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center gap-8 flex-col sm:flex-row">
                <Select onValueChange={(value) => setServiceType(value)}>
                  <SelectTrigger className="w-full h-[52px] border border-[#491217] rounded-[10px]">
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#491217] text-white">
                    {getServiceTypes?.data.map((item: any) => (
                        <SelectItem
                            key={item.id}
                            value={item.id}
                            className="hover:bg-slate-400 cursor-pointer"
                        >
                          {item.display_name}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                    className="w-full h-[52px] border border-[#491217] rounded-[10px]"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                    className="w-full h-[145px] border border-[#491217] rounded-[10px] mt-5"
                    placeholder="Question?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              {/* Upload documents */}
              <div className="flex flex-col gap-1 mt-5">
                <div
                    {...getRootProps()}
                    className={`w-full max-w-full lg:max-w-[500px] h-[114px] rounded-[10px] border border-dashed border-spacing-2 border-[#000000] cursor-pointer flex items-center justify-center ${
                        isDragActive ? "border-dashed border-black" : "border-dashed"
                    }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                          src="/images/cloud.svg"
                          alt="cloud"
                          className="w-[33px] h-[33px] sm:w-[44px] sm:h-[44px]"
                      />
                      <p className="text-base sm:text-lg text-[#000000]">
                        {uploadedFiles.length > 0
                            ? `${uploadedFiles[0].name} uploaded`
                            : "Drop files to Upload, or"}
                      </p>
                      <p className="border-[#491217] text-sm sm:text-base border px-4 py-2 text-[#491217] rounded-[10px]">
                        Browse
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="mt-5 w-full flex items-center justify-center">
                <button
                    type="submit"
                    className="w-[205px] h-[55px] bg-[#491217] text-white rounded-[10px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="w-full my-5 overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Question</TableHead>
              <TableHead>Charges</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableHeader>
            {questions.map((q) => (
                <TableRow key={q.id} className="bg-[#F7F6FE] h-[62px]">
                  <TableCell>{q.id}</TableCell>
                  <TableCell>{q.subject}</TableCell>
                  <TableCell>{q.question}</TableCell>
                  <TableCell>{q.charges}</TableCell>
                  <TableCell>{q.date}</TableCell>
                  <TableCell>
                <span className="text-[#1F9254] bg-[#EBF9F1] p-2 rounded-full">
                  {q.status}
                </span>
                  </TableCell>
                </TableRow>
            ))}
          </Table>
        </div>
      </div>
  );
};

export default PanelOfExperts;
