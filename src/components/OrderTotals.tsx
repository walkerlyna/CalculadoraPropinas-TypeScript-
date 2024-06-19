import { useMemo } from "react"
import { OrderItem } from "../types"
import formatCurrency from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    guardarOrden: () => void
}

export default function OrderTotals({ order, tip, guardarOrden }: OrderTotalsProps) {

    const subtotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const propina = useMemo(() => subtotal * tip, [tip, order])

    const total = useMemo(() => subtotal + propina, [tip, order])

    return (
        <>
            <div className=" space-y-2">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotal)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(propina)}</span>
                </p>

                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black text-white font-bold p-2 uppercase transition-colors ease-in-out 
                hover:bg-white hover:text-black hover:outline hover:outline-2 
                disabled:bg-black disabled:text-white disabled:opacity-20
                disabled:hover:outline-none"
                disabled={total === 0}
                onClick={guardarOrden}
            >
                Guardar orden
            </button>

        </>
    )
}
