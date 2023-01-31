export default function Reservaciones() {
    return (
        <section id="reservations">
            <h2 className='form-title'>Reservaciones</h2>
                <form>
                    <div className="form-container">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name"/>
                        <label htmlFor="date">Fecha:</label>
                        <input type="text" id="date" name="date"/>
                        <label htmlFor="time">Hora:</label>
                        <input type="text" id="time" name="time"/>
                        <button className="reservation-button" type="submit"></button>
                    </div>
                </form>
        </section>
    )}