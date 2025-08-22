interface InputProps {
  name: string;
  type: string;
  label: string;
}
export default function Input({ name, type, label }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="pr-2">{label}</label>
      <input
        type={type}
        name={name}
        className="outline-0 border-[#6c6c6c] border-1 rounded-md h-10 no-spinner w-[100%] focus:border-[#009688] transition-all duration-300"
      />
    </div>
  );
}
