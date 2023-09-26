import NewsSection from "./NewsSection";
import heroImgDesktop from "../../assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "../../assets/images/image-web-3-mobile.jpg";

function HeroSection() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-4 md:gap-7 lg:grid-cols-3 lg:grid-rows-[303px_auto]">
      <img
        src={heroImgDesktop}
        alt=""
        className="hidden md:block lg:col-span-2"
      />
      <img src={heroImgMobile} alt="" className="md:hidden lg:col-span-2" />
      <NewsSection />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="mb-10 flex flex-col justify-between gap-y-6 lg:mb-0">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button
          type="button"
          className="w-fit bg-userSoftRed px-8 py-3 tracking-widest text-userOffWhite hover:bg-userVeryDarkBlue"
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
