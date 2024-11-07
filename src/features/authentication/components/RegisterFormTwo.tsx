"use client";
import React from "react";
import {Button} from "@app/components/base/button";
import {Input} from "@app/components/base/input";
import {Checkbox} from "@app/components/base/checkbox";
import {useRegisterStore} from "@app/stores/useRegisterStore";
import {RegisterFormTwoDto, registerFormTwoSchema} from "@app/features/authentication";
import {DForm} from "@app/components/DForm";
import {useRouter} from "next/navigation";
import {useRegister} from "@app/lib/auth";

interface FormTwoProps {
  onBack: () => void;
}

const RegisterFormTwo: React.FC<FormTwoProps> = ({ onBack }) => {
  const router = useRouter();
  const registerMutation = useRegister();
  const { updateFormTwoData, getCombinedData, formTwoData } = useRegisterStore();

  const onSubmit = (data: RegisterFormTwoDto) => {
    updateFormTwoData(data);

    const combinedData = getCombinedData();

    const registrationData = {
      ...combinedData,
      accept_terms_and_condition: combinedData.accept_terms_and_condition === 'on' ? 1 : 0,
    };

    registerMutation.mutate(registrationData);

    if (registerMutation.isSuccess) {
      router.push("/auth/login");
    }
  };

  return (
    <div className="flex justify-center mt-10 text-white mb-10 px-8">
      <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
        <div className="flex items-center justify-between mt-3 px-5">
          <p className="cursor-pointer" onClick={onBack}>
            Back
          </p>
          <p className="hidden sm:block text-3xl text-white">2/2</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/logo.svg" alt="Logo" className="mt-5 sm:mt-0" />
          <div className="">
            <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">
              Sign Up
            </h1>
            <div className="flex flex-col items-center">
              <DForm<RegisterFormTwoDto, typeof registerFormTwoSchema> id='register-form-two' schema={registerFormTwoSchema} onSubmit={onSubmit}  options={{ defaultValues: formTwoData }}>
                {({register,formState:{errors}})=>(
                    <>
                      <div className="mb-4 flex items-center sm:flex flex-col sm:flex-row sm:justify-between gap-4">
                      <select {...register('country_code')} className="w-[276px] sm:w-[192px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70">
                        <option value="" className="text-white text-opacity-70">
                          Country
                        </option>
                        <option value="uk">United Kingdom</option>
                        <option value="NGA">Nigeria</option>
                      </select>
                      <select {...register('state_code')} className="w-[276px] sm:w-[192px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none sm:mt-0">
                        <option value="" className="text-white text-opacity-70">
                          State
                        </option>
                        <option value="Ogun">Ogun</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Ekiti">Ekiti</option>
                      </select>
                        {errors.country_code && <p className="text-red-500">{errors.country_code.message}</p>}
                        {errors.state_code && <p className="text-red-500">{errors.state_code.message}</p>}
                      </div>
                      <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Address"
                            {...register('address')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

                      </div>
                      <div className="mb-4">
                        <select {...register('institution_type')} className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none">
                          <option value="us" className="text-white text-opacity-70">
                            Institution Type
                          </option>
                          <option value="Law School">Law School</option>
                          <option value="University">University</option>
                        </select>
                        {errors.institution_type && <p className="text-red-500">{errors.institution_type.message}</p>}
                      </div>
                      <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Institution"
                            {...register('institution')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.institution && <p className="text-red-500">{errors.institution.message}</p>}

                      </div>
                      <div className="mb-4">
                        <Input
                            type="text"
                            {...register('year_of_admission')}
                            placeholder="Year of Admission (optional)"
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.year_of_admission && <p className="text-red-500">{errors.year_of_admission.message}</p>}
                      </div>

                      <div className="mb-4 flex gap-2 max-w-[270px] sm:max-w-[390px]">
                        <Checkbox className="w-4 h-4 mt-1 rounded" {...register('accept_terms_and_condition')} />
                        <p className="text-xs text-white text-opacity-70">
                          I hereby accept the Terms and Conditions abiding the law
                          students account and acknowledge that the details provided
                          above are valid and accurate.
                        </p>
                        {errors.accept_terms_and_condition && <p className="text-red-500">{errors.accept_terms_and_condition.message}</p>}
                      </div>
                      <div className="mb-4 flex flex-col items-center">
                        <Button
                            variant="default"
                            size="default"
                            type={"submit"}
                            className="bg-white text-black text-opacity-70 w-[149px] sm:w-[313px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl font-semibold mt-3"
                        >
                          Create Account
                        </Button>
                      </div>

                    </>
                )}
              </DForm>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormTwo;
