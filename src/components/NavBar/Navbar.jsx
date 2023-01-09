import React,{useState} from "react";
import nav from "./navbar.module.scss";
import pic from "./pic.jpg";
import { BsSun } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <div className={nav.c1}>
        <div className={nav.logo}>QueryStore</div>
        <div className={nav.search}>
          <span>Search items</span>
          <CiSearch size={20} />
        </div>
      </div>

      <div className={nav.right}>
        <ul className={nav.c2}>
          <span className={nav.btn}>
            Discover
            <MdKeyboardArrowDown />
          </span>
          <span>Help center</span>
        </ul>

        <div className={nav.line}></div>
        <div className={nav.c3}>
          <div>
            <BsSun size={28} />
          </div>
          <div className={nav.alert}>
            <IoNotificationsOutline size={28} />
          </div>

          <button className={nav.btn2}>Create</button>
          <span
            className={nav.profile}
            style={{ backgroundImage: `url(${pic})` }}
          ></span>
        </div>
      </div>
      {/*hamburber*/}
      <div onClick={() => setActive(!active)} className={nav.wrapper}>
        <div className={active ? nav.activeHamburger : nav.hamburger} />
      </div>
    </header>
  );
}

export default Navbar;
