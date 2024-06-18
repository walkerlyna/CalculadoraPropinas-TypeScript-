import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <>
      <button className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between">

        <p>{item.name}</p>
        <p className=" text-orange-800 text-lg font-black">${item.price}</p>
      </button>
    </>
  )
}
