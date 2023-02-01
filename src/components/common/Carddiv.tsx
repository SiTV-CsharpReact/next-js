import '../../styles/card.css'
type Props = any
const CardDiv = (props: Props) => {
    return (
        <div className='card' color='#fff'>
            {props.children}
        </div>
    )
}

export default CardDiv