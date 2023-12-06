import ImgShoes1 from '../../../assets/images/1.png'
import ImgShoes2 from '../../../assets/images/2.png'
import ImgShoes3 from '../../../assets/images/3.png'
import ImgShoes4 from '../../../assets/images/4.png'
import ImgShoes5 from '../../../assets/images/5.png'
import ImgShoes6 from '../../../assets/images/6.png'
import Cards from "../../Cards/Cards"
import style from './style.module.css';

export default function ContainerCards() {
  return ( 
    <div className={style.container}>
        <Cards
        name={'Mid Dutch Green'}
        ImgShoes={ImgShoes1}
        price={' 1.1999,99'}
        />

        <Cards
        name={'High Zoom CMFT Tropical Twist'}
        ImgShoes={ImgShoes2}
        price={' 1.049,00'}
        />

        <Cards
        name={'Mid Dutch Green'}
        ImgShoes={ImgShoes3}
        price={' 1.350,00'}
        />

        <Cards
        name={'Mid GS "Light Smoke Grey"'}
        ImgShoes={ImgShoes4}
        price={' 1.585,00'}
        />

        <Cards
        name={'Mid SE Bright Citrus'}
        ImgShoes={ImgShoes5}
        price={' 949,99'}
        />

        <Cards
        name={'Mid Grey Camo'}
        ImgShoes={ImgShoes6}
        price={' 999,99'}
        />

    </div>
  )
}