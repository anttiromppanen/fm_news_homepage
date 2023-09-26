import retroPcImage from "../../assets/images/image-retro-pcs.jpg";
import laptopImage from "../../assets/images/image-top-laptops.jpg";
import gamingGrowthImage from "../../assets/images/image-gaming-growth.jpg";

interface ArticleProps {
  icon: string;
  articleId: string;
  heading: string;
  text: string;
}

function Article({ icon, articleId, heading, text }: ArticleProps) {
  return (
    <div className="flex gap-x-6">
      <img src={icon} alt="" className="h-[127px] w-[100px]" />
      <div className="flex flex-col justify-between">
        <p className="text-3xl font-bold text-userGrayishBlue">{articleId}</p>
        <h2 className="cursor-pointer text-lg font-bold text-userVeryDarkBlue hover:text-userSoftRed">
          {heading}
        </h2>
        <p className="text-sm text-userVeryDarkBlue">{text}</p>
      </div>
    </div>
  );
}

function ArticleSection() {
  return (
    <div className="grid w-full grid-cols-1 gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      <Article
        icon={retroPcImage}
        articleId="01"
        heading="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
      />
      <Article
        icon={laptopImage}
        articleId="02"
        heading="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
      />
      <Article
        icon={gamingGrowthImage}
        articleId="03"
        heading="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}

export default ArticleSection;
