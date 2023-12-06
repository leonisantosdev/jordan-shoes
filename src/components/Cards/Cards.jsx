import style from './style.module.css';

export default function Cards(props) {
  return ( 
    <div className={style.container}>
       <div className={style.containerImg}>
        <img src={props.ImgShoes} alt='Imagem do tênis Jordan' />
       </div>
        <p>Air Jordan 1 {props.name}</p>
        <a href="#">Tênis Air Jordan</a>
        <p>R$ {props.price}</p>
    </div>
  )
}