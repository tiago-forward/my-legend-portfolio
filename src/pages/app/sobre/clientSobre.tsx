import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientSobre() {
  return (
    <>
      <Helmet title="Sobre" />
      <section className="flex h-full w-full flex-col justify-between">
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/sobre/historia'}>
              História
            </HeaderMainNavItem>
          </HeaderMainNav>
        </HeaderMainRoot>
        <Outlet />
      </section>
    </>
  )
}
