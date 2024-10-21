import React from 'react'
import { Link } from 'react-router-dom';
import banner from './../assets/banner.png'

export const MainPage = () => {
  return (
    <div className='content'>
    <div className="banner">
      <img src={banner}/>
      <h5>Проверьете свой словарный запас английских слов онлайн!</h5>
       <p>1000 самых используемых слов языка = 80 % разговорной лексики. Проверьте, насколько вы готовы к каждодневным разговорам.</p>
    </div>
    <div className="group">
    <Link to='/tests'><button className="btn-m accent">проверить знания</button></Link>
    <Link to='/wordslist'><button className="btn-m">список слов</button></Link>
  </div>
  </div>
  )
}
