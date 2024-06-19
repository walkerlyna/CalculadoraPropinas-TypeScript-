import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import Propina from "./components/Propina"

function App() {

  const { order, tip, setTip, addItem, removeItem, guardarOrden } = useOrder()

  return (
    <>
      <header className=" bg-sky-400 py-4">
        <h1 className=" text-center text-2xl font-black">Calculadora de Propinas y consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto mt-7 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className=" space-y-2 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length
            ?
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <Propina
                setTip={setTip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                guardarOrden={guardarOrden}
              />
            </>
            : <p className="text-center">La orden está vacia</p>
          }

        </div>
      </main>
    </>
  )
}

export default App
