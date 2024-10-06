import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="">
      <Navbar />
      <div className="hidden bg-[url('/hero.svg')] bg-no-repeat bg-cover py-8 md:px-4 justify-around lg:px-32 md:flex items-center">
        <div className="mt-28 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252187.52231536977!2d7.154483772474067!3d9.024477265449224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1728241788714!5m2!1sen!2sng"
            className="lg:w-[30rem] w-[20rem] h-[24rem]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:flex flex-col justify-center items-center">
          <h1 className="md:text-[200%] text-[35px] sm:mt-4 font-bold leading-tight pb-6 py-14 md:py-6 text-[var(--secondary-color)]">
            Contact Us
          </h1>

          <div>
            <div className="bg-white md:p-4 mx-6 p-2 rounded-lg">
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

      <div className="bg-[url('/hero.svg')] bg-no-repeat bg-cover py-8 md:px-4 flex flex-col justify-around px-8 md:hidden items-center">
        <div className="md:flex flex-col py-6 justify-center items-center">
          <h1 className="text-[20px] text-center text sm:mt-4 font-bold leading-tight pb-6 py-14 md:py-6 text-[var(--secondary-color)]">
            Contact Us
          </h1>

          <div>
            <div className="bg-white p-4 rounded-lg">
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

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252187.52231536977!2d7.154483772474067!3d9.024477265449224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1728241788714!5m2!1sen!2sng"
            className="w-[25rem] h-[15rem] px-6"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
