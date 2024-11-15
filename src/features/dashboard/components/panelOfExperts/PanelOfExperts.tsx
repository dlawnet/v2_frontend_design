"use client";
import React, {useState} from "react";
import {Input} from "@app/components/base/input";
import {Textarea} from "@app/components/base/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@app/components/base/select";
import {Table, TableCell, TableHead, TableHeader, TableRow,} from "@app/components/base/table";
import {useDropzone} from "react-dropzone";

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
    <div className="w-full  flex flex-col gap-2 md:gap-6 p-6">
      <div className="max-w-full w-full lg:max-w-[893px]">
        <h3 className="text-lg lg:text-2xl">Panel of Experts</h3>
        <p className="text-sm sm:text-base mt-1">
          Select a Service Type from our panel of experts.
        </p>
      </div>

      <div className="w-full flex justify-between gap-4 lg:gap-8 border border-[#000000] border-opacity-25 p-6 rounded-[10px]">
        <div className="flex flex-grow justify-center flex-col md:flex-row">
          <form className="w-full ">
            <div className="">
              <div className="flex items-center gap-8 flex-col sm:flex-row">
                <Select>
                  <SelectTrigger className="w-full h-[52px] border border-[#491217] rounded-[10px]">
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#491217] text-white">
                    <SelectItem
                      value="ServiceTypeOne"
                      className="hover:bg-slate-400 cursor-pointer"
                    >
                      Service Type One
                    </SelectItem>
                    <SelectItem
                      value="ServiceTypeTwo"
                      className="hover:bg-slate-400 cursor-pointer"
                    >
                      Service Type Two
                    </SelectItem>
                    <SelectItem
                      value="ServiceTypeThree"
                      className="hover:bg-slate-400 cursor-pointer"
                    >
                      Service Type Three
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  className="w-full h-[52px] border border-[#491217] rounded-[10px]"
                  placeholder="Subject"
                />
              </div>
              <div>
                <Textarea
                  className="w-full h-[145px] border border-[#491217] rounded-[10px] mt-5"
                  placeholder="Question?"
                />
              </div>
              {/* Upload documents starts */}
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
                        <p className="border-[#491217] text-sm sm:text-base border px-4 py-2 text-[#491217] rounded-[10px]">
                          Browse
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Upload documents ends */}
              <div className="mt-5 w-full flex items-center justify-center">
                <button className="w-[205px] h-[55px] bg-[#491217] text-white rounded-[10px]">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="hidden md:flex flex-col gap-3 ml-5">
            <p className="text-2xl">Please Note.</p>
            <p className="w-[200px] text-base flex flex-col gap-2">
              <span>·Kindly Ensure the question you are about to ask is relevant to law
              and avoid repetition of questions.</span>
              <span>·Done tasks will be deleted in
              10-20 days after review.</span>
              <span>· If you post more than one question or
              multiple questions, it will be regarded as full preparation request
              and it will be charged accordingly.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="block py-5 md:hidden">
        <p className="text-2xl">Please Note.</p>
        <p className="w-full text-base">
          ·Kindly Ensure the question you are about to ask is relevant to law
          and avoid repetition of questions. ·Done tasks will be deleted in
          10-20 days after review. · If you post more than one question or
          multiple questions, it will be regarded as full preparation request
          and it will be charged accordingly.
        </p>
      </div>
      <div className="w-full my-5 overflow-x-auto">
        <Table className="w-full">
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
            <TableCell>A Long text cut short...</TableCell>
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
  );
};

export default PanelOfExperts;
