import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center bg-zinc-100 min-h-screen py-10">
      <main className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Animes
        </h1>

        <div className="grid grid-cols-2 gap-8">

          <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/rimuro.jpg"
              alt="Rimuru"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-lg font-bold">
                That Time I Got Reincarnated as a Slime
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Mikami Satoru, funcionário de uma megacorporação, é apunhalado por um assassino nas ruas e renasce num mundo paralelo... Mas ele renasce como um slime! Jogado neste novo mundo com o nome Rimuru, ele assume a missão de criar um mundo que seja acolhedor para todas as raças.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/chise.jpg"
              alt="The Ancient Magus' Bride"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-lg font-bold">
                The Ancient Magus' Bride
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Chise Hatori, 15 anos. Abandonada, sem esperança e sem família, ela é comprada por dinheiro - não por outra pessoa, mas por um feiticeiro inumano chamado Elias. Apesar de insegura, ela recomeça sua vida como sua aprendiz e futura esposa.Ela vai levando sua nova e pacata vida, até que um dia ela encontra um livro ilustrado japonês, que lhe fora enviado de Londres em meio a tantos outros. 
              </p>
            </div>
          </div>

        

        </div>

        <Link href="/" className="block mt-10 text-blue-600 hover:underline">
          Página inicial
        </Link>
      </main>
    </div>
  );
}