import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="" alt="" />
            <div className={styles.profile}>
                <strong>Paulo Ricardo</strong>
                <span>Web Developer</span>
            </div>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/PauloRRRRR.png"/>
                <strong>Paulo Ricardo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}