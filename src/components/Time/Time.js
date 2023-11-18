import Card from '../Card/Card'
import './Time.css'

export default function Time(props) {
    
    return (
        <section className='time' style={{ backgroundColor:props.corFundo }}>
            <h3>{props.nome}</h3>
            <div className='linha-horizontal' style={{ backgroundColor:props.corDestaque }}></div>
            <div className='cards'>
                <Card
                    corDestaque={props.corDestaque}
                />
                <Card
                    corDestaque={props.corDestaque}
                />
                <Card
                    corDestaque={props.corDestaque}
                />
                <Card
                    corDestaque={props.corDestaque}
                />
            </div>
        </section>
    )
}
