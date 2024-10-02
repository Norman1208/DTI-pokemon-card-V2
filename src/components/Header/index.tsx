import { FC } from "react";
import logo from '../../assets/imgs/logo.png';
import search from '../../assets/imgs/search.png';


const Header: FC = () => {

    return (
        <>
            <div className="header-container flex gap-[60%]">
                <img src={logo} alt="logo" />
                <img src={search} alt="search" className="object-contain"/>
            </div>
        </>
    );
}

export default Header;