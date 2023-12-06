import LogoJordan from '../../../assets/svg/logojordan.svg'
import style from './style.module.css'

export default function Announcement() {
  return (
    <div className={style.containerInfo}>
      <p><span><img src={LogoJordan} alt="Logo dos tênis Jordan" /></span> JordanShoes</p>
      <h2>A melhor loja de Jordan</h2>
      <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
    </div>
  )
}