import Image from "next/image";
import Link from "next/link";

const links = [{
label: 'Inicio',
route: '/',
}, {
label: 'Menu',
route: '/menu',
}, {
label: 'Reservaciones',
route: '/reservaciones',
}, {
label: 'Contacto',
route: '/contacto',
},{
label: 'Acerca de',
route: '/acerca-de',
}]

export function Navbar(){
    return (
        <div>
    <nav className='nav'>
        <section className='logo'>
            <Image alt="logo" src="/logo.svg" width={60} height={75}/>
        </section>
        <ul>
            {links.map(({label, route}) => (
                <li key={route}>
                <button className="navbar-button">
                <Link href={route}>
                    {label}
                </Link>
                </button>
            </li>
            ))}  
        </ul>
    </nav>
    </div>
)}
