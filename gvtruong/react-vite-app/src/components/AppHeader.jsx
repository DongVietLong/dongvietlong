import IconNavBar from "./IconNavBar";

export default function AppHeader() {
  const navbarIcons = [
    "fa-solid fa-house",
    "fa-solid fa-user-group",
    "fa-solid fa-backward-step",
    "fa-solid fa-people-group",
    "fa-solid fa-gamepad",
    "fa-solid fa-bars",
  ];

  return (
    <header className="header">
      <div className="container container-fix">
        <div className="header__logo-and-search">
          <a href="#">
            <img
              className="header__logo-facebook"
              src="https://rgl.mobi/ZjKtW"
              alt="logo facebook"
            />
          </a>
          <div className="header__search">
            <i className=" header__search-icon fa-solid fa-magnifying-glass"></i>
            <input
              className="header__search-input p-0 border-0"
              type="text"
              placeholder="Tìm kiếm trên Facebook"
            />
          </div>
        </div>
        <div className="header__navbar-list">
          {navbarIcons.map((iconName, index) => {
            if (index % 2 !== 0) {
              return <IconNavBar classIcon={iconName} link="/abc" />;
            }
            return null;
          })}
        </div>
        <div className="header__navbar-user d-none d-lg-flex">
          <a className="header__navbar-user-link" href="#">
            <i className="header__navbar-user-link-icon fa-solid fa-bars"></i>
          </a>
          <a className="header__navbar-user-link" href="#">
            <i className="header__navbar-user-link-icon fa-brands fa-facebook-messenger"></i>
          </a>
          <a className="header__navbar-user-link" href="#">
            <i className="header__navbar-user-link-icon fa-solid fa-bell"></i>
          </a>
          <a className="header__navbar-user-avatar" href="#">
            <img
              className="header__avatar"
              src="https://rgl.mobi/ZjKtW"
              alt="avatar facebook"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
