import { SquareArrowOutUpRight } from 'lucide-react'

import Setup from '@/assets/imageProfile/Setup.jpg'
import MyLegendPortfolio from '@/assets/imageProject/My Legends Portfolio.jpg'

export default function HighlightsHome() {
  return (
    <section aria-labelledby="news-blocks" className="mt-auto pb-8">
      <nav>
        <ul className="flex flex-col items-center gap-3 md:flex-row md:items-start">
          <li className="group relative w-full sm:w-80">
            <a
              href="http://localhost:5173\src\assets\imageProfile\Setup.jpg"
              target="_blank"
              className="flex flex-col gap-2"
              rel="noreferrer"
            >
              <div className="border border-black">
                <img
                  src={Setup}
                  alt=""
                  className="h-52 w-full border-2 border-zinc-700 group-hover:border-[#a18052] sm:h-44 sm:w-80"
                />
              </div>
              <h2 className="font-semibold">Meu setup</h2>
              <SquareArrowOutUpRight
                size={16}
                className="absolute right-1 top-1 text-[#a18052] group-hover:text-[#e9b874]"
              />
            </a>
          </li>
          <li className="group relative w-full sm:w-80">
            <a
              href="https://github.com/tiago-forward/my-legend-portfolio"
              target="_blank"
              className="flex flex-col gap-2"
              rel="noreferrer"
            >
              <div className="border border-black">
                <img
                  src={MyLegendPortfolio}
                  alt=""
                  className="h-52 w-full border-2 border-zinc-700 group-hover:border-[#a18052] sm:h-44 sm:w-80"
                />
              </div>
              <h2 className="font-semibold">
                Meu mais recente projeto em desenvolvimento - My Legend
                Portfolio
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
