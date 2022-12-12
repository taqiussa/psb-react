export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-bold text-lg text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
