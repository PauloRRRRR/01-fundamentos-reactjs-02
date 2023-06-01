import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img  className={styles.avatar} src='https://github.com/PauloRRRRR.png' />
                    <div className={styles.authorInfo}>
                        <strong>Paulo Ricardo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio ás 08:13' dateTime='2022-05-11 08:13-38' >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat</p>
                <p><a href="">github.com/PauloRRRRR</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}