import styles from '../styles/Contact.module.css'



export default function Contact() {
    return <main className={`${styles.container}  d-flex flex-column align-items-center container gap-5 pb-5 shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft gap-5 mb-5 d-flex `}>
        <h1>Contact</h1>
        <div className='w-75 animate__animated animate__bounceInLeft'>
            <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22388.119791031717!2d-75.49525813627982!3d45.45942919604178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0dac2c1b5fb5%3A0x3efcce6e12d476c7!2zT3Jsw6lhbnMsIE90dGF3YSwgT04!5e0!3m2!1sfr!2sca!4v1675996796132!5m2!1sfr!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className={`${styles.contact_wrapper} d-flex flex-column align-items-center`}>
            <form  action="" className={`${styles.contact_form} d-flex flex-column`}>
                <h2>Contactez Moi</h2>
                <label>
                    Nom
                    <input type="text" required />
                </label>
                <label htmlFor="">
                    EMAIL
                    <input type="email" name="" id="" required />

                </label>
                <label htmlFor="">
                    Objet
                    <input type="text" required />
                </label>
                <label htmlFor="">
                    Message
                    <textarea name="" id="" cols="30" rows="10" required></textarea>
                </label>
                <button type='submit'>Envoyer <i className='bi bi-arrow-right'></i></button>
            </form>
        </div>
    </main>
}