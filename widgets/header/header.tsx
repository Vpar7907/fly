import Image from 'next/image'
import style from './header.module.css'
import Logo from '@/shared/assets/images/Logo.svg'
import Airplane from '@/shared/assets/icons/Airplane.svg'
import Hotel from '@/shared/assets/icons/Hotel.svg'
import { Button, Menu, MenuProps } from 'antd'
import Link from 'next/link'

const items: MenuProps['items'] = [
    {
        label: (<Link href={'/flight'}>Самолёты</Link>),
        key: 'flight',
        icon: <Image src={Airplane} alt='airplane' />,
        className: style.button_menu
    },
    {
        label: (<Link href={'/hotels'}>Отели</Link>),
        key: 'hotels',
        icon: <Image src={Hotel} alt='hotel' />,
        className: style.button_menu
    }
]

export function Header() {
    return (
        <header className={style.header}>
            <Menu mode='horizontal' items={items} style={{ height: '90px', border: 'none', width: '300px' }} />
            <Image src={Logo} alt='logo' width={110} height={36} />
            <div>
                <Button type='text' style={{ fontWeight: 600, height: '48px', marginRight: '3px' }}>Войти</Button>
                <Button type='text' className={style.button_sign_up}  >Регистрация</Button>
            </div>
        </header>)
}