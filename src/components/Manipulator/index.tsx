import { FC } from "react";
import { TbColumns1 } from "react-icons/tb";
import { TbColumns2 } from "react-icons/tb";

const Manipulator: FC = () => {

    return (
        <div>
            <div className="sort-dropdown">
                <select id="sortBy">
                    <option value="default">Sort by</option>
                    <option value="name">Name</option>
                </select>
            </div>

            <div>
                <div><TbColumns1 /></div>
                <div><TbColumns2 /></div>
            </div>
        </div>
    );
}

export default Manipulator;