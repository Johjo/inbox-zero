import React from "react";
import styles from './ImapAuthentication.module.css';

export function ImapAuthentication() {
    return <form data-testid="imap-identification" className={styles.formContainer}>
        <div className={styles.formField}>
            <label htmlFor="imap-server" className={styles.formLabel}>Serveur IMAP</label>
            <input id="imap-server" type="text" data-testid="imap-server" className={styles.formInput}/>
        </div>
        <div className={styles.formField}>
            <label htmlFor="imap-port" className={styles.formLabel}>Port</label>
            <input id="imap-port" type="text" data-testid="imap-port" className={styles.formInput}/>
        </div>
        <div className={styles.formField}>
            <label htmlFor="imap-username" className={styles.formLabel}>Nom d&apos;utilisateur</label>
            <input id="imap-username" type="text" data-testid="imap-username" className={styles.formInput}/>
        </div>
        <div className={styles.formField}>
            <label htmlFor="imap-password" className={styles.formLabel}>Mot de passe</label>
            <input id="imap-password" type="password" data-testid="imap-password" className={styles.formInput}/>
        </div>
        <button type="submit" data-testid="imap-connect" className={styles.submitButton}>Connexion</button>
    </form>;
}