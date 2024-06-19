import formatCurrency from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: OrderItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className=" mt-10">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 last-of-type:border-b py-5" >
                        <div>
                            <p className=" text-lg">{item.name} - {formatCurrency(item.price)}</p>
                            <p className=" font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                        </div>

                        <button
                            onClick={() => removeItem(item.id)}
                            className="bg-red-600 size-8 rounded-full text-white font-black">
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
