import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientFormacoes() {
  return (
    <>
      <Helmet title="Formações" />
      <section className="flex h-full w-full flex-col justify-between">
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/formacoes/carreira'}>
              Carreira
            </HeaderMainNavItem>
          </HeaderMainNav>
        </HeaderMainRoot>
        <Outlet />
      </section>
    </>
  )
}
