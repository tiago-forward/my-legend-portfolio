import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientHabilidades() {
  return (
    <>
      <Helmet title="Habilidades" />
      <section className="flex h-full w-full flex-col justify-between">
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/habilidades/hard-skills'}>
              Hard Skills
            </HeaderMainNavItem>
            {/* <HeaderMainNavItem to={'/habilidades/soft-skills'}>
              Soft Skills
            </HeaderMainNavItem> */}
          </HeaderMainNav>
        </HeaderMainRoot>
        <Outlet />
      </section>
    </>
  )
}
