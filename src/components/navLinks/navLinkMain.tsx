import { Link, LinkProps, useLocation } from 'react-router-dom'

export interface NavLinkMainProps extends LinkProps {}

export function NavLinkMain(props: NavLinkMainProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="my-4 transition duration-300 hover:text-white data-[current=true]:text-white"
      {...props}
    />
  )
}
