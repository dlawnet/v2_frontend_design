import {Button} from "@app/components/base/button";
import {Input} from "@app/components/base/input";
import React from "react";
import {useRegisterStore} from "@app/stores/useRegisterStore";
import {DForm} from "@app/components/DForm";
import {RegisterFormOneDto, registerFormOneSchema} from "@app/features/authentication";

const RegisterFormOne = ({ onNext }: { onNext: () => void }) => {
  const { updateFormOneData,formOneData } = useRegisterStore();
  const onSubmit = (data:RegisterFormOneDto) => {
    console.table(data);
    updateFormOneData(data);
    onNext();
  };
  return (
    <div className="flex justify-center mt-10 text-white mb-10 px-8">
      <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
        <p className="hidden sm:block text-3xl text-white text-right pr-5 pt-2">
          1/2
        </p>
        <div className="flex flex-col items-center">
          <img src="/images/logo.svg" alt="Logo" className="mt-5 sm:mt-0" />
          <div>
            <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">
              Sign Up
            </h1>
            <div>
              <DForm< RegisterFormOneDto, typeof registerFormOneSchema>
                  id="register-form-one"
                  schema={registerFormOneSchema}
                  options={{ defaultValues: formOneData }}                  onSubmit={onSubmit}>
                {({register,formState: { errors }})=>(
                    <>
                      <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="First Name"
                            {...register('first_name')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
                      </div>
                      <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Last Name"
                            {...register('last_name')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}

                      </div>
                      <div className="mb-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            {...register('email')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                      </div>
                      <div className="mb-4">
                      <select className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70" {...register('gender')}>
                        <option value="" className="text-white text-opacity-70">
                          Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                      </div>
                      <div className="mb-4">
                        <Input
                            type="tel"
                            placeholder="Phone No."
                            {...register('phone')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                      </div>
                      <div className="mb-4">
                        <Input
                            type="password"
                            {...register('password')}
                            placeholder="Password"
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                      </div>
                      <div className="mb-4">
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            {...register('password_confirmation')}
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                        {errors.password_confirmation && <p className="text-red-500">{errors.password_confirmation.message}</p>}

                      </div>
                      <div className="mb-4 flex flex-col items-center">
                        <Button
                            variant="default"
                            size="default"
                            className="bg-white text-black w-[139px] sm:w-[313px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl font-semibold mt-3"
                            type="submit"
                        >
                          Next
                        </Button>
                      </div>
                    </>
                )}
              </DForm>
            </div>
          </div>
          <div>
            <p className="text-white text-opacity-70 text-sm sm:text-lg">
              Already have an account?{" "}
              <a href="/auth/login" className="text-white">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormOne;
