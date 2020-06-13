import React from 'react';

import { IComponentProps, BSTheme } from '../../utils';

import './ContextMenu.scss';
import List from '../List/List';

export interface IContextMenuProps extends IComponentProps {
    items: IContextMenuItem[] | JSX.Element,
}

interface IContextMenuItem {
    icon: JSX.Element,
    title: string,
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    children?: IContextMenuItem[]
}

interface IContextMenuCoordProps {
    left: number,
    top: number,
}

const ContextMenu: React.FC<IContextMenuProps> = ({
  className,
  children,
  items,
  style,
  ...props
}) => {
    const menuRef = React.useRef<any>();
    const [menuCoord, setMenuCoord] = React.useState<IContextMenuCoordProps>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuCoord(null)
        }
    }

    const defineContextMenu = (e) => {
        e.preventDefault();
        setMenuCoord({
            left: e.clientX,
            top: e.clientY,
        })
    }

    const handleClickItem = (onClick) => (e) => {
        setMenuCoord(null);
        if (onClick) {
            onClick(e)
        }
    }

    // const renderMenu = (items, menuCoord) => {
    //     return items && menuCoord && (
    //         <List.List
    //             className={`bs-contextmenu ${className || ''}`}
    //             ref={menuRef}
    //             style={{
    //                 ...menuCoord,
    //                 ...style
    //             }}
    //         >
    //             {(items as IContextMenuItem[]).map((item, index) => item.children ? (
    //                 renderMenu(item.children, {left: 50, top: 50})
    //             ) : (
    //                 <List.Item
    //                     key={`${item.title}${index}`}
    //                     className="bs-menu-item"
    //                     theme={BSTheme.SECONDARY}
    //                     onClick={handleClickItem(item.onClick)}
    //                     onMouseEnter={(e) => }
    //                 >
    //                     {item.title}
    //                 </List.Item>
    //             ))}
    //         </List.List>
    //     )
    // }

    return (
        <>
            {children && React.cloneElement((children as any), {
                onContextMenu: defineContextMenu
            })}
            {/* {renderMenu(items, menuCoord)} */}
            {items && items instanceof Array ? menuCoord && (
                <List.List
                    className={`bs-contextmenu ${className || ''}`}
                    ref={menuRef}
                    style={{
                        ...menuCoord,
                        ...style
                    }}
                >
                    {(items as IContextMenuItem[]).map((item, index) => (
                        <List.Item
                            key={`${item.title}${index}`}
                            className="bs-menu-item"
                            theme={BSTheme.SECONDARY}
                            onClick={handleClickItem(item.onClick)}
                        >
                            {item.title}
                        </List.Item>
                    ))}
                </List.List>
            ) : menuCoord && (
                <div
                    className={`
                        bs
                        bs-contextmenu
                        ${className || ''}
                    `}
                    ref={menuRef}
                    style={{
                        ...menuCoord,
                        ...style
                    }}
                >
                    {items}
                </div>
            )}
        </>
    )
}

export default ContextMenu;
