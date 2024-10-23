"use client";
import React, { useState } from "react";
import { Input } from "@app/components/base/input";
import { Textarea } from "@app/components/base/textarea";

import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/components/base/table";
import { useDropzone } from "react-dropzone";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@app/components/base/select";

const PanelOfExperts = () => {
  const [uploadedFiles, setUploadedFiles] = useState<
    Array<File & { preview: string; progress: number; uploaded: boolean }>
  >([]);

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

  return (
    <div className="mt-5 px-10 lg:px-0 lg:pr-5">
      <div>
        <h3 className="text-3xl lg:text-2xl">Panel of Experts</h3>
        <p className="text-base sm:text-lg mt-1">
          Select a Service Type from our panel of experts.
        </p>
      </div>
      <div className="flex pb-5 justify-center flex-col md:flex-row md: border border-[#000000] border-opacity-25 max-w-[893px] py-10 rounded-[10px] mt-5 px-5">
        <form className="w-full">
          <div className="flex items-center gap-8 flex-col sm:flex-row">
            <Select>
              <SelectTrigger className="w-full sm:max-w-[273px] h-[52px] border border-[#491217] rounded-[10px]">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ServiceTypeOne">Service Type One</SelectItem>
                <SelectItem value="ServiceTypeTwo">Service Type Two</SelectItem>
                <SelectItem value="ServiceTypeThree">
                  Service Type Three
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="w-full sm:max-w-[273px] h-[52px] border border-[#491217] rounded-[10px]"
              placeholder="Subject"
            />
          </div>
          <div>
            <Textarea
              className="w-full max-w-[579px] h-[145px] border border-[#491217] rounded-[10px] mt-5"
              placeholder="Question?"
            />
          </div>
          {/* Upload documents starts */}
          <div className="flex flex-col gap-1 mt-5">
            <div
              {...getRootProps()}
              className={`w-full max-w-[405px] h-[114px] rounded-[8px] border border-dashed border-spacing-2 border-[#000000] cursor-pointer flex items-center justify-center ${
                isDragActive ? "border-dashed border-black" : "border-dashed"
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 sm:gap-5 px-2">
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
                    <p className="border-[#491217] text-sm sm:text-base border px-2 py-1 text-[#491217] rounded-[10px]">
                      Browse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Upload documents ends */}
          <div className="mt-5 flex items-center justify-center sm:justify-start sm:ml-48">
            <button className="w-[205px] h-[55px] bg-[#491217] text-white rounded-[10px]">
              Submit
            </button>
          </div>
        </form>
        <div className="hidden md:block ml-5">
          <p className="text-2xl">Please Note.</p>
          <p className=" w-[190px] text-base">
            Kindly Ensure the question you are about to ask is relevant to law
            and avoid repetition of questions. ·Done tasks will be deleted in
            10-20 days after review. · If you post more than one question or
            multiple questions, it will be regarded as full preparation request
            and it will be charged accordingly.
          </p>
        </div>
      </div>
      <div className="block py-5 md:hidden">
        <p className="text-2xl">Please Note.</p>
        <p className=" w-full text-base">
          Kindly Ensure the question you are about to ask is relevant to law and
          avoid repetition of questions. ·Done tasks will be deleted in 10-20
          days after review. · If you post more than one question or multiple
          questions, it will be regarded as full preparation request and it will
          be charged accordingly.
        </p>
      </div>
      {/*  */}
      <div className="max-w-[893px] my-5 overflow-x-auto">
        <div className="min-w-full overflow-x-auto">
          <Table className="w-full lg:w-full">
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Question</TableHead>
              <TableHead>Charges</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableHeader>
            <TableRow className="bg-[#F7F6FE] h-[62px]">
              <TableCell>#1</TableCell>
              <TableCell>Test Project</TableCell>
              <TableCell className="">A Long text cut short...</TableCell>
              <TableCell>20,000 credits</TableCell>
              <TableCell>13/05/2024</TableCell>
              <TableCell>
                <span className="text-[#1F9254] bg-[#EBF9F1] p-2 rounded-full">
                  Delivered
                </span>
              </TableCell>
              <TableCell>
                <img src="/images/edit.svg" alt="edit" />
              </TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default PanelOfExperts;
