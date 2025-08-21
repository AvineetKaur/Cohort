export function InputBox({ label, placeholder, onChange }) {
    return (<div>
        <div className="text-sm text-left py-2 font-semibold">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} type="text" className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
    )
}