import BaseInput from '../BaseInput';
import Button from '../Button';
import axios from 'axios';

import './BaseFormAluno.css'
import { useState } from 'react';

const BaseFormAluno = () => {

    const [rua, setRua] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const buscaCep = (e,input) => {
        if(input.label === 'CEP' && e.target.value.length >= 8){
            axios.get(`https://viacep.com.br/ws/${e.target.value}/json/`).then((res) => {
                setRua(res.data.logradouro)
                setBairro(res.data.bairro)
                setCidade(res.data.localidade)
                setEstado(res.data.uf)

                console.log(res.data)
            })
        }
    }

    const aoSalvar = (event) => {
        event.preventDefault();
        
        // return;
        const payload = {
            nome,
            email,
            telefone,
            cpf,
            cep,
            rua,
            numero,
            cidade,
            bairro,
            estado
        }

        axios.post("http://localhost:3300/pessoas", payload).then((data) => {
                console.log(data)
            }
        )

        setRua('')
        setNome('')
        setEmail('')
        setCelular('')
        setCpf('')
        setCep('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setCidade('')
        setEstado('')

    }


    return (
        <section className='form-content'>
            <form onSubmit={aoSalvar}>
                <h2>Cadastro do Aluno</h2>

                <table>
                    <tbody>
                        <tr>
                            <td><BaseInput aoAlterado={valor => setNome(valor)} valor={nome} label='Nome' placeholder='Digite seu nome...' /></td>
                            <td><BaseInput aoAlterado={valor => setEmail(valor)} valor={email} type='email' label='Email' placeholder='Digite seu email...' /></td>
                        </tr>
                        <tr>
                            <td><BaseInput aoAlterado={valor => setCelular(valor)} valor={telefone} label='Celular' placeholder='Digite seu celular...' dataMask="(99) 99999-9999"/></td>
                            <td><BaseInput aoAlterado={valor => setCpf(valor)} valor={cpf} label='CPF' placeholder='Digite seu cpf...' dataMask="999.999.999-99"/></td>
                        </tr>
                        <tr>
                            <td>
                                <BaseInput aoAlterado={valor => setCep(valor)} valor={cep} label='CEP' placeholder='Digite seu cep...' buscaCep={buscaCep}/>
                            </td>
                        </tr>
                        <tr>
                            <td><BaseInput aoAlterado={valor => setRua(valor)} valor={rua} label='Rua' placeholder='Digite seu rua...' /></td>
                            <td><BaseInput aoAlterado={valor => setNumero(valor)} valor={numero} label='Número' placeholder='Digite o número...' /></td>
                        </tr>
                        <tr>
                            <td><BaseInput aoAlterado={valor => setBairro(valor)} valor={bairro} label='Bairro' placeholder='Digite seu bairro...' /></td>
                            <td><BaseInput aoAlterado={valor => setCidade(valor)} valor={cidade} label='Cidade' placeholder='Digite sua cidade...' /></td>
                        </tr>
                        <tr>
                            <td><BaseInput aoAlterado={valor => setEstado(valor)} valor={estado} label='Estado' placeholder='Digite seu estado...' /></td>
                            <td><BaseInput aoAlterado={valor => setComplemento(valor)} valor={complemento} label='Complemento' placeholder='Digite o complemento...' /></td>
                        </tr>
                    </tbody>
                </table>
               
                <Button>
                    Cadastrar
                </Button>
            </form>
        </section>
    )
}

export default BaseFormAluno;