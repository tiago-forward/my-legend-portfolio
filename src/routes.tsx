import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { ClientLayount } from './pages/_layouts/client'
import { ClientFormacoes } from './pages/app/clientFormacoes'
import { ClientGeral } from './pages/app/clientGeral'
import { ClientGithub } from './pages/app/clientGithub'
import { ClientHabilidades } from './pages/app/clientHabilidades'
import { ClientProjetos } from './pages/app/clientProjetos'
import { ClientSobre } from './pages/app/clientSobre'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <ClientLayount />,
        children: [
          { path: '/sobre', element: <ClientSobre /> },
          { path: '/habilidades', element: <ClientHabilidades /> },
          { path: '/formacoes', element: <ClientFormacoes /> },
          { path: '/projetos', element: <ClientProjetos /> },
          { path: '/', element: <ClientGeral /> },
          { path: '/github', element: <ClientGithub /> },
        ],
      },
    ],
  },
])
