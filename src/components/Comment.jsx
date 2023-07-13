import { ThumbsUp, Trash } from 'phosphor-react';
import {Avatar} from './Avatar'
import styles from './Comment.module.css';

export function Comment ({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/pauloRRRRR.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Ricardo</strong>
                            <time title='02 de Julho ás 13:06' dateTime='2023-02-07 13:06:30' >Cerca de 1h atrás</time>
    
                        </div>
                        <button title='Deletar comentário'> 
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>    
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudiar <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}