import { CodeXml, Github, Linkedin, MoveUpRight } from 'lucide-react'

import Tiago1 from '@/assets/imageProfile/Tiago 1.jpg'
import Tiago2 from '@/assets/imageProfile/Tiago 2.jpg'
import Tiago3 from '@/assets/imageProfile/Tiago 3.jpg'
import { useMainHeight } from '@/hooks/useMainHeight'
import { ImageProfile } from './components/imageProfile'
import { useEffect, useState } from 'react'

export function Historia() {
  const mainHeight = useMainHeight(180)
  const [isLoadingImage, setIsLoadingImage] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoadingImage(true)
    }

    loadData()
  }, [])

  return (
    <>
      <main
        style={{ maxHeight: mainHeight }}
        className={`flex-1 overflow-y-auto`}
      >
        <header className="sticky top-0 z-10 border-b border-[#e9b874] border-opacity-30 bg-aside-bg shadow-xl shadow-[#010a13]">
          <h1 className="text-4xl font-semibold uppercase text-client-TextSecondary">
            Meu nome é Tiago Lacerda Ferreira
          </h1>
          <div className="flex gap-2">
            <span className="mb-4 text-lg text-client-Tertiary">
              Campina Grande-PB - 20/08/2024
            </span>
            <a
              href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/"
              target="_blank"
              rel="noreferrer"
              className="duration-300 text-client-AnchorIconMedia hover:text-client-AnchorIconMediaHover"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/tiago-forward"
              target="_blank"
              rel="noreferrer"
              className="duration-300 text-client-AnchorIconMedia hover:text-client-AnchorIconMediaHover"
            >
              <Github size={18} />
            </a>
          </div>
        </header>
        <article className="md:w-2/5">
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex">
              <CodeXml className="mr-2" />
              <span className="text-xl text-client-TextSecondary">
                Sou desenvolvedor frontend
              </span>
              <CodeXml className="ml-2" />
            </div>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Apaixonado por computadores desde os meus 12 anos. Desde então,
              sempre me encantei ao ver um site bonito e bem estilizado na web,
              entre outros layouts. Durante minha formação em Análise e
              Desenvolvimento de Sistemas, tive a oportunidade de conhecer a
              programação, e a área de front-end tem se tornado cada vez mais
              apaixonante para mim. Quero me tornar um bom programador e estou
              sempre aberto, buscando adquirir novos conhecimentos.
            </p>
            <h2 className="ml-8 border-b border-[#e9b874] border-opacity-30 pb-3 text-4xl font-semibold uppercase text-client-TextSecondary">
              Objetivo
            </h2>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Busco oportunidade como Desenvolvedor Web, estou aberto a aprender
              qualquer linguagem que a mim for sugerido pela empresa em que eu
              atuar. Tenho habilidades técnicas com HTML, CSS, JavaScript, mas
              especializado em React com TypeScript. Estou estudando NextJs e
              Designer System. Pretendo estudar também brevemente o NodeJs. Sigo
              realizando projetos pessoais, projetos de cursos e alguns
              desafios, utilizando plataformas e ferramentas como: GitHub, Git,
              Figma e VSCode.
            </p>
            <h2 className="ml-8 border-b border-[#e9b874] border-opacity-30 pb-3 text-4xl font-semibold uppercase text-client-TextSecondary">
              Experiência profissional
            </h2>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Tenho experiência profissional como atendimento telemarketing e
              principalmente como secretário médico, onde adquiri maior parte de
              todas as minhas competências pessoais, como, trabalho em equipe,
              liderança, facilidade em se comunicar, bom ouvinte, disciplinado,
              empatia e digitação onde passei maior parte do meu tempo.
            </p>
            <p className="ml-8 text-lg text-client-TextSecondary">
              Fico disponível para batermos um papo para falar mais sobre minhas
              habilidades e experiências!
            </p>
            <div>
              <div className="ml-8 flex items-center text-lg text-client-TextAnchor hover:text-client-TextAnchorHover">
                <a
                  href="mailto:devtiagoforward@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  devtiagoforward@gmail.com
                </a>
                <MoveUpRight size={14} />
              </div>
              <div className="ml-8 flex items-center text-lg text-client-TextAnchor hover:text-client-TextAnchorHover">
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
        <section aria-labelledby="news-blocks" className="mt-auto pb-8">
          {isLoadingImage ? (
            <nav className="ml-8">
              <ul className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <li className="group relative">
                  <a
                    href="http://localhost:5173/src\assets\imageProfile\Tiago 1.jpg"
                    target="_blank"
                    className="flex flex-col gap-2"
                    rel="noreferrer"
                  >
                    {isLoadingImage && (
                      <ImageProfile
                        image={{
                          id: 1,
                          label: 'Tiago',
                          url: Tiago1
                        }}
                      />
                    )}
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="http://localhost:5173/src\assets\imageProfile\Tiago 2.jpg"
                    target="_blank"
                    className="flex flex-col gap-2"
                    rel="noreferrer"
                  >
                    {isLoadingImage && (
                      <ImageProfile
                        image={{
                          id: 2,
                          label: 'Lacerda',
                          url: Tiago2
                        }}
                      />
                    )}
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="http://localhost:5173/src\assets\imageProfile\Tiago 3.jpg"
                    target="_blank"
                    className="flex flex-col gap-2"
                    rel="noreferrer"
                  >
                    {isLoadingImage && (
                      <ImageProfile
                        image={{
                          id: 3,
                          label: 'Ferreira',
                          url: Tiago3
                        }}
                      />
                    )}
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <div className="flex items-center justify-center">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
