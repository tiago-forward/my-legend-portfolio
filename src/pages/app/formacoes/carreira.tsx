import { X } from 'lucide-react'
import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

import CertificateImage from '@/assets/certificate/NLW Unite - Reactjs.png'
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
  status: 'concluidos' | 'cursando'
  link: string
  foundation: string
}

const dataCertificates: DataCertificatesProps[] = [
  {
    id: 1,
    title: 'NLW Unite - Reactjs',
    image: CertificateImage,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 2,
    title: 'NLW Unite - Reactjs',
    image: CertificateImage,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 3,
    title: 'NLW Unite - Reactjs',
    image: CertificateImage,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 4,
    title: 'NLW Unite - Reactjs',
    image: CertificateImage,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 5,
    title: 'Curso de Next.js',
    image: CertificateImage,
    status: 'cursando',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: 6,
    title: 'Curso de Next.js',
    image: CertificateImage,
    status: 'cursando',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
]

export function Carreira() {
  const mainHeight = useMainHeight(180)

  const [filteredCertificates, setFilteredCertificates] = useState<
    DataCertificatesProps[]
  >(() => dataCertificates.filter((cert) => cert.status === 'concluidos'))

  function handleChangeState(status: 'concluidos' | 'cursando') {
    const filtered = dataCertificates.filter((cert) => cert.status === status)
    setFilteredCertificates(filtered)
  }

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <RadioGroup defaultValue="concluidos" onValueChange={handleChangeState}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="concluidos"
              id="r2"
              className="border border-[#e9b874] bg-aside-bg text-[#e9b874]"
            />
            <Label htmlFor="r2" className="uppercase text-[#f1ede1]">
              Concluídos
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="cursando"
              id="r3"
              className="border border-[#e9b874] bg-aside-bg text-[#e9b874]"
            />
            <Label htmlFor="r3" className="uppercase text-[#f1ede1]">
              Cursando
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
                      key={certificate.id}
                      src={certificate.image}
                      alt=""
                      className="w-80 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]"
                    />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex flex-col items-center border-[#e9b874] bg-aside-bg px-0 pt-0 sm:min-w-[700px] sm:rounded-none">
                  <AlertDialogHeader className="relative space-y-0">
                    <AlertDialogTitle className="absolute bottom-0 left-[35%] text-xl uppercase tracking-wider">
                      {certificate.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div>
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full"
                        />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <div>
                      <a
                        href="https://www.rocketseat.com.br/"
                        target="_blank"
                        className="flex gap-1 opacity-80 hover:text-[#f1ede1] hover:opacity-100"
                        rel="noreferrer"
                      >
                        <span>{certificate.foundation}</span>
                        <FiExternalLink size={18} />
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
