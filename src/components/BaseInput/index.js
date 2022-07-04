import './BaseInput.css';
import InputMask from 'react-input-mask';

const BaseInput = (props) => {
    const aoDigitar = (event)=>{
        if(props.label === 'CEP'){
            props.buscaCep(event, props)
        }

        props.aoAlterado(event.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <InputMask type={props.type} value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} mask={props.dataMask} maskChar=" " />
        </div>
    )
}

export default BaseInput;