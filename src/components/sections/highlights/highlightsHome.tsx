import { SquareArrowOutUpRight } from 'lucide-react'

export default function HighlightsHome() {
  return (
    <section aria-labelledby="news-blocks" className="mt-auto pb-8">
      <nav>
        <ul className="flex flex-col items-center gap-3 md:flex-row md:items-start">
          <li className="group relative w-full sm:w-80">
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
                  className="h-52 w-full border-2 border-zinc-700 group-hover:border-[#a18052] sm:h-44 sm:w-80"
                />
              </div>
              <h2 className="font-semibold">Meu primeiro portfolio inicial</h2>
              <SquareArrowOutUpRight
                size={16}
                className="absolute right-1 top-1 text-[#a18052] group-hover:text-[#e9b874]"
              />
            </a>
          </li>
          <li className="group relative w-full sm:w-80">
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
                  className="h-52 w-full border-2 border-zinc-700 group-hover:border-[#a18052] sm:h-44 sm:w-80"
                />
              </div>
              <h2 className="font-semibold">
                Aplicação que utiliza da API do GitHub!
              </h2>
              <SquareArrowOutUpRight
                size={16}
                className="absolute right-1 top-1 text-[#a18052] group-hover:text-[#e9b874]"
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
