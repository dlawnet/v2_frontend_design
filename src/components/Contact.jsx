import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="bg-[url('/hero.svg')] bg-no-repeat bg-cover py-8 md:px-14 lg:px-32 flex flex-col justify-center items-center mx-auto">
          <div className="md:flex flex-col justify-center items-center">
            <h1 className="md:text-[320%] text-[35px] sm:mt-4 font-bold leading-tight pb-6 md:px-36 px-10 py-14 md:py-6 text-[var(--secondary-color)] text-center">
              Contact Us
            </h1>

            <div>
              <div className="bg-white md:p-4 mx-6 p-2 rounded-xl">
                <h1 className="font-semibold text-xl text-center">
                  Fill the form
                </h1>
                <div className="space-y-4 p-6">
                  <input
                    type="text"
                    placeholder="Email or Phone No"
                    className="p-2 border-black border w-full"
                  />
                  <textarea
                    placeholder="Question"
                    className="p-2 h-[10rem] border-black border w-full"
                  />
                </div>

                <div className="px-3 text-center rounded-xl mx-6 py-3 bg-[var(--primary-color)] text-white">
                  Submit
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
