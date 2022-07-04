import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className='menu'>
            <section>
            <Link to="/">
                <img src='/images/logo.png' alt="logo"/>
            </Link>
            </section>
            <nav>
                <ul>
                    <li><Link to="/aluno">Aluno</Link></li>
                    <li><Link to="/docente">Docente</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header