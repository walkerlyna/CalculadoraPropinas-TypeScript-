import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

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
    console.log(order)
    return {
        order,
        addItem
    }
}
