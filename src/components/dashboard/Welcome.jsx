import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="md:px-14 px-8">
      <div className="text-center">
        <h1 className="md:text-[32px] text-[25px] font-semibold">Welcome to</h1>

        <div className="flex justify-center items-center gap-3">
          <img
            src="/logo.svg"
            alt="logo"
            className="md:w-[67px] md:h-[67px] w-[60px] p-2"
          />
          <h1 className="md:text-[45px] text-[30px] font-semibold text-[var(--secondary-color)]">
            DLawNet
          </h1>
        </div>
      </div>
      <div className="space-y-3 my-8">
        <h1 className="md:text-2xl text-lg">Hello, User</h1>
        <p className="md:w-[95%] text-justify md:text-start">
          We’re excited to have you with us and can’t wait for you to discover
          everything we have in store. Whether you’re here to learn, grow, or
          connect, you&apos;re in the right place. Ready to get started?
        </p>
      </div>
      <div className="">
        <Link
          to={"/"}
          className="px-4 py-4 text-sm md:text-base rounded-md bg-[var(--primary-color)] text-[var(--text-color)]"
        >
          Activate your account and get started
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
