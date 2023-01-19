import '/styles/styles.css';
export default function Homepage() {
return (
  <section>
      <main>
        <section id="home">
          <h1>Bienvenidas y bienvenidos!</h1>
          <p className='p'>Somos una iniciativa de la sociedad civil y nuestro principal objetivo es eliminar el hambre infantil.<br/>
          De todas las formas posibles, buscamos que los recursos lleguen donde deben llegar, y cada actor del proceso actúe con total transparencia</p>
        </section>
        <section id="menu">
          <h2>Our Menu</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </section>
        <section id="reservations">
          <h2 className='form-title'>Reservations</h2>
          <form>
            <div className="form-container">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"/>
              <label htmlFor="date">Date:</label>
              <input type="text" id="date" name="date"/>
              <label htmlFor="time">Time:</label>
              <input type="text" id="time" name="time"/>
              <input type="submit" value="Make Reservation"/>
            </div>
          </form>
        </section>
        <section id="contact">
          <h2>Contáctanos</h2>
          <p>Teléfono: 555-555-5555</p>
          <p>Email: communitydining@example.com</p>
        </section>
      </main>
      <footer className='footer'> 
          <p>Copyright © 2021 Community Service Dining Room</p>
      </footer>
  </section> 
)}
