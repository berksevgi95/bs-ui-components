import React from 'react';

import { IComponentProps } from '../../utils';

import './ContextMenu.scss';
import Menu from './Menu/Menu';

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

    return (
        <>
            {children && React.cloneElement((children as any), {
                onContextMenu: defineContextMenu
            })}
            { menuCoord && (
                <Menu
                    items={items}
                    ref={menuRef}
                    coord={menuCoord}
                    setCoord={setMenuCoord}
                />
            )}
        </>
    )
}

export default ContextMenu;
