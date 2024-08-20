import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { ClientLayount } from './pages/_layouts/client'
import { HardSkills } from './pages/app/habilidades/hardSkills'
import { SoftSkills } from './pages/app/habilidades/softSkills'
import { ClientFormacoes } from './pages/app/menuHeader/clientFormacoes'
import { ClientHabilidades } from './pages/app/menuHeader/clientHabilidades'
import { ClientProjetos } from './pages/app/menuHeader/clientProjetos'
import { ClientSobre } from './pages/app/menuHeader/clientSobre'
import { ClientGeral } from './pages/app/menuMain/clientGeral'
import { ClientGithub } from './pages/app/menuMain/clientGithub'
import { DesafiosDeCurso } from './pages/app/projetos/desafiosDeCurso'
import { DesafiosDeSites } from './pages/app/projetos/desafiosDeSites'
import { Pessoais } from './pages/app/projetos/pessoais'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <ClientLayount />,
        children: [
          { path: '/', element: <ClientGeral /> },
          { path: '/github', element: <ClientGithub /> },
          { path: '/sobre', element: <ClientSobre /> },
          {
            path: '/habilidades',
            element: <ClientHabilidades />,
            children: [
              { path: 'hard-skills', element: <HardSkills /> },
              { path: 'soft-skills', element: <SoftSkills /> },
            ],
          },
          { path: '/formacoes', element: <ClientFormacoes /> },
          {
            path: '/projetos',
            element: <ClientProjetos />,
            children: [
              { path: 'pessoais', element: <Pessoais /> },
              { path: 'desafio-de-cursos', element: <DesafiosDeCurso /> },
              { path: 'desafio-de-sites', element: <DesafiosDeSites /> },
            ],
          },
        ],
      },
    ],
  },
])
