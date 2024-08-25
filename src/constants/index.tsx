import { ReactNode } from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid'

import ImageCertificate from '@/assets/certificate/NLW Unite - Reactjs.png'
import ImageAdviceGeneratorApp from '@/assets/imageProject/Advice Generator App.jpeg'
import ImageAgênciaXYZ from '@/assets/imageProject/Agência XYZ.jpeg'
import ImageBlogr from '@/assets/imageProject/Blogr.jpeg'
import ImageCoffeeDelivery from '@/assets/imageProject/Coffee Delivery.jpeg'
import ImageCursoEvelyn from '@/assets/imageProject/Curso Evelyn.jpeg'
import ImageDoramasAssistidos from '@/assets/imageProject/Doramas Assistidos.jpeg'
import ImageDTMoney from '@/assets/imageProject/DT Money.jpg'
import ImageExercicioFormulario from '@/assets/imageProject/Exercício Formulário.jpeg'
import ImageFundamentosDoReact from '@/assets/imageProject/Fundamentos do React.jpg'
import ImageGithubBlog from '@/assets/imageProject/Github Blog.jpeg'
import ImageHuddle from '@/assets/imageProject/Huddle.jpeg'
import ImageIgniteShop from '@/assets/imageProject/Ignite Shop.jpg'
import ImageIgniteTimer from '@/assets/imageProject/Ignite Timer.jpg'
import ImageInteractiveRatingComponent from '@/assets/imageProject/Interactive Rating Component.jpeg'
import ImageListaDeTarefas from '@/assets/imageProject/Lista de Tarefas.jpeg'
import ImageMyFirstPortfolio from '@/assets/imageProject/My First Portfolio.jpeg'
import ImageLegendsPortfolio from '@/assets/imageProject/My Legends Portfolio.jpg'
import ImagePassInWeb from '@/assets/imageProject/Pass In Web.jpg'
import ImagePlayerDoSpotify from '@/assets/imageProject/Player do Spotify.jpeg'
import ImagePokedex from '@/assets/imageProject/Pokédex.jpeg'
import ImageToDoList from '@/assets/imageProject/ToDo List.jpeg'
import ImageVerificadorDeIdade from '@/assets/imageProject/Verificador de Idade.jpeg'

export interface hardSkillsProps {
  id: string
  title: string
  icon: ReactNode
}

export const hardSkills: hardSkillsProps[] = [
  {
    id: uuidv4(),
    title: 'HTML',
    icon: (
      <FaHtml5 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'CSS',
    icon: (
      <FaCss3 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'JavaScript',
    icon: (
      <FaJs className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'TypeScript',
    icon: (
      <SiTypescript className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'React',
    icon: (
      <FaReact className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'StyledComponents',
    icon: (
      <SiStyledcomponents className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'TailwindCSS',
    icon: (
      <SiTailwindcss className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: 'Nextjs',
    icon: (
      <RiNextjsFill className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
]

export interface CertificatesProps {
  id: string
  title: string
  image: string
  status: 'concluidos' | 'cursando'
  link: string
  foundation: string
}

export const certificates: CertificatesProps[] = [
  {
    id: uuidv4(),
    title: 'NLW Unite - Reactjs',
    image: ImageCertificate,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: uuidv4(),
    title: 'NLW Unite - Reactjs',
    image: ImageCertificate,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: uuidv4(),
    title: 'NLW Unite - Reactjs',
    image: ImageCertificate,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: uuidv4(),
    title: 'NLW Unite - Reactjs',
    image: ImageCertificate,
    status: 'concluidos',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: uuidv4(),
    title: 'Curso de Next.js',
    image: ImageCertificate,
    status: 'cursando',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
  {
    id: uuidv4(),
    title: 'Curso de Next.js',
    image: ImageCertificate,
    status: 'cursando',
    link: 'https://www.rocketseat.com.br/',
    foundation: 'Formação Rocketseat',
  },
]

export interface ProjectsProps {
  id: string
  title: string
  image: string
  status: ('todos' | 'desenvolvimento' | 'finalizado')[]
  repositoryUrl: string
  projectUrl?: string
}

export const projects: ProjectsProps[] = [
  {
    id: uuidv4(),
    title: 'My Legends Portfolio',
    image: ImageLegendsPortfolio,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl: 'https://github.com/tiago-forward/my-legend-portfolio',
    projectUrl: 'https://my-legend-portfolio-snowy.vercel.app/',
  },
  // {
  //   id: uuidv4(),
  //   title: 'Pizza Shop Web',
  //   image: ,
  //   status: ['todos', 'finalizado'],
  //   repositoryUrl: 'https://github.com/tiago-forward/pizza-shop-web-react',
  // },
  {
    id: uuidv4(),
    title: 'Ignite Shop',
    image: ImageIgniteShop,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl:
      'https://github.com/tiago-forward/ignite-shop-desafio-nextjs',
  },
  {
    id: uuidv4(),
    title: 'Curso Evelyn',
    image: ImageCursoEvelyn,
    status: ['todos', 'desenvolvimento'],
    repositoryUrl: 'https://github.com/tiago-forward/landing-page-curso-evelyn',
    projectUrl: 'https://landing-page-curso-evelyn.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Github Blog',
    image: ImageGithubBlog,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/github-blog-desafio-react',
    projectUrl: 'https://github-blog-desafio-react.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'DT Money',
    image: ImageDTMoney,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/dt-money-react-rocketseat',
  },
  {
    id: uuidv4(),
    title: 'Coffee Delivery',
    image: ImageCoffeeDelivery,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/coffee-delivery-desafio-react',
    projectUrl: 'https://coffee-delivery-desafio-react.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'ToDo List',
    image: ImageToDoList,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/todo-list-desafio-react',
    projectUrl: 'https://todo-list-desafio-react-8kd4.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Ignite Timer',
    image: ImageIgniteTimer,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/ignite-timer-react-rocketseat',
  },
  {
    id: uuidv4(),
    title: 'Pokédex',
    image: ImagePokedex,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-react-avancado-pokedex',
    projectUrl: 'https://desafio-react-avancado-pokedex.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Fundamentos do React',
    image: ImageFundamentosDoReact,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/fundamentos-react-rocketseat',
  },
  {
    id: uuidv4(),
    title: 'Lista de Tarefas',
    image: ImageListaDeTarefas,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/my-project-to-do-list',
    projectUrl: 'https://my-project-to-do-list.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Pass In Web',
    image: ImagePassInWeb,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/project-pass-in-web',
  },
  {
    id: uuidv4(),
    title: 'Player do Spotify',
    image: ImagePlayerDoSpotify,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/player-do-spotify-basico',
    projectUrl: 'https://tiago-forward.github.io/player-do-spotify-basico/',
  },
  {
    id: uuidv4(),
    title: 'Blogr',
    image: ImageBlogr,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-blogr-landing-page-main',
    projectUrl: 'https://desafio-blogr-landing-page-main.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'My First Portfolio',
    image: ImageMyFirstPortfolio,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/my-portfolio',
    projectUrl: 'https://tiago-forward.github.io/my-portfolio/',
  },
  {
    id: uuidv4(),
    title: 'Interactive Rating Component',
    image: ImageInteractiveRatingComponent,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-interactive-rating-component',
    projectUrl:
      'https://tiago-forward.github.io/desafio-interactive-rating-component/',
  },
  {
    id: uuidv4(),
    title: 'Doramas Assistidos',
    image: ImageDoramasAssistidos,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/projeto-doramas-assistidos',
    projectUrl: 'https://tiago-forward.github.io/projeto-doramas-assistidos/',
  },
  {
    id: uuidv4(),
    title: 'Advice Generator App',
    image: ImageAdviceGeneratorApp,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-advice-generator-app-main',
    projectUrl:
      'https://tiago-forward.github.io/desafio-advice-generator-app-main/',
  },
  {
    id: uuidv4(),
    title: 'Exercício Formulário',
    image: ImageExercicioFormulario,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-formulario-devquest?tab=readme-ov-file',
    projectUrl: 'https://tiago-forward.github.io/desafio-formulario-devquest/',
  },
  {
    id: uuidv4(),
    title: 'Verificador de Idade',
    image: ImageVerificadorDeIdade,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-verificador-de-idade',
    projectUrl: 'https://tiago-forward.github.io/desafio-verificador-de-idade/',
  },
  {
    id: uuidv4(),
    title: 'Huddle',
    image: ImageHuddle,
    status: ['todos', 'finalizado'],
    repositoryUrl:
      'https://github.com/tiago-forward/desafio-huddle-landing-page-with-single-introductory-section-master',
    projectUrl:
      'https://tiago-forward.github.io/desafio-huddle-landing-page-with-single-introductory-section-master/',
  },
  {
    id: uuidv4(),
    title: 'Agência XYZ',
    image: ImageAgênciaXYZ,
    status: ['todos', 'finalizado'],
    repositoryUrl: 'https://github.com/tiago-forward/landing-page-com-grid',
    projectUrl: 'https://tiago-forward.github.io/landing-page-com-grid/',
  },
]
