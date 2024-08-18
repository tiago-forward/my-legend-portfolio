import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { ClientHeader } from '@/components/header/clientHeader'

export function ClientLayount() {
  return (
    <>
      <Helmet title="Client" />
      <div className="divide-divide-main bg-bg-main bg-wallpaper flex min-h-screen flex-col divide-y-[1px] border-[1px] border-zinc-800 bg-cover bg-bottom bg-no-repeat">
        <ClientHeader />
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-5">
          <main className="col-span-4 flex h-full flex-col justify-between gap-10 px-2 pb-8 md:gap-0 md:px-8">
            <Outlet />
          </main>
          <aside className="bg-aside-bg col-span-1"></aside>
        </div>
      </div>
    </>
  )
}
