import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="" alt="" />
            <div className={styles.profile}>
                <strong>Paulo Ricardo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}