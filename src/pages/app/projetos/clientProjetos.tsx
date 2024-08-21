import { Outlet } from 'react-router-dom'

import {
  HeaderMainNav,
  HeaderMainNavItem,
  HeaderMainRoot,
} from '@/components/header/headerMainRoot'

export function ClientProjetos() {
  return (
    <>
      <section className="flex h-full w-full flex-col justify-between">
        <HeaderMainRoot>
          <HeaderMainNav>
            <HeaderMainNavItem to={'/projetos/pessoais'}>
              Pessoais
            </HeaderMainNavItem>
            <HeaderMainNavItem to={'/projetos/desafio-de-cursos'}>
              Desafio de cursos
            </HeaderMainNavItem>
            <HeaderMainNavItem to={'/projetos/desafio-de-sites'}>
              Desafio de sites
            </HeaderMainNavItem>
          </HeaderMainNav>
        </HeaderMainRoot>
        <Outlet />
        <div className="mt-52 text-center">
          <h2 className="text-xl">Sem informação!</h2>
        </div>
      </section>
    </>
  )
}
