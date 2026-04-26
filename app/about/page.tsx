import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Quiénes Somos</h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400">Estamos ubicados en Burlington, Carolina del Norte. Nuestra misión es servir a nuestra comunidad y preparar a las personas para follow the teachings of Jesus Christ by providing a place of worship and fellowship.</p>
      <Image src="/images/pastoradolfo.jpg" alt="Pastor Adolfo" width={400} height={400} className="mt-8" />
    </div>
  );
}
