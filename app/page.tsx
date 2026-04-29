import Image from "next/image";
import dynamic from 'next/dynamic';

const WindowSizeDisplay = dynamic(() => import('@/components/WindowSizeDisplay'), { ssr: false });

export default function Home() {
  return (
    <div>
    <main>
      <WindowSizeDisplay />
      {/* ... */}
    </main>

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <Image
              className="logo"
              src="/images/churchLogo.jpg"
              alt="church logo"
              width={200}
              height={200}
              priority
            />
            <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
              <h1 className="text-4xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">
                Iglesia Evangelica de Burlington
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Bienvenidos a Evangel Church Burlington. Somos Una Iglesia Que Cree En El Padre Hijo y El Espíritu Santo
                </p>
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Visita nuestra página de {" "}
                  <a
                    href="https://www.facebook.com/people/Iglesia-Evang%C3%A9lica-de-Burlington/61572259824320/"
                    className="font-medium text-zinc-950 dark:text-zinc-50"
                  >
                    Facebook
                  </a>{" "}
                o llámanos al (919) 730-2729.
              </p>
            </div>
          </main>
        </div>
    </div>
  );
}
