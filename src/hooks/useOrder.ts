import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        
        setOrder(prevOrder => {
            const existingItem = prevOrder.find(orderItem => orderItem.id === item.id);

            if (existingItem) {
                return prevOrder.map(orderItem =>
                    orderItem.id === item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                );
            } else {
                return [...prevOrder, { ...item, quantity: 1 }];
            }
        });
        
    }

    const removeItem = (id: OrderItem['id']) => {
        setOrder(prevOrder => prevOrder.filter(orderItem => orderItem.id !== id))
    }

    const guardarOrden = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        guardarOrden
    }
}
