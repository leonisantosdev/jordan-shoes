import Announcement from "./Announcement";
import style from './style.module.css';

export default function Banner() {
  return (
    <div className={style.container}>
      <div className={style.bannerImg}></div>
      <Announcement/>
    </div>
  )
}