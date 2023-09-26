function NewsSection() {
  return (
    <div
      className="
        order-3 row-span-2 flex flex-col gap-y-8 bg-userVeryDarkBlue px-6 py-6 lg:order-none lg:py-9
        [&>div>h2]:mb-2
        [&>div]:border-t [&>div]:border-t-userDarkGrayishBlue [&>div]:pt-8"
    >
      <p className="text-3xl font-bold text-userSoftOrange lg:text-5xl">New</p>

      <div
        className="
          text-userGrayishBlue first-of-type:border-0 first-of-type:pt-0"
      >
        <h2 className="cursor-pointer text-lg font-bold text-userOffWhite hover:text-userSoftOrange">
          Hydrogen VS Electric Cars
        </h2>
        <p className="text-sm md:text-base">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>

      <div className="text-userGrayishBlue">
        <h2 className="cursor-pointer text-lg font-bold text-userOffWhite hover:text-userSoftOrange">
          The Downsides of AI Artistry
        </h2>
        <p className="text-sm md:text-base">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>

      <div className="text-userGrayishBlue">
        <h2 className="cursor-pointer text-lg font-bold text-userOffWhite hover:text-userSoftOrange">
          Is VC Funding Drying Up?
        </h2>
        <p className="text-sm md:text-base">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}

export default NewsSection;
