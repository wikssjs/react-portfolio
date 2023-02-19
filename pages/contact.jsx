import styles from '../styles/Contact.module.css'




export default function Contact() {


    return <main className={`${styles.container}  d-flex flex-column align-items-center container gap-5 pb-5 shadow-lg rounded-5 container-lg p-3 animate__animated animate__bounceInLeft gap-5 mb-5 d-flex `}>
        <h1>Contact</h1>
        <div className='w-75 animate__animated animate__bounceInLeft'>
        <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178843.4975043644!2d-73.52175251537102!3d45.54168186692295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b69886574f9%3A0x1c63438a7316da2e!2sLongueuil%2C%20QC!5e0!3m2!1sfr!2sca!4v1676766605236!5m2!1sfr!2sca" width="700" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

            <div className={`${styles.contact_wrapper} w-100 d-flex flex-column align-items-center`}>
                <form target='_blank' action="https://formspree.io/f/mlekbgol" method='POST' className={`${styles.contact_form} d-flex flex-column`}>
                    <h2>Contactez-Moi</h2>
                    <label>
                        Nom
                        <input type="text" required name='name'/>
                    </label>
                    <label htmlFor="">
                        EMAIL
                        <input type="email" name="email" id="" required/>

                    </label>
                    <label htmlFor="">
                        Message
                        <textarea name="message" id="" cols="30" rows="10" required></textarea>
                    </label>
                    <input className='d-none' name='bot-field'/>
                    <button type='submit'>Envoyer <i className='bi bi-arrow-right'></i></button>
                </form>
            </div>

    </main>
}