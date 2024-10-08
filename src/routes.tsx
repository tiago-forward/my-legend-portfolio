import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { ClientLayount } from './pages/_layouts/client'
import { Carreira } from './pages/app/formacoes/carreira'
import { ClientFormacoes } from './pages/app/formacoes/clientFormacoes'
import { ClientHabilidades } from './pages/app/habilidades/clientHabilidades'
import { HardSkills } from './pages/app/habilidades/hardSkills'
import { SoftSkills } from './pages/app/habilidades/softSkills'
import { ClientGeral } from './pages/app/inicio/clientGeral'
import { ClientGithub } from './pages/app/inicio/clientGithub'
import { ClientProjetos } from './pages/app/projetos/clientProjetos'
import { Jornada } from './pages/app/projetos/jornada'
import { ClientSobre } from './pages/app/sobre/clientSobre'
import { Historia } from './pages/app/sobre/historia'

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
          {
            path: '/sobre',
            element: <ClientSobre />,
            children: [
              { index: true, element: <Navigate to='historia' replace /> },
              { path: 'historia', element: <Historia /> }
            ],
          },
          {
            path: '/habilidades',
            element: <ClientHabilidades />,
            children: [
              { index: true, element: <Navigate to='hard-skills' replace /> },
              { path: 'hard-skills', element: <HardSkills /> },
              { path: 'soft-skills', element: <SoftSkills /> },
            ],
          },
          {
            path: '/formacoes',
            element: <ClientFormacoes />,
            children: [
              { index: true, element: <Navigate to='carreira' replace /> },
              { path: 'carreira', element: <Carreira /> },
            ],
          },
          {
            path: '/projetos',
            element: <ClientProjetos />,
            children: [
              { index: true, element: <Navigate to='jornada' replace /> },
              { path: 'jornada', element: <Jornada /> }
            ],
          },
        ],
      },
    ],
  },
])
