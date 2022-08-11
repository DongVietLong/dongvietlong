export default function IconNavBar({ classIcon, link = "#" }) {
  return (
    <a className="header__navbar-list-link d-none d-sm-block" href={link}>
      <i className={classIcon}></i>
    </a>
  );
}
