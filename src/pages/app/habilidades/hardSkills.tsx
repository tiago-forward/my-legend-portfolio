import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

import { useMainHeight } from '@/hooks/useMainHeight'

export function HardSkills() {
  const mainHeight = useMainHeight(180)

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <div className="flex flex-col items-center border border-[#e9b874] pb-4">
          <span className="text-[80px]">8</span>
          <p className="text-center uppercase">Quantidade de hard skills</p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <ul className="flex flex-wrap items-center gap-4">
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaHtml5 className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>HTML</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaCss3 className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>CSS</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaJs className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>JavaScript</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <SiTypescript className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>TypeScript</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <FaReact className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>React</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <SiStyledcomponents className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>StyledComponents</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <SiTailwindcss className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>TailwindCSS</h3>
          </li>
          <li className="m-auto flex flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100">
            <RiNextjsFill className="flex h-[200px] w-60 cursor-pointer border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
            <h3>Next</h3>
          </li>
        </ul>
      </div>
    </main>
  )
}
