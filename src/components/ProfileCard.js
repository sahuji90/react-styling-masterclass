import React from "react";
import styles from './ProfileCard.module.css';

const ProfileCard = ()=>{
    return (
        <div className={styles.profileCard}>
            <div className={styles.cardHeader}>
                <div className={styles.profileImage}>
                    <img  
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Profile"/>
                </div>
            </div>
            <div className={styles.cardBody}>
                <h2 className={styles.Name}>Alex Johnson</h2>
                <p className={styles.title}>
                   FrontEnd developer 
                </p>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1.2k</span>
                        <span className={styles.statLabel}>Followers</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>892</span>
                        <span className={styles.statLabel}>Following</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>147</span>
                        <span className={styles.statLabel}>projects</span>
                    </div>
                </div>
                <p className={styles.bio}>
                    Passionate about creating beautiful, user-friendly web experiences.
                    Love working with React, Typescript and modern web technologies
                </p>
                <div className={styles.actions}>
                    <button className={styles.primaryButton}>Follow</button>
                    <button className={styles.secondaryButton}>Message</button>
                </div>
            </div>
        </div>
    )
}


export default ProfileCard;