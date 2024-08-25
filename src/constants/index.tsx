import { ReactNode } from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

import CertificateImage from '@/assets/certificate/NLW Unite - Reactjs.png'
import LegendsPortfolio from '@/assets/projects/Legends Portfolio.png'

export interface hardSkillsProps {
  id: number
  title: string
  icon: ReactNode
}

export const hardSkills: hardSkillsProps[] = [
  {
    id: 1,
    title: 'HTML',
    icon: (
      <FaHtml5 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 2,
    title: 'CSS',
    icon: (
      <FaCss3 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 3,
    title: 'JavaScript',
    icon: (
      <FaJs className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 4,
    title: 'TypeScript',
    icon: (
      <SiTypescript className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 5,
    title: 'React',
    icon: (
      <FaReact className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 6,
    title: 'StyledComponents',
    icon: (
      <SiStyledcomponents className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 7,
    title: 'TailwindCSS',
    icon: (
      <SiTailwindcss className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: 8,
    title: 'Nextjs',
    icon: (
      <RiNextjsFill className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
]

export interface CertificatesProps {
  id: number
  title: string
  image: string
  status: 'concluidos' | 'cursando'
  link: string
  foundation: string
}

export const certificates: CertificatesProps[] = [
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

export interface ProjectsProps {
  id: number
  title: string
  image: string
  status: ('todos' | 'desenvolvimento' | 'finalizado')[]
  repositoryUrl: string
  projectUrl: string
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
  {
    id: 2,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
  {
    id: 3,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
  {
    id: 4,
    title: 'NLW Unite - Reactjs',
    image: LegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
  {
    id: 5,
    title: 'Curso de Next.js',
    image: LegendsPortfolio,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
  {
    id: 6,
    title: 'Curso de Next.js',
    image: LegendsPortfolio,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
]
