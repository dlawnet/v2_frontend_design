'use client';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Card } from "@app/components/base/card";
import { CircleCheck, Link, Loader2 } from "lucide-react";
import Image from 'next/image';
import Logo from '@/components/assets/Logo.png';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@app/components/base/table";
import { DndIcon } from '@app/icons';
import { DialogContent } from "@app/components/base/dialog";

interface InvoiceData {
    currentDate: string
    invoiceId: string
    type: string;
    price: string;
    billingCycle: string;
    name: string;
    bankName: string;
    accountNumber: string;
    referenceNumber: string;
}

interface FileUpload {
    file: File;
    progress: number;
}

type Step = 1 | 2 | 3 | 4;

const InvoiceContent: React.FC = () => {; 
    const router = useRouter();
    const searchParams = useSearchParams();
    const [invoiceData, setInvoiceData] = useState<InvoiceData>({
        currentDate: '',
        invoiceId: '',
        type: '',
        price: '',
        billingCycle: '',
        name: '',
        bankName: '',
        accountNumber: '',
        referenceNumber: ''
    });
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [uploadedFiles, setUploadedFiles] = useState<FileUpload[]>([]);

    const invoiceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const data: InvoiceData = {
            currentDate: searchParams.get('currentDate') || '',
            invoiceId: searchParams.get('invoiceId') || '',
            type: searchParams.get('type') || '',
            price: searchParams.get('price') || '',
            billingCycle: searchParams.get('billingCycle') || '',
            name: searchParams.get('name') || '',
            bankName: searchParams.get('bankName') || '',
            accountNumber: searchParams.get('accountNumber') || '',
            referenceNumber: searchParams.get('referenceNumber') || ''
        };
        setInvoiceData(data);
    }, [searchParams]);

    const handleDownloadPDF = async (): Promise<void> => {
        if (!invoiceRef.current) return;

        const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`Invoice-${invoiceData.invoiceId}.pdf`);
    };

    const handleFileUpload = (file: File): void => {
        const newFileUpload: FileUpload = {
            file,
            progress: 0
        };

        setUploadedFiles(prev => [...prev, newFileUpload]);

        const simulateProgress = (fileIndex: number): void => {
            setUploadedFiles(prevFiles => 
                prevFiles.map((f, idx) => 
                    idx === fileIndex
                        ? { ...f, progress: Math.min(f.progress + 20, 100) }
                        : f
                )
            );
        };

        let progressCount = 0;
        const interval = setInterval(() => {
            progressCount++;
            simulateProgress(uploadedFiles.length);
            
            if (progressCount >= 4) {
                clearInterval(interval);
                setCurrentStep(3);
            }
        }, 500);
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file) handleFileUpload(file);
    };

    const handleDragDrop = (event: React.DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file) handleFileUpload(file);
    };

    const renderStepContent = (): JSX.Element | null => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="bg-transparent flex flex-col w-full h-full">
                        <div 
                        ref={invoiceRef} 
                        className='border border-primary rounded-lg shadow-sm w-full p-2 flex flex-col gap-4'
                        >
                            <div className='w-full flex items-center justify-center gap-4'>
                                <div    
                                className='h-14 flex items-center justify-start overflow-hidden'
                                >
                                    <Image
                                    src="/images/menu.svg"
                                    width={90}
                                    height={100}
                                    alt='logo'
                                    className='h-10'
                                    />
                                </div>
                                <h2 className="text-2xl font-semibold mb-4">Invoice</h2>
                            </div>

                            <div className="bg-background p-2 rounded-md flex flex-col gap-4 md:gap-8">
                                <div className='w-full flex flex-col gap-1 text-gray-700 '>
                                    <h2 className='text-base font-semibold'>Invoice {invoiceData.invoiceId}</h2>
                                    <span className='text-xs'>Status: Pending</span>
                                    <span className='text-xs'>Subscription name: {invoiceData.type}</span>
                                    <span className='text-xs'>Payment type: Bank Transfer</span>
                                </div>

                                <div className='w-full flex flex-col md:flex-row justify-between items-start gap-2'>
                                    <div className='w-full flex flex-col gap-1 text-gray-700'>
                                        <span className='text-xs'>Payer Name: Administrator</span>
                                        <span className='text-xs'>Email: email@communitylawyer.net</span>
                                        <span className='text-xs'>Phone Number: +234812345678</span>
                                        <span className='text-xs'>Address: 1, Address str, Claw</span>
                                    </div>
                                
                                    <div className='ml-auto w-full flex flex-col gap-1 text-gray-700'>
                                        <span className='text-xs'>Name: {invoiceData.name}</span>
                                        <span className='text-xs'>Bank Name: {invoiceData.bankName}</span>
                                        <span className='text-xs'>Account Number: {invoiceData.accountNumber}</span>
                                        <span className='text-xs'>Date: {invoiceData.currentDate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <Table>
                                    <TableHeader>
                                        <TableRow className='bg-primary'>
                                            <TableHead className="">Services</TableHead>
                                            <TableHead>Duration</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead className="text-right">Total</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-[.9em] text-gray-500">{invoiceData.type} - {invoiceData.billingCycle}</TableCell>
                                            <TableCell className='text-[.9em] text-gray-500'>
                                                {invoiceData.billingCycle === 'Biannual'
                                                    ? ('30 days')
                                                    : ('365 days')
                                                }
                                            </TableCell>
                                            <TableCell className='text-[.9em] text-gray-500'>{invoiceData.price}</TableCell>
                                            <TableCell className="text-right">{invoiceData.price}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className='w-full'>
                                <div className='bg-background flex justify-between items-center w-full md:w-[50%] ml-auto rounded-md px-4 py-2'>
                                    <span className='text-[.7em] text-gray-600'>Total</span>
                                    <span className='text-[.9em] text-gray-800'>{invoiceData.price}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-4 mt-6">
                            <button
                                onClick={handleDownloadPDF}
                                className="col-span-1 text-[.9em] bg-background text-primary px-4 py-2 md:py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Download PDF
                            </button>
                            <button
                                onClick={() => setCurrentStep(2)}
                                className="col-span-2 text-[.9em] bg-black text-white px-4 py-2 md:py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                I Have Made Payment
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="bg-background rounded-xl text-center p-4 md:p-12 flex flex-col items-center justify-center gap-2 md:gap-4">
                        <p className="text-2xl font-semibold">Thanks for completing your payment!</p>
                        <span className='w-[80%] text-[.9em] font-light text-gray-600 text-center'>
                            Please upload your payment receipt to verify your transaction
                        </span>
                        <div className='w-full flex items-center justify-center gap-2 md:gap-4'>
                            <button
                                onClick={() => setCurrentStep(3)}
                                className="mt-6 text-[.8em] bg-white text-primary px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setCurrentStep(3)}
                                className="mt-6 text-[.8em] bg-black text-white px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Upload Receipt
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="p-2 flex flex-col gap-2 md:gap-4">
                        <h2 className="text-2xl font-semibold mb-4">Upload file</h2>
                        <div
                            onDrop={handleDragDrop}
                            onDragOver={(e: React.DragEvent) => e.preventDefault()}
                            onClick={() => document.getElementById("fileInput")?.click()}
                            className="border-2 border-dashed bg-background border-gray-300 p-8 rounded-lg cursor-pointer hover:border-primary transition-colors"
                            role="button"
                            tabIndex={0}
                        >
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={handleFileSelect}
                                id="fileInput"
                                className="hidden"
                            />
                            <div className='w-full md:py-12 flex flex-col gap-2 items-center justify-center'>
                                <DndIcon/>
                                <p className="text-gray-600 text-center w-full">
                                    Drag and drop file here or 
                                    <span className='hover:text-primary underline'> Choose file</span>
                                </p>
                            </div>
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <span className='text-[.7em] text-gray-500'>Supported format: PDF, PNG or JPEG format</span>
                            <span className='text-[.7em] text-gray-500'>Maximum size: 25MB</span>
                        </div>
                        {uploadedFiles.length > 0 && (
                            <div className="mt-6 space-y-4">
                                {uploadedFiles.map((fileUpload, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">{fileUpload.file.name}</span>
                                            <span className="text-sm text-gray-600">{fileUpload.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full transition-all duration-500"
                                                style={{ width: `${fileUpload.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className='flex justify-end items-center gap-2 w-full'>
                            <button
                                className="mt-6 text-[.8em] bg-white text-primary px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setCurrentStep(4)}
                                className="mt-6 text-[.8em] bg-black text-white px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Submit Receipt
                            </button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="p-4 rounded-xl flex flex-col gap-2 md:gap-4 bg-background">
                        <h2 className="text-2xl text-center font-semibold mb-4">Upload Successful</h2>
                        <div className='w-full flex flex-col items-center justify-center gap-2 md:gap-4'>
                            <CircleCheck className='w-20 h-20 md:w-40 md:h-40 fill-white text-background'/>
                            <p className="text-xl text-center text-gray-600 font-semibold">Your receipt has been uploaded successfully</p>
                            <span className='w-full text-[.9em] font-light text-gray-600 text-center'>
                                We will verify your payment and notify you once it's confirmed. This process may take up to 24 hours.
                            </span>
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="mt-6 text-[.8em] bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Card className="w-[350px] sm:w-[500px] lg:w-[800px] mx-auto bg-transparent border-none shadow-none p-3 rounded-lg">
            {renderStepContent()}
        </Card>
    );
};

const LoadingState: React.FC = () => (
    <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
);

const Invoice: React.FC = () => {
    return (
        <Suspense fallback={<LoadingState />}>
            <DialogContent className='bg-white flex items-center justify-center helvetica'>
                <InvoiceContent />
            </DialogContent>
        </Suspense>
    );
};

export default Invoice;