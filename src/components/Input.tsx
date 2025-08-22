interface InputProps {
  name: string;
  type: string;
  label: string;
}
export default function Input({ name, type, label }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="pr-2">{label}</label>
      <input
        type={type}
        name={name}
        className="bg-[#F8FAFB] px-3 outline-0 border-0  rounded-md h-10 no-spinner w-full  focus:border-0  focus:outline-5 outline-[#c0f6ef] transition-all duration-300"
      />
    </div>
  );
}
