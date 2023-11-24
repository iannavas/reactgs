// import { FaPowerOff } from "react-icons/fa6";
import styles from './Header.module.css'

function HeaderPage () {
    return(
        <div className={styles.HeaderLogin}>
            <div className={styles.HeaderConteudo}>
                <img className={styles.fotologo} src='https://via.placeholder.com/70' />
                <div className={styles.paginas}>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/alergias">ALERGIAS</a></li>
                        <li>EXAMES</li>
                        <li>CONSULTAS</li>
                        <li>MEDICAMENTOS</li>
                    </ul> 
                </div>
                <nav className={styles.HeaderDireita}>
                    {/* <FaPowerOff /> */}
                    <h2>SAIR</h2>
                </nav>
            </div>
        </div>
    )
}

export default HeaderPage