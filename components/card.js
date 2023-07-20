export default function Card({ children }) {
  return (
    <div className="w-72 m-6 p-6 border rounded border-[#1a110a] min-h-[390px] flex flex-col items-start justify-between">
      {children}
    </div>
  );
}
