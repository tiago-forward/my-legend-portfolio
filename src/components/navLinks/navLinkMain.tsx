import { Link, LinkProps } from 'react-router-dom'

import { useRoute } from '@/context/RouteContext'

export interface NavLinkMainProps extends LinkProps {}

export function NavLinkMain(props: NavLinkMainProps) {
  const { activeSubRoute, setActiveSubRoute } = useRoute()

  const handleClick = () => {
    setActiveSubRoute(props.to as string)
  }

  const isActive =
    (props.to === '/' && activeSubRoute === '/') ||
    (props.to !== '/' && activeSubRoute.startsWith(props.to as string))

  return (
    <div className="flex flex-col items-center px-2">
      <Link
        onClick={handleClick}
        data-current={isActive}
        className={`transition duration-300 hover:text-[#f1ede1] ${isActive ? `text-[#f1ede1]` : ``}`}
        {...props}
      />
      {isActive && (
        <div className="h-px w-full [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(199,160,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
      )}
    </div>
  )
}
