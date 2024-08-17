import { SquareArrowOutUpRight } from 'lucide-react'

import { NavLinkMain } from '@/components/navLinks/navLinkMain'
import { Button } from '@/components/ui/button'

export function ClientGeral() {
  return (
    <>
      <section
        aria-labelledby="welcome-section"
        className="flex flex-col items-center md:items-start"
      >
        <header>
          <nav>
            <ul className="flex gap-4 pt-2 uppercase">
              <li>
                <NavLinkMain
                  to="/"
                  className="px-2 text-[#f1ede1] transition duration-300"
                >
                  Geral
                </NavLinkMain>
                <div className="h-px w-full [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
              </li>
              <li>
                <NavLinkMain
                  to="/github"
                  className="px-2 transition duration-300"
                >
                  GitHub
                </NavLinkMain>
              </li>
            </ul>
          </nav>
        </header>
        <article className="mt-10 flex flex-col items-start gap-4 md:mt-60 md:w-2/5">
          <h1 className="text-5xl font-bold uppercase text-amber-50">
            Seja bem vindo ao meu novo portfolio
          </h1>
          <p className="text-xl text-[#ecd58f87]">Desenvolvedor front-end</p>
          <Button asChild className="rounded-none bg-[#1e2328] px-5 pb-1">
            <a
              href="#"
              className="border-2 border-[#e9b874] uppercase tracking-widest text-[#f1ede1]"
            >
              Download CV
            </a>
          </Button>
        </article>
      </section>
      <section aria-labelledby="content-blocks">
        <nav>
          <ul className="flex flex-col items-center gap-3 md:flex-row md:items-start">
            <li className="relative w-full sm:w-80">
              <a
                href="https://github.com/tiago-forward/my-portfolio"
                target="_blank"
                className="flex flex-col gap-2"
                rel="noreferrer"
              >
                <div className="border border-black">
                  <img
                    src="https://tiago-forward.github.io/my-portfolio/src/gifs/portfolio-desenvolvimento.gif"
                    alt=""
                    className="h-52 w-full border-2 border-[#655033] sm:h-44 sm:w-80"
                  />
                </div>
                <h2 className="font-semibold">
                  Meu primeiro portfolio inicial
                </h2>
                <SquareArrowOutUpRight
                  color="#a18052"
                  size={16}
                  className="absolute right-1 top-1"
                />
              </a>
            </li>
            <li className="relative w-full sm:w-80">
              <a
                href="https://www.linkedin.com/posts/tiago-lacerda-devfrontend_reactjs-typescript-javascript-activity-7224410611177164802-qm13?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="flex flex-col gap-2"
                rel="noreferrer"
              >
                <div className="border border-black">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D22AQGvew9GlmHLiQ/feedshare-shrink_800/feedshare-shrink_800/0/1722433707346?e=1726704000&v=beta&t=P6mXrzpq9C2sVWQWmZMIY5hKaRDVdhIsrDAhkXfVldw"
                    alt=""
                    className="h-52 w-full border-2 border-[#655033] sm:h-44 sm:w-80"
                  />
                </div>
                <h2 className="font-semibold">
                  Aplicação que utiliza da API do GitHub!
                </h2>
                <SquareArrowOutUpRight
                  color="#a18052"
                  size={16}
                  className="absolute right-1 top-1"
                />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}
