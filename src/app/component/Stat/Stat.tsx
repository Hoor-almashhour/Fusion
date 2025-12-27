export default function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-2xl font-bold text-[#F9680E]">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
}