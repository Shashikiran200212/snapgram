import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../button'
import { Ghost } from 'lucide-react'
import { useSignOutAccount } from '@/lib/react-query/quriesAndMutations'
import { useUserContext } from '@/context/AuthContext'
import { sidebarLinks } from '@/constants'
import { INavLink } from '@/types'

const Leftsidebar = () => {
    const {pathname} = useLocation();
    const { mutate : signOut, isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if(isSuccess) navigate(0);
    }), [isSuccess]
  return (
    <nav className='leftsidebar'>
        <div className="flex flex-col gap-11 m-1">
        <Link to="/" className='flex gap-4 items-center'>
                <img src="/assets/images/logo.svg" alt="logo" width={170} height={36} />
            </Link>

            <Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
                <img src= {user.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="profile" className='h-9 w-9 rounded-full' />
                <div className='flex flex-col'>
                    <p className='body-bold'>{user.name}</p>
                    <p className='small-regular text-light-3'>@{user.username}</p>
                </div>
            </Link>
            <ul className='flex flex-col gap-4'>
              {sidebarLinks.map((link: INavLink) => {
                const isActive = pathname === link.route;
                return(
                   <li key={link.label} className={`leftsidebar-link ${isActive && 'bg-primary-500'}`}>
                     <NavLink to={link.route} className="flex gap-4  items-center p-3">
                     <img src={link.imgURL} alt={link.label} className={`fill-primary-500 group-hover: invert-white ${isActive && 'invert-white'}`} />
                        {link.label}
                    </NavLink>
                   </li>
                )
              })}
            </ul>
        </div>
        <Button variant="ghost" className='shad-button_ghost' onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="" />
            <p className='small-medium lg:base-medium'>Logout</p>
        </Button>
    </nav>
  )
}

export default Leftsidebar