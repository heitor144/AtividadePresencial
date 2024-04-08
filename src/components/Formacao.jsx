import styles from './Paginas.module.css'
import { Comments } from './Comments.jsx'

export function Formacao(){
    return(
        <header>
        <div className={styles.author}>
            <img className={styles.avatar} src="https://cdn-icons-png.flaticon.com/512/8224/8224731.png" alt="Imagem profile" />
            <div className={styles.authorInfo}>
                <h2><strong>Formação</strong></h2>
            </div>
        </div>
        <Comments
            titulo='Curso de Engenharia de Computação'
            descricao='Sou graduando em Engenharia de Computação pelo CEFET-MG - Campus Leopoldina desde 2019, onde tive a oportunidade de iniciar minha carreira em tecnologia, aprendendo e desenvolvendo diversas competências, tais como: Metodologias ágeis, Modelagem de sistemas, Banco de dados, Lógica em programação orientada a objetos (POO), Desenvolvimento Web, ente outras.'
            linkImg=<a href="https://www.cefetmg.br" target="_blank"><img src="./src/assets/cefet.png" alt="" /></a>
            periodo='De 02/2019 até o momento.'
        />
        <Comments
            titulo='Curso técnico em Eletromecânica'
            descricao='Durante o meu curso técnico de eletromecânica, aprendi como funciona a interação entre sistemas elétricos e mecânicos. Descobri como projetar, instalar e consertar equipamentos complexos que combinam esses dois elementos. Aprendi a ler diagramas elétricos, usar ferramentas de medição e diagnosticar problemas em máquinas. Também entendi a importância da segurança no trabalho. '
            linkImg=<a href="https://www.cefetmg.br" target="_blank"><img src="./src/assets/cefet.png" alt="" /></a>
            periodo='De 2015 Até 2016'
        />
        <Comments
            titulo='Curso de Aprendizagem em Processos Administrativos'
            descricao='Durante o meu curso de aprendizagem em processos administrativos, tive a oportunidade de explorar e entender os fundamentos do ambiente corporativo e das práticas administrativas. Ao longo do programa, adquiri uma compreensão abrangente das operações administrativas básicas, incluindo organização de documentos, arquivamento, protocolos de comunicação e procedimentos de escritório.
            Aprendi a utilizar eficazmente ferramentas de software de escritório, como processadores de texto, planilhas e programas de apresentação, para criar e editar documentos profissionais. Além disso, familiarizei-me com conceitos importantes em gestão de tempo e priorização de tarefas, que são essenciais para manter a eficiência no ambiente de trabalho.'
            linkImg=<a href="https://www.portaldaindustria.com.br/senai/" target="_blank"><img src="./src/assets/senai.png" alt="" /></a>
            periodo='De 07/2016 Até 07/2017'
        />
    </header>
    )
}