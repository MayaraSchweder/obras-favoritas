import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className = "principal" >
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

              Hoje vamos ver meu top melhores obras, porém, separadas por tipo de obra, que incluem ...
            <br/>
            <br/>
            <ul>
            <li><Link href="/anime"> Animes </Link></li>
            <li><Link href="/manhwa"> Manhwas </Link></li>
            <li><Link href="/livros"> Livros </Link></li>
            </ul>
                      <Image
                        src="/miau.jpg"
                        alt=" miau"
                        width={120}
                        height={120}
                        className="rounded-xl ml-96"
                      />
        </main>
        </div>
    </div>
    </>
  );
}
