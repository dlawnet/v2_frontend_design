import Footer from "./Footer";
import Navbar from "./Navbar";
function About() {
  return (
    <div className="">
      <Navbar />

      <div>
        <div className="bg-[url('/hero.svg')] bg-no-repeat bg-cover py-16 md:px-14 lg:px-32 flex flex-col justify-center items-center mx-auto">
          <div className="md:flex flex-col justify-center py-8 items-center">
            <h1 className="md:text-[300%] text-[35px] sm:mt-4 font-bold lg:w-[80%] leading-tight pb-6 md:px-36 px-14 py-8 md:py-0 text-[var(--secondary-color)] text-center">
              About
            </h1>

            <p className="text-white py-3 md:text-center px-10 text-[100%] md:text-[130%]">
              To mentor and provide help to law students in subjects or courses
              where university law students and those in the law school require
              additional tutorials, research assistance and general guidance in
              preparation for examination, term papers, group assignments and
              project writings. It’s not intended to replace regular
              instructions and guide lines or teachings of their various
              universities rather to complement the works of the various
              faculties of law and law departments as the case may be. Our
              mentoring services is provided through a panel of experts
              (anonymous) consisting of eminent law professors
              (retired/serving), Senior Advocates of Nigeria, retired Justices
              of the Supreme Court, Court of Appeal, Federal High Courts, Sharia
              Court of Appeal and Senior Lawyers in the practice of law.{" "}
            </p>
            <p className="text-white py-3 md:text-center px-10 text-[100%] md:text-[130%]">
              To provide a social platform [event dairy] for law students from
              different universities to interact and share activities that
              bothers around advancing their training as upcoming professionals
              such as their moot court proceedings, symposiums, law week
              activities inclusive of law dinner etc., at no cost to the
              students and their law societies or law student union as it
              applies to each schools. The event dairy facility also enables
              individual students to post, share on this platform and other
              social media platforms, manage their personal events, receive
              notifications on upcoming events from their campus law society,
              graduation, birthdays and wedding pictures including videos,
              comments or reactions from friends and relatives.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
