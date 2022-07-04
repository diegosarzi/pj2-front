import BaseInput from '../BaseInput';
import './BaseFormDocente.css'

const BaseFormDocente = () => {
    return (
        <section className='form-content'>
            <form>
                <h2>Aluno</h2>
                <BaseInput placeholder='Digite seu nome...' label='Nome'/>
                <BaseInput placeholder='Digite seu nome...' label='Nome'/>
                <BaseInput placeholder='Digite seu nome...' label='Nome'/>
                <BaseInput placeholder='Digite seu nome...' label='Nome'/>
            </form>
        </section>
    )
}

export default BaseFormDocente;