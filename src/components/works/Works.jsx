import React from 'react'
import './Works.css'
import game from '../../assets/video-game.png'
import onlineshop from '../../assets/cyber-monday.png'
import ps from '../../assets/photo-editing.png'
import news from '../../assets/news.png'
import code from '../../assets/coding.png'
import music from '../../assets/listening.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention tgo the smallest details and making usre that my works is pixel perfect. I am excited to bring my skills and experience to hep business achieve their goalsa and create a strong online presence.</span>
        <div className="worksImgs">
            <img src={game} alt="" className="worksImg" />
            <img src={onlineshop} alt="" className="worksImg" />
            <img src={ps} alt="" className="worksImg" />
            <img src={news} alt="" className="worksImg" />
            <img src={code} alt="" className="worksImg" />
            <img src={music} alt="" className="worksImg" />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works