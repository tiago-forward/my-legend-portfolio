import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientProjetos() {
  return (
    <>
      <Helmet title="Projetos" />
      <section className="flex h-full w-full flex-col justify-between">
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/projetos/jornada'}>
              Jornada
            </HeaderMainNavItem>
          </HeaderMainNav>
        </HeaderMainRoot>
        <Outlet />
      </section>
    </>
  )
}
