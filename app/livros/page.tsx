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
              src="/hipoteses.jpg"
              alt="hipoteses"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-lg font-bold">
                A Hipótese do Amor
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência – não em algo incontrolável como o amor.

Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas.

Sem muitas opções, ela resolve inventar um namoro de mentira e, num momento de pânico, beija o primeiro homem que vê pela frente.

O problema é que esse homem é Adam Carlsen, um jovem professor de prestígio – conhecido por levar os alunos às lágrimas. Por isso, Olive fica chocada quando o tirano dos laboratórios concorda em levar adiante a farsa e fingir ser seu namorado.

De repente, seu pequeno experimento parece perigosamente próximo da combustão e aquela pequena possibilidade científica, que era apenas uma hipótese sobre o amor, transforma-se em algo totalmente inesperado
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <Image
              src="/mecanica.jpg"
              alt=" mecanica"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-lg font-bold">
                A mecânica do amor
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Bel não sabe o que fazer quando se formar no colégio e nem quer pensar no assunto. Mas quando revela um talento especial para engenharia, é incentivada por uma professora a entrar para o clube de robótica da escola. O problema é que o clube é comandado por Teo, que além de gato e popular, ainda é mega inteligente e já tem cada passo do seu brilhante futuro bem planejado.

Quando os dois se conhecem, o choque é instantâneo: eles se odeiam. Mas conforme trabalham juntos em robôs de combate, Teo logo reconhece o talento de Bel e percebe que não consegue parar de pensar na constelação de sardas no rosto da garota. E, pior ainda, se vê dedicado a aprender a discografia de Taylor Swift, de quem ela é fã.

A mecânica do amor é o primeiro livro de romance contemporâneo da autora Alexene Farol Follmuth, conhecida pelo pseudônimo de Olivie Blake, e celebra a jornada de mulheres na área da ciência e da tecnologia em um enredo envolvente e apaixonante.
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