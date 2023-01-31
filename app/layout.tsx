// import Navigation from './components/navigation';
import '/styles/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './components/navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Olla Comunitaria</title>
      </head>
      <body className='body'>
      <header className='header'>
        <Navbar></Navbar>
      </header>
        {children}
      </body>
    </html>
  )
}
