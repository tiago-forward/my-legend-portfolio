import { X } from 'lucide-react'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbNavigationShare } from 'react-icons/tb'

import LegendsPortfolio from '@/assets/projects/Legends Portfolio.png'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useMainHeight } from '@/hooks/useMainHeight'

interface DataCertificatesProps {
  id: number
  title: string
  image: string
  status: ('todos' | 'desenvolvimento' | 'finalizado')[]
  link: string
  foundation: string
}

const dataCertificates: DataCertificatesProps[] = [
  {
    id: 1,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 2,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 3,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 4,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 5,
    title: 'Curso de Next.js',
    image: LegendsPortfolio,
    status: ['todos', 'finalizado'],
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 6,
    title: 'Curso de Next.js',
    image: LegendsPortfolio,
    status: ['todos', 'finalizado'],
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
]

export function Pessoais() {
  const mainHeight = useMainHeight(180)

  const [filteredCertificates, setFilteredCertificates] = useState<
    DataCertificatesProps[]
  >(() => dataCertificates.filter((cert) => cert.status.includes('todos')))

  function handleChangeState(
    status: 'todos' | 'desenvolvimento' | 'finalizado',
  ) {
    const filtered = dataCertificates.filter((cert) =>
      cert.status.includes(status),
    )
    setFilteredCertificates(filtered)
  }

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="mt-20 grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <RadioGroup
          defaultValue="todos"
          onValueChange={handleChangeState}
          className="flex flex-col items-start gap-0"
        >
          <div className="ml-2 flex w-full items-center gap-4 hover:bg-[#e8edf928]">
            <RadioGroupItem
              value="todos"
              id="r1"
              className="rotate-45 rounded-none border border-[#e9b874] bg-aside-bg text-[#e9b874]"
            />
            <Label
              htmlFor="r1"
              className="w-full cursor-pointer py-2 uppercase text-[#f1ede1]"
            >
              Todos
            </Label>
          </div>
          <div className="ml-2 flex w-full items-center gap-4 hover:bg-[#e8edf928]">
            <RadioGroupItem
              value="desenvolvimento"
              id="r2"
              className="rotate-45 rounded-none border border-[#e9b874] bg-aside-bg text-[#e9b874]"
            />
            <Label
              htmlFor="r2"
              className="w-full cursor-pointer py-2 uppercase text-[#f1ede1]"
            >
              Desenvolvimento
            </Label>
          </div>
          <div className="ml-2 flex w-full items-center gap-4 hover:bg-[#e8edf928]">
            <RadioGroupItem
              value="finalizado"
              id="r3"
              className="rotate-45 rounded-none border border-[#e9b874] bg-aside-bg text-[#e9b874]"
            />
            <Label
              htmlFor="r3"
              className="w-full cursor-pointer py-2 uppercase text-[#f1ede1]"
            >
              Finalizado
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="col-span-1 md:col-span-3">
        <ul className="flex flex-wrap items-center gap-2">
          {filteredCertificates.map((certificate) => (
            <li
              key={certificate.id}
              className="relative m-auto flex cursor-pointer flex-col flex-wrap items-center gap-4 text-[#f1ede1] opacity-80 hover:opacity-100"
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="border border-[#e9b874] border-opacity-30 shadow-inner shadow-black hover:border-[#e9b874] hover:border-opacity-100">
                    <img
                      src={LegendsPortfolio}
                      alt=""
                      className="w-80 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]"
                    />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex flex-col items-center border-[#e9b874] bg-aside-bg px-0 pt-0 sm:min-w-[700px] sm:rounded-none">
                  <AlertDialogHeader className="relative space-y-0">
                    <AlertDialogTitle className="absolute bottom-0 left-[33%] text-xl uppercase tracking-wider text-[#f1ede1]">
                      My Legend Portfolio
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div>
                        <img src={LegendsPortfolio} alt="" className="w-full" />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <div className="flex items-center gap-8">
                      <a
                        href="https://github.com/tiago-forward/my-legend-portfolio"
                        target="_blank"
                        className="flex gap-1 opacity-80 hover:text-[#f1ede1] hover:opacity-100"
                        rel="noreferrer"
                      >
                        <span>Repositório</span>
                        <FaGithub size={18} />
                      </a>
                      <a
                        href="https://my-legend-portfolio-snowy.vercel.app/"
                        target="_blank"
                        className="flex gap-1 opacity-80 hover:text-[#f1ede1] hover:opacity-100"
                        rel="noreferrer"
                      >
                        <span>Projeto</span>
                        <TbNavigationShare size={18} />
                      </a>
                    </div>
                  </AlertDialogFooter>
                  <AlertDialogCancel className="absolute right-2 top-2 h-8 rounded-sm bg-aside-bg p-0 text-opacity-80 hover:bg-aside-bg hover:text-[#f1ede1] hover:text-opacity-100">
                    <X size={30} className="p-1" />
                  </AlertDialogCancel>
                </AlertDialogContent>
              </AlertDialog>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
