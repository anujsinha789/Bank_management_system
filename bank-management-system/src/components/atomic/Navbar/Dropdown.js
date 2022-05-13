/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
	depthLevel += 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
	return (
		<ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
			{submenus.map((submenu, index) => (
				<MenuItems items={submenu} key={index} depthLevel={depthLevel} />
			))}
		</ul>
	);
};

export default Dropdown;
