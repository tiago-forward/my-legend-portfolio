import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { ClientLayount } from './pages/_layouts/client'
import { ClientFormacoes } from './pages/app/menuHeader/clientFormacoes'
import { ClientGeral } from './pages/app/menuMain/clientGeral'
import { ClientGithub } from './pages/app/menuMain/clientGithub'
import { ClientHabilidades } from './pages/app/menuHeader/clientHabilidades'
import { ClientProjetos } from './pages/app/menuHeader/clientProjetos'
import { ClientSobre } from './pages/app/menuHeader/clientSobre'

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
