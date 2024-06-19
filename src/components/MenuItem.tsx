import formatCurrency from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between items-center"
        onClick={() => addItem(item)}>

        <p>{item.name}</p>
        <p className=" text-orange-800 text-lg font-black">{formatCurrency(item.price)}</p>
      </button>
    </>
  )
}
