import '/styles/styles.css';
import Cards_container from './components/cards-container';

export default function Homepage() {
return (
  <section>
      <main>
        <section id="home">
          <section className="cards-section">
          <Cards_container></Cards_container>
          </section>
        </section>
      </main>
      <footer className='footer'> 
          <p>Copyright © 2021 Ollas Comunitarias de Colombia</p>
      </footer>
  </section> 
)}
