function DesktopMenu() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-x-6">
        <li>
          <button type="button" className="hover:text-userSoftOrange">
            Home
          </button>
        </li>
        <li>
          <button type="button" className="hover:text-userSoftOrange">
            New
          </button>
        </li>
        <li>
          <button type="button" className="hover:text-userSoftOrange">
            Popular
          </button>
        </li>
        <li>
          <button type="button" className="hover:text-userSoftOrange">
            Trending
          </button>
        </li>
        <li>
          <button type="button" className="hover:text-userSoftOrange">
            Categories
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopMenu;
