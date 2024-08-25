import { CodeXml, Github, Linkedin, MoveUpRight } from 'lucide-react'

import { useMainHeight } from '@/hooks/useMainHeight'

export function Historia() {
  const mainHeight = useMainHeight(180)

  return (
    <>
      <main
        style={{ maxHeight: mainHeight }}
        className={`flex-1 overflow-y-auto`}
      >
        <header className="sticky top-0 z-10 border-b border-[#e9b874] border-opacity-30 bg-aside-bg shadow-xl shadow-[#010a13]">
          <h1 className="text-4xl font-semibold uppercase text-amber-50">
            Meu nome é Tiago Lacerda Ferreira
          </h1>
          <div className="flex gap-2">
            <span className="mb-4 text-lg text-[#efe8d186]">
              Campina Grande-PB - 20/08/2024
            </span>
            <a
              href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/"
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:text-[#f1ede1]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/tiago-forward"
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:text-[#f1ede1]"
            >
              <Github size={18} />
            </a>
          </div>
        </header>
        <article className="md:w-2/5">
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex">
              <CodeXml className="mr-2" />
              <span className="text-xl text-amber-50">
                Sou desenvolvedor frontend
              </span>
              <CodeXml className="ml-2" />
            </div>
            <p className="ml-8 text-lg text-amber-50">
              Apaixonado por computadores desde os meus 12 anos. Desde então,
              sempre me encantei ao ver um site bonito e bem estilizado na web,
              entre outros layouts. Durante minha formação em Análise e
              Desenvolvimento de Sistemas, tive a oportunidade de conhecer a
              programação, e a área de front-end tem se tornado cada vez mais
              apaixonante para mim. Quero me tornar um bom programador e estou
              sempre aberto, buscando adquirir novos conhecimentos.
            </p>
            <h2 className="ml-8 border-b border-[#e9b874] border-opacity-30 pb-3 text-4xl font-semibold uppercase text-amber-50">
              Objetivo
            </h2>
            <p className="ml-8 text-lg text-amber-50">
              Busco oportunidade como Desenvolvedor Web, estou aberto a aprender
              qualquer linguagem que a mim for sugerido pela empresa em que eu
              atuar. Tenho habilidades técnicas com HTML, CSS, JavaScript, mas
              especializado em React com TypeScript. Estou estudando NextJs e
              Designer System. Pretendo estudar também brevemente o NodeJs. Sigo
              realizando projetos pessoais, projetos de cursos e alguns
              desafios, utilizando plataformas e ferramentas como: GitHub, Git,
              Figma e VSCode.
            </p>
            <h2 className="ml-8 border-b border-[#e9b874] border-opacity-30 pb-3 text-4xl font-semibold uppercase text-amber-50">
              Experiência profissional
            </h2>
            <p className="ml-8 text-lg text-amber-50">
              Tenho experiência profissional como atendimento telemarketing e
              principalmente como secretário médico, onde adquiri maior parte de
              todas as minhas competências pessoais, como, trabalho em equipe,
              liderança, facilidade em se comunicar, bom ouvinte, disciplinado,
              empatia e digitação onde passei maior parte do meu tempo.
            </p>
            <p className="ml-8 text-lg text-amber-50">
              Fico disponível para batermos um papo para falar mais sobre minhas
              habilidades e experiências!
            </p>
            <div>
              <div className="ml-8 flex items-center text-lg text-cyan-600 hover:text-cyan-100">
                <a
                  href="mailto:devtiagoforward@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  devtiagoforward@gmail.com
                </a>
                <MoveUpRight size={14} />
              </div>
              <div className="ml-8 flex items-center text-lg text-cyan-600 hover:text-cyan-100">
                <a
                  href="https://wa.me/5583986236928"
                  target="_blank"
                  rel="noreferrer"
                >
                  (83) 986236928
                </a>
                <MoveUpRight size={14} />
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
