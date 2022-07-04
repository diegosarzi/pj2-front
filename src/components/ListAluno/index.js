import { useEffect, useState } from 'react';
import { busca } from '../../api/api';
import { Link } from 'react-router-dom'
import './ListAluno.css'


const ListAluno = ({url}) => {

    const [alunos, setAlunos] = useState([]);
    
    useEffect(()=>{
        busca(url, setAlunos)
    }, [url])

    return (
        <section className='list-content'>
            <h2>Alunos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cep</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(item => 
                        <tr key={`${item.id}-tr`}>
                            <td key={item.id}>{item.id}</td>
                            <td key={item.nome}>{item.nome}</td>
                            <td key={item.email}>{item.email}</td>
                            <td key={item.cep}>{item.cep}</td>
                            <td><Link to={`/aluno/${item.id}`}><img key={`${item.id}-img`} src='/images/icon_edit.png' alt="edit"/></Link></td>
                            <td><Link to={`/aluno/${item.id}`}><img key={`${item.id}-img`} src='/images/icon_delete.png' alt="delete"/></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>

    )
}

export default ListAluno;