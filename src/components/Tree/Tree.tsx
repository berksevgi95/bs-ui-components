import React from 'react';
import { IComponentProps } from '../../utils';
import Item from './Item/Item';

import { v1 as uuidV1 } from 'uuid';


import './Tree.scss'

export interface ITextareaProps extends IComponentProps {
    child: any[]
}

const Tree : React.FC<any> = React.forwardRef(({
    items
}, ref) => {
    const [_items, _setItems] = React.useState([...items]);

    React.useImperativeHandle(ref, () => ({
        getItems: () => _items
    }), [_items])


    const onChange = (sourceNode, destinationNode) => {
        const b = [..._items]
        const a = (items, source, destination) => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === destination.id) {
                    if(!items[i].children) {
                        items[i].children = []
                    }
                    items[i].children.push(source)
                } else if (items[i].children) {
                    a(items[i].children, source, destination)
                }
            }
        }
        a(b, sourceNode, destinationNode)
        _setItems(b)
    }

    return (
        <ul>
            {_items && _items.length > 0 && _items.map((item) => (
                <Item
                    key={`${item.id}`}
                    item={item}
                    onChange={onChange}
                />
            ))}
        </ul>
    )
})

export default Tree;