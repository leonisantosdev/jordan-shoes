
import Text from "../Text"
import style from './style.module.css';
import ContainerCards from './ContainerCards'

export default function Main() {
  
  return (
    <div className={style.container}>
      <Text/>
      <ContainerCards/>
    </div>
  )
}