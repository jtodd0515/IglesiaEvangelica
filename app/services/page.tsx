import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Horarios de servicio</h1>
      <p className="text-2xl font-bold text-black dark:text-zinc-50">Ven y adora juntos</p>
        <br />
        <h2 className="text-xl font-bold text-black dark:text-zinc-50">Domingo</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">3:00 pm - 5:00 pm</p>
        <h2 className="text-xl font-bold text-black dark:text-zinc-50">Miércoles</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">7:00 pm - 10:00 pm</p>
        <h2 className="text-xl font-bold text-black dark:text-zinc-50">Viernes</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">7:00 pm - 9:00 pm</p>
        <Image src="/sanctuary.jpg" alt="sanctuary" width={400} height={400} className="mt-8" />
    </div>
  );
}
