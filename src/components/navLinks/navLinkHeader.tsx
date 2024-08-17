import { Link, LinkProps, useLocation } from 'react-router-dom'

export interface NavLinkHeaderProps extends LinkProps {}

export function NavLinkHeader(props: NavLinkHeaderProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="hover:bg-navLinkHover data-[current=true]:bg-navLinkHover flex h-full items-center px-4 text-sm transition duration-300 hover:text-[#f1ede1] data-[current=true]:text-[#f1ede1]"
      {...props}
    />
  )
}
