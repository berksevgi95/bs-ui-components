import React from 'react'
import CloseIcon from '../../../assets/icons/right-icon.svg'
import Tree from '../Tree'

import { v1 as uuidV1 } from 'uuid';


import './Item.scss'

const Item : React.FC<any> = ({
    item,
    onChange
}) => {
    const [animationDelay, setAnimationDelay] = React.useState(false)
    const [expanded, setExpanded] =  React.useState(true)

    return (
        <li
            style={{
                listStyle: 'none',
            }}
            onDragOver={(e) => {
                e.preventDefault()
            }}
            onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation()
                var data = JSON.parse(e.dataTransfer.getData('text'))
                onChange(data, item)
            }}
            draggable
            onDragStart={(e) => {
                e.stopPropagation()
                e.dataTransfer.setData('text', JSON.stringify(item))
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: 5
            }}>
                <img
                    onClick={() => {
                        Promise.resolve(
                            animationDelay ?
                                setTimeout(() => {
                                    setAnimationDelay(!animationDelay)
                                }, 150) : 
                                setAnimationDelay(!animationDelay)
                        ).then(() => setExpanded(!expanded))
                    }}
                    src={CloseIcon}
                    alt="close-icon"
                    style={{
                        opacity: item.children && item.children.length > 0 ? 1 : '.1',
                        width: 15,
                        height: 15,
                        marginRight: 5,
                        transition: '.3s',
                        transform: !expanded && item.children && item.children.length > 0 ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                />
                <span className="bs">{item.title}</span>
            </div>

            <div
                style={{
                    height: animationDelay ? 'auto' : 0,
                    transform: !expanded ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.26s ease',
                    overflow: 'hidden',
                }}
            >
                {item.children && item.children.length > 0 && (
                    <Tree items={item.children} />
                )}
            </div>
            
        </li>
    )
}

export default Item;