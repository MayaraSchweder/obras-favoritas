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
              src="/penelope.jpg"
              alt="penelope"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-lg font-bold">
                O unico destino dos vilões é a morte
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Eu vou recomeçar até que o destino dessa vilã... Não seja a morte. Nascida e criada como filha ilegítima de uma família rica e dona de conglomerado, ela finalmente conseguiu escapar daquela casa infernal, mas então... acabou sendo transportada para um jogo de simulação de relacionamento e virou a vilã, Penelope Eckhart. Se ela falhar em conquistar um dos cinco personagens principais antes da protagonista do jogo retornar, seu destino será apenas a morte! Em um jogo de vida ou morte, quem será o rapaz que Penelope escolherá?
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/arthur.jpg"
              alt="The Beginning After the End"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-lg font-bold">
                The Beginning After the End
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Após uma morte misteriosa, Rei Grey renasce como Arthur Leywin no continente mágico de Dicathen. Embora ele comece em sua segunda vida como um bebê, sua sabedoria da vida anterior permanece. Ele começa a dominar a magia e a forjar seu próprio caminho com o passar dos anos, buscando corrigir os erros de sua vida passada
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