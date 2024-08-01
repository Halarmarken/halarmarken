import Image from "next/image";

export const Card = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <div className="h-48 w-full bg-slate-300">
        <Image src="" alt="Placeholder" className="w-full" />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Förening, Universitet</div>
        <p className="text-base text-gray-700">Halarmärke namn</p>
      </div>
      <div className="px-6 py-4">
        <button className="rounded-full bg-rose-500 px-6 py-3 font-bold text-white hover:bg-rose-700">
          Köp för 100€
        </button>
      </div>
    </div>
  );
};
