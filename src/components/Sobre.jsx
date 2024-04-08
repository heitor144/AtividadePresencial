import styles from './Paginas.module.css'

export function Sobre() {
    return (
        <div>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="./src/assets/info.png" alt="Imagem profile" />
                    <div className={styles.authorInfo}>
                        <h2><strong>Sobre Mim</strong></h2>
                    </div>
                </div>
            </header>
            <article className={styles.sobre}>
                <div className={styles.content}>
                    <p> Sou graduando em Engenharia de Computação pelo CEFET-MG - Campus Leopoldina desde 2019, onde tive a oportunidade de iniciar minha carreira em tecnologia, aprendendo e desenvolvendo diversas competências, tais como: Metodologias ágeis, Modelagem de sistemas, Banco de dados, Lógica em programação orientada a objetos (POO), Desenvolvimento Web, ente outras.
                        <br /><br />
                        Mas como não vivemos apenas de teoria, resolvi buscar uma oportunidade de aprimorar meus conhecimentos práticos e para isso consegui meu primeiro estágio no time de desenvolvimento do grupo Energisa no final de 2023 e onde me encontro atualmente.
                        Nesse estágio tenho adquirido experiência em PowerBuilder, C#, .Net e Banco de Dados Oracle.
                        <br /><br />
                        Estou em constante busca por oportunidades para expandir e aprimorar minhas habilidades em desenvolvimento de software, especialmente em ambientes .NET, para impulsionar minha carreira e alcançar um nível mais avançado de profissionalismo e excelência técnica. Estou entusiasmado em explorar novas oportunidades de aprendizado e contribuir de forma significativa para projetos desafiadores, enquanto continuo a me desenvolver como um desenvolvedor versátil e criativo. Minha meta de médio a longo prazo é tornar-me um especialista em tecnologias e contribuir para o sucesso de minha equipe e organização, oferecendo soluções inovadoras e de alta qualidade.
                    </p>
                </div>
            </article>

        </div>
    )

}