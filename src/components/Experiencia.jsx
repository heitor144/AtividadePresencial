import styles from './Paginas.module.css'
import { Comments } from './Comments.jsx'


export function Experiencia() {
    return (
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://cdn-icons-png.freepik.com/512/5471/5471093.png" alt="Imagem profile" />
                <div className={styles.authorInfo}>
                    <h2><strong>Experiência</strong></h2>
                </div>
            </div>
            <Comments
                titulo='Estagiário de desenvolvimento de software'
                descricao='Nesse cargo, estou tendo a oportunidade de aprimorar meus conhecimentos de desenvolvimento e programação orientada a objetos. Onde o principal foco da área é na criação de novos sistemas e na manutenção e adaptabilidade dos sistemas já existentes, visando sempre os requisitos e ajustes solicitados pelas áreas as quais somos responsáveis.'
                linkImg=<a href="https://www.grupoenergisa.com.br" target="_blank"><img src="./src/assets/energisa-logo.png" alt="" /></a>
                periodo='De 11/2023 até o momento.'
            />
            <Comments
                titulo='Estagiário Técnico'
                descricao='Estagiário técnico no Centro de Operações da Distribuição/Transmissão - Energisa Minas Gerais'
                linkImg=<a href="https://www.grupoenergisa.com.br" target="_blank"><img src="./src/assets/energisa-logo.png" alt="" /></a>
                periodo='De 07/2017 Até 07/2018'
            />
            <Comments
                titulo='Aprendiz'
                descricao='Jovem aprendiz administrativo no DCMD - Energisa Minas Gerais.'
                linkImg=<a href="https://www.grupoenergisa.com.br" target="_blank"><img src="./src/assets/energisa-logo.png" alt="" /></a>
                periodo='De 07/2016 Até 07/2017'
            />
        </header>

    )
}