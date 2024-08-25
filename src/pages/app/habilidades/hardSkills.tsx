import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

import { useCountUp } from '@/hooks/useCountUp'
import { useMainHeight } from '@/hooks/useMainHeight'

export function HardSkills() {
  const mainHeight = useMainHeight(180)
  useCountUp({ start: 0, end: 8, duration: 700, elementId: 'elementCounter' })

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <div className="flex cursor-default flex-col items-center border border-[#e9b874] pb-4">
          <span id="elementCounter" className="text-[80px]">
            0
          </span>
          <p className="text-center uppercase">Quantidade de hard skills</p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <ul className="flex flex-wrap items-center gap-4">
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaHtml5 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">HTML</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaCss3 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">CSS</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaJs className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">JavaScript</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <SiTypescript className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">TypeScript</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaReact className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">React</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <SiStyledcomponents className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">StyledComponents</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <SiTailwindcss className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">TailwindCSS</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <RiNextjsFill className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3 className="cursor-default">Next</h3>
          </li>
        </ul>
      </div>
    </main>
  )
}
