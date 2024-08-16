import { NavLinkMain } from '@/components/navLinks/navLinkMain'
import { SquareArrowOutUpRight } from 'lucide-react'

export function ClientGeral() {
  return (
    <>
      <section aria-labelledby="welcome-section">
        <header>
          <nav>
            <ul className="flex gap-4 pt-2 uppercase">
              <li>
                <NavLinkMain to="/" className="my-4 transition duration-300">
                  Geral
                </NavLinkMain>
              </li>
              <li>
                <NavLinkMain
                  to="/github"
                  className="my-4 transition duration-300"
                >
                  GitHub
                </NavLinkMain>
              </li>
            </ul>
          </nav>
        </header>
        <article className="mt-60 w-2/5">
          <h1 className="text-5xl font-bold uppercase text-amber-50">
            Seja bem vindo ao meu portfolio
          </h1>
          <p className="text-xl">Desenvolvedor front-end</p>
          <button className="cursor-not-allowed">Download CV</button>
        </article>
      </section>
      <section aria-labelledby="content-blocks">
        <nav>
          <ul className="flex gap-3">
            <li className="relative w-60">
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
                    className="h-36 w-60 border-2 border-[#655033]"
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
            <li className="relative w-60">
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
                    className="h-36 w-60 border-2 border-[#655033]"
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
