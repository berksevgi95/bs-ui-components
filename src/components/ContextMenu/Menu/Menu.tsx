import React from 'react';
import { IComponentProps } from "../../../utils";
import CloseIcon from '../../../assets/icons/right-icon.svg'

import './Menu.scss'

export interface IMenuProps
    extends React.ComponentProps<'ul'>, IComponentProps {
    items: any,
    coord: any,
    setCoord: any
}


const Menu: React.FC<IMenuProps> = React.forwardRef(({
    items,
    coord,
    setCoord,
}, ref) => {
    const [childCoord, setChildCoord] = React.useState(null);

    const handleClickItem = (onClick) => (e) => {
        e.stopPropagation()
        setCoord(null);
        if (onClick) {
            onClick(e)
        }
    }

    const handleOnMouseEnter = (e) => {
        const rect = (e.target as any).getBoundingClientRect();
        setChildCoord({
            left: rect.left + rect.width,
            top: rect.top
        })
    }

    const handleOnMouseLeave = () => {
        setChildCoord(null)
    }

    return (
        <ul
            ref={ref}
            className="bs bs-contextmenu"
            style={{
                ...coord,
            }}
        >
            {items &&
                items.length > 0 &&
                items.map((item, index) => item.children ? (
                    <li
                        key={`${item.title}${index}`}
                        className="bs-menu-item"
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    >
                        <span>{item.title}</span>
                        <img
                            src={CloseIcon}
                            alt="close-icon"
                        />
                        {childCoord && (
                            <Menu
                                items={item.children}
                                coord={childCoord}
                                setCoord={setCoord}
                            />
                        )}
                    </li>
                ) : (
                    <li
                        key={`${item.title}${index}`}
                        className="bs-menu-item"
                        onClick={handleClickItem(item.onClick)}
                    >
                        <span>{item.title}</span>
                    </li>
                ))}
        </ul>
    )
})

export default Menu;