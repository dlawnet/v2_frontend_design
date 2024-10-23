import React, {useState} from "react";
import {Button} from "@app/components/base/button";
import {Input} from "@app/components/base/input";
import {Checkbox} from "@app/components/base/checkbox";

interface FormTwoProps {
  onBack: () => void;
  onSubmit: (data: any) => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ onBack, onSubmit }) => {
  const [country, setCountry] = useState(0); // default country_id
  const [state, setState] = useState(0); // default state_id
  const [address, setAddress] = useState("");
  const [institutionType, setInstitutionType] = useState("University");
  const [institution, setInstitution] = useState("");
  const [durationOfStudy, setDurationOfStudy] = useState(1); // default value
  const [yearsInSchool, setYearsInSchool] = useState(1); // default value
  const [acceptTerms, setAcceptTerms] = useState(true);

  const handleSubmit = () => {
    if (acceptTerms) {
      onSubmit({
        country,
        state,
        address,
        institution,
        institution_type: institutionType,
        duration_of_study: durationOfStudy,
        years_in_school: yearsInSchool,
      });
    } else {
      alert("Please accept the terms and conditions");
    }
  };

  return (
      <div className="flex justify-center mt-10 text-white mb-10 px-8">
        <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
          <div className="flex items-center justify-between mt-3 px-5">
            <p className="cursor-pointer" onClick={onBack}>Back</p>
            <p className="hidden sm:block text-3xl text-white">2/2</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/logo.svg" alt="Logo" className="mt-5 sm:mt-0" />
            <div>
              <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">Sign Up</h1>
              <div className="flex flex-col items-center">
                <Input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <select
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none"
                    value={country}
                    onChange={(e) => setCountry(Number(e.target.value))}
                >
                  <option value="0">Select Country</option>
                  <option value="1">Nigeria</option>
                  <option value="2">United Kingdom</option>
                  <option value="3">United State</option>
                </select>
                <select
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none"
                    value={state}
                    onChange={(e) => setState(Number(e.target.value))}
                >
                  <option value="0">Select State</option>
                  <option value="1">Ogun</option>
                  <option value="2">Lagos</option>
                </select>
                <Input
                    type="text"
                    placeholder="Institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Input
                    type="number"
                    placeholder="Duration of Study (years)"
                    value={durationOfStudy}
                    onChange={(e) => setDurationOfStudy(Number(e.target.value))}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Input
                    type="number"
                    placeholder="Years in School"
                    value={yearsInSchool}
                    onChange={(e) => setYearsInSchool(Number(e.target.value))}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <div className="mb-4 flex gap-2 max-w-[270px] sm:max-w-[390px]">
                  <Checkbox
                      className="w-4 h-4 mt-1 rounded"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms((e.target as HTMLInputElement).checked)}
                  />
                  <p className="text-xs text-white text-opacity-70">
                    I hereby accept the Terms and Conditions abiding the law students account and acknowledge that the details provided above are valid and accurate.
                  </p>
                </div>
                <Button
                    variant="default"
                    size="default"
                    className="bg-white text-black text-opacity-70 w-[149px] sm:w-[313px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl font-semibold mt-3"
                    onClick={handleSubmit}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FormTwo;
