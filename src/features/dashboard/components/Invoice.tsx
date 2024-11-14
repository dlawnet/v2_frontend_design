'use client';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Card } from "@app/components/base/card";
import { CircleCheck, Loader2 } from "lucide-react";
import Image from 'next/image';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@app/components/base/select";

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

interface SubscriptionType {
    type: string;
    price: string;
    billingCycle: string;
}

interface FileUpload {
    file: File;
    progress: number;
}

type Step = 1 | 2 | 3 | 4 | 5;

const subscriptionTypes: SubscriptionType[] = [
    { type: "Basic Plan", price: "$99", billingCycle: "Monthly" },
    { type: "Pro Plan", price: "$199", billingCycle: "Monthly" },
    { type: "Enterprise Plan", price: "$499", billingCycle: "Monthly" },
    { type: "Basic Plan Annual", price: "$999", billingCycle: "Annual" },
    { type: "Pro Plan Annual", price: "$1999", billingCycle: "Annual" },
    { type: "Enterprise Plan Annual", price: "$4999", billingCycle: "Annual" },
];

const InvoiceContent: React.FC = () => {; 
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedSubscription, setSelectedSubscription] = useState<SubscriptionType | null>(null);
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

    const handleSubscriptionSelect = (subscriptionType: string) => {
        const selected = subscriptionTypes.find(sub => sub.type === subscriptionType);
        if (selected) {
            setSelectedSubscription(selected);
            setInvoiceData(prev => ({
                ...prev,
                type: selected.type,
                price: selected.price,
                billingCycle: selected.billingCycle
            }));
        }
    };

    const handleContinue = () => {
        if (selectedSubscription) {
            setCurrentStep(2);
        }
    };

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
            
            if (progressCount >= 6) {
                clearInterval(interval);
                setCurrentStep(5);
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

    //THIS CREATES A UNIQUE ID FOR THE PAYMENT ---- YOU MIGHT NEED
    const invoiceIds = new Set<string>(); // Simulating a database for existing IDs

    const generateInvoiceId = (): string => {
        let id: string;
        do {
            id = `#${Math.floor(Math.random() * 1e10).toString().padStart(10, '0')}`;
        } while (invoiceIds.has(id)); // This one na to check if ID already exists in "database"

        invoiceIds.add(id); // Simulate saving ID to "database", backend bros.
        return id;
    };

    // GET CURRENT DATE - IN A FORMATTED FORMAT
    const getFormattedDate = (): string => {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
    
        return `${day} ${month}, ${year}`;
    };

    const renderStepContent = (): JSX.Element | null => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6">Select Subscription Plan</h2>
                        <div className="space-y-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subscription Type
                                </label>
                                <Select 
                                    onValueChange={handleSubscriptionSelect}
                                    value={selectedSubscription?.type || ''}
                                >
                                    <SelectTrigger className="w-full bg-white">
                                        <SelectValue placeholder="Select a subscription plan" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full bg-white">
                                        {subscriptionTypes.map((sub) => (
                                            <SelectItem key={sub.type} value={sub.type}>
                                                {sub.type} - {sub.price} ({sub.billingCycle})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {selectedSubscription && (
                                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                                    <h3 className="text-lg font-medium mb-2">Selected Plan Details</h3>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-600">
                                            Plan: {selectedSubscription.type}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Price: {selectedSubscription.price}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Billing Cycle: {selectedSubscription.billingCycle}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleContinue}
                                disabled={!selectedSubscription}
                                className={`w-full mt-6 py-3 px-4 rounded-md text-white font-medium
                                    ${selectedSubscription 
                                        ? 'bg-black hover:bg-black/90' 
                                        : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                );
            case 2:
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
                                    <h2 className='text-base font-semibold'>Invoice {generateInvoiceId()}</h2>
                                    <span className='text-xs'>Status: Pending</span>
                                    <span className='text-xs'>Subscription name: {selectedSubscription?.type}</span>
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
                                        <span className='text-xs'>Name: DLAWNET</span>
                                        <span className='text-xs'>Bank Name: LAW BANK</span>
                                        <span className='text-xs'>Account Number: 1234567890</span>
                                        <span className='text-xs'>Date: {getFormattedDate()}</span>
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
                                                {selectedSubscription?.billingCycle === 'Monthly'
                                                    ? ('30 days')
                                                    : ('365 days')
                                                }
                                            </TableCell>
                                            <TableCell className='text-[.9em] text-gray-500'>{selectedSubscription?.price}</TableCell>
                                            <TableCell className="text-right">{selectedSubscription?.price}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className='w-full'>
                                <div className='bg-background flex justify-between items-center w-full md:w-[50%] ml-auto rounded-md px-4 py-2'>
                                    <span className='text-[.7em] text-gray-600'>Total</span>
                                    <span className='text-[.9em] text-gray-800'>{selectedSubscription?.price}</span>
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
                                onClick={() => setCurrentStep(3)}
                                className="col-span-2 text-[.9em] bg-black text-white px-4 py-2 md:py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                I Have Made Payment
                            </button>
                        </div>
                    </div>
                );
            case 3:
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
                                onClick={() => setCurrentStep(4)}
                                className="mt-6 text-[.8em] bg-black text-white px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Upload Receipt
                            </button>
                        </div>
                    </div>
                );
            case 4:
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
                                onClick={() => setCurrentStep(5)}
                                className="mt-6 text-[.8em] bg-black text-white px-6 py-3 rounded-md font-medium transition-colors"
                                type="button"
                            >
                                Submit Receipt
                            </button>
                        </div>
                    </div>
                );
            case 5:
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