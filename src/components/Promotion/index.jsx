import { useEffect, useState } from "react";
import style from "./style.module.css";

export default function Promotion() {
  const [newText, setNewText] = useState(0);

  let promotionList = [
    "Teste agora e leve para casa",
    "Sua vida, mais confortável",
    "Air Jordan o tênis que combina com você",
    "Frete grátis para todo o Brasil",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNewText(prev => prev + 1 % promotionList.length)
    }, 2500)
    return () => clearInterval(interval)
  },[promotionList.length])

  if(newText > promotionList.length - 1) {
    setNewText(0)
  }

  console.log(newText)
  return (
    <div className={style.promotionInfo}>
      {promotionList[newText]}
    </div>
  );
}
