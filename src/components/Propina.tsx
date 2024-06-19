
type PropinaProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>

}

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export default function Propina({ setTip }: PropinaProps) {
    return (
        <div>
            <h3 className="font-black">Propinas:</h3>

            <form className=" space-y-1">
                {tipOptions.map(tip => (
                    <div key={tip.id} className=" flex items-center gap-2">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            onChange={e => setTip(+e.target.value)}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
