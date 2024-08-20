import { Link, LinkProps } from 'react-router-dom'

import { useRoute } from '@/context/RouteContext'

export interface NavLinkHeaderProps extends LinkProps {}

export function NavLinkHeader(props: NavLinkHeaderProps) {
  const { activeRoute, setActiveRoute } = useRoute()

  // Define a rota ativa quando o link é clicado
  const handleClick = () => {
    setActiveRoute(props.to as string)
  }

  const isActive =
    (props.to === '/' && activeRoute === '/') ||
    (props.to !== '/' && activeRoute.startsWith(props.to as string))

  return (
    <>
      {isActive && (
        <div className="border-t-border-header absolute right-[40%] top-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent"></div>
      )}
      <Link
        onClick={handleClick}
        data-current={isActive}
        className={`hover:bg-navLinkHover flex h-full items-center px-2 text-sm transition duration-300 hover:text-[#f1ede1] ${isActive ? 'data-[current=true]:bg-navLinkHover text-[#f1ede1]' : ''}`}
        {...props}
      />
    </>
  )
}
