import styles from './Paginas.module.css'
import { Comments } from './Comments.jsx'


export function Competencias() {
    return (
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://cdn-icons-png.freepik.com/512/8920/8920474.png" alt="Imagem profile" />
                <div className={styles.authorInfo}>
                    <h2><strong>Competência</strong></h2>
                </div>
            </div>
            <Comments
                titulo='...'
                descricao='...'
                linkImg=<a href="#" target="_blank"><img src="#" alt="..." /></a>
                periodo='...'
            />

        </header>

    )
}