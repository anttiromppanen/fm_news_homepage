import menuCloseIcon from "../../assets/images/icon-menu-close.svg";

function MenuItem({ text }: { text: string }) {
  return (
    <li>
      <button type="button" className="w-full py-4 text-left">
        {text}
      </button>
    </li>
  );
}

interface Props {
  handleClick: () => void;
}

function MobileMenu({ handleClick }: Props) {
  return (
    <div id="mobile-nav">
      <div
        id="mobile-menu"
        className="bg-userMobileMenuBg fixed right-0 top-0 flex h-[100dvh] w-full justify-end"
      >
        <div className="relative h-full w-2/3 bg-userOffWhite">
          <button
            type="button"
            onClick={handleClick}
            className="absolute right-5 top-7"
          >
            <img src={menuCloseIcon} alt="Mobile menu close icon" />
          </button>
          <nav>
            <ul className="mt-36 pl-6 text-xl text-userVeryDarkBlue">
              <MenuItem text="Home" />
              <MenuItem text="New" />
              <MenuItem text="Popular" />
              <MenuItem text="Trending" />
              <MenuItem text="Categories" />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
