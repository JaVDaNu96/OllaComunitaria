// import Navigation from './components/navigation';
import '/styles/styles.css';
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
        <nav className='nav'>
          <ul>
            <li><button>HOME</button></li>
            <li><button>MENU</button></li>
            <li><button>RESERVATIONS</button></li>
            <li><button>CONTACT</button></li>
          </ul>
        </nav>
      </header>
        {children}
      </body>
    </html>
  )
}
