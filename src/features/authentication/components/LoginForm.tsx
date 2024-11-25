"use client"
import {Button} from "@app/components/base/button";
import {Checkbox} from "@app/components/base/checkbox";
import {Input} from "@app/components/base/input";
import React, {useEffect} from "react";
import {DForm} from "@app/components/DForm";
import {getAuthUser, LoginDto, loginSchema} from "@app/features/authentication";
import {useLogin} from "@app/lib/auth";
import {useRouter} from "next/navigation";

const FormOne = () => {
  const router = useRouter();
  const loginMutation = useLogin();
  useEffect(() => {
    const handleLoginSuccess = async () => {

           const authUser = await getAuthUser();
      const isAdmin = authUser.data.user_roles[0] === "admin";
        console.log("isAdmin",isAdmin)
      if (isAdmin) {
        // User is admin, proceed with navigation
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    };

    if (loginMutation.isSuccess) {
      handleLoginSuccess();
    }
  }, [loginMutation.isSuccess, router]);
  return (
    <div className="flex justify-center mt-10 text-white mb-10 px-8">
      <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
        <div className="flex flex-col items-center">
          <img src="/images/logo.svg" alt="Logo" className="mt-5" />
          <div>
            <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">
              Log In
            </h1>
            <div>
              <DForm<LoginDto, typeof loginSchema>
                  id="login-form"
                  schema={loginSchema}
                  onSubmit={async (data: LoginDto) => {
                      loginMutation.mutate(data);
                  }}>
                {({register})=>(
                    <>
                      <div className="mb-7">
                        <Input
                            type="text"
                            {...register('emailOrUsername')}
                            placeholder="Email or Phone No"
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                            type="password"
                            {...register('password')}
                            placeholder="Password"
                            className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                        />
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Checkbox id="remember" className="rounded" />
                            <label
                                htmlFor="remember"
                                className="text-sm text-white text-opacity-70"
                            >
                              Remember me
                            </label>
                          </div>
                          <a href="#" className="text-sm text-white text-opacity-70">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col items-center">
                        <Button
                            variant="default"
                            size="default"
                            disabled={loginMutation.isLoading}
                            className="bg-white text-black w-[139px] sm:w-[400px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl mt-3"
                        >
                          {loginMutation.isLoading ? "Logging in..." : "Log In"}
                        </Button>
                      </div>
                    </>
                )}

              </DForm>
            </div>
          </div>
          <div>
            <p className="text-white text-opacity-70 text-sm sm:text-lg">
              Don't have an account Yet?{" "}
              <a href="/auth/register" className="text-white">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
