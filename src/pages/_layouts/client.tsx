import { Helmet } from 'react-helmet-async'
import { Outlet, useLocation } from 'react-router-dom'

import AccordionGeral from '@/components/aside/accordion/accordionGeral'
import AccordionRocketseat from '@/components/aside/accordion/accordionRocketseat'
import { ClientHeader } from '@/components/header/clientHeader'

export function ClientLayount() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <Helmet title="Início" />
      <div
        className={`divide-client-DivideMain bg-aside-bg ${isHomePage ? `bg-wallpaper` : `bg-aside-bg`} flex min-h-screen flex-col divide-y-[1px] border-[1px] border-zinc-800 bg-cover bg-top bg-no-repeat`}
      >
        <ClientHeader />
        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-5">
          <main className="col-span-4 flex h-full flex-col px-2 md:px-8">
            <Outlet />
          </main>
          <aside className="col-span-4 bg-aside-bg lg:col-span-1">
            <header className="mx-2 mb-4 mt-2">
              <span className="cursor-default uppercase">Social</span>
            </header>
            <AccordionRocketseat />
            <AccordionGeral />
          </aside>
        </div>
      </div>
    </>
  )
}
