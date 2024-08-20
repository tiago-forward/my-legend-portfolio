import { Outlet } from 'react-router-dom'

import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientHabilidades() {
  return (
    <section className="flex h-full w-full flex-col">
      <HeaderMainRoot>
        <HeaderMainNav>
          <HeaderMainNavItem to={'/habilidades/hard-skills'}>
            Hard Skills
          </HeaderMainNavItem>
          <HeaderMainNavItem to={'/habilidades/soft-skills'}>
            Soft Skills
          </HeaderMainNavItem>
        </HeaderMainNav>
      </HeaderMainRoot>
      <Outlet />
      <div className="mt-52 text-center">
        <h2 className="text-xl">Sem informação!</h2>
      </div>
    </section>
  )
}
