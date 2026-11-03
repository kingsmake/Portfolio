
'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState(null);

    function onSubmit(e) {
        e.preventDefault();

        const f = new FormData(e.currentTarget);

        const name = f.get('name').trim();
        const email = f.get('email').trim();
        const mobile = f.get('mobile').trim();
        const subject = f.get('subject').trim();
        const message = f.get('message').trim();

        if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
            setStatus({
                error: true,
                text: 'Please enter your name, a valid email address and a message.'
            });
            return;
        }

        const yourEmail = 'omkartupe852@gmail.com';

        const mailSubject = encodeURIComponent(
            subject || 'Portfolio Enquiry'
        );

        const mailBody = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Mobile: ${mobile || 'Not provided'}\n\n` +
            `Message:\n${message}`
        );

        window.location.href =
            `mailto:${yourEmail}?subject=${mailSubject}&body=${mailBody}`;

        setStatus({
            error: false,
            text: 'Your email application is opening with your message.'
        });
    }

    return (
        <section className={styles.contact}>
            <Reveal y={-40}>
                <h2 className="heading">
                    Contact <span>Me!</span>
                </h2>
            </Reveal>

            <Reveal>
                <form
                    className={styles.form}
                    onSubmit={onSubmit}
                    noValidate
                >
                    <div className={styles.inputBox}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            required
                        />
                    </div>

                    <div className={styles.inputBox}>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            aria-label="Mobile Number"
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Email Subject"
                            aria-label="Email Subject"
                        />
                    </div>

                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        aria-label="Your Message"
                        required
                    />

                    <input
                        type="submit"
                        value="Send Message"
                        className="btn"
                    />

                    {status && (
                        <p className={styles.status} role="status">
                            {status.text}
                        </p>
                    )}
                </form>
            </Reveal>
        </section>
    );
}
