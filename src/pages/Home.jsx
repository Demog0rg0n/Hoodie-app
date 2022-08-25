import React from 'react'
import '../assets/styles/home.css'
import atackOnTitan from '../assets/img/atackOnTitan.jpg'
import startingSection from '../assets/img/startingSectionFon2.jpg'
import { Link } from 'react-router-dom'
import { setActiveAnime, setActiveCartoon, setAllHodies } from '../redux/slices/navigationSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
    <section className="startingSection">
        <div className="startingSection__content">
            <div className="startingSection__title">Магазин очень крутых Худи</div>
            <Link onClick={() => dispatch(setAllHodies())} className="mainButton" to={"/catalog"}>Каталог</Link>    
        </div>
        <img src={startingSection} alt="" className="startingSection__img" />
    </section>
    <section className="collectionsSection">
        <div className="collectionsContent">
            <Link onClick={() => dispatch(setActiveAnime("allAnime"))} className="collectionLink" to={"/catalog"}>
                <img className="collectionImg" src="https://sun9-74.userapi.com/impg/LxHeC9JjIGVUPWo7X7vrC1GW3f1CZYPchHWo7A/AkjApiUicZI.jpg?size=480x604&quality=95&sign=313b338954a7b6345daa8a69a0374cda&type=album" alt="" />
                <span className="collectionSubtitle">Аниме</span>
            </Link>
            <Link onClick={() => dispatch(setActiveCartoon("allCartoon"))} className="collectionLink" to={"/catalog"}>
                <img className="collectionImg" src="https://lh4.googleusercontent.com/proxy/9kblhn3G6BdmwJzkKDxSL6izB-SyGN9zDvcwWG7BdYpkJkBJVP4T-KS5_06tBf7EjGzT5zGR-xwW0BkEaOc5qVQrpvw5CT0eJlKyBlWs99hIl1vIEm8jlJfsZoB0WNfj=w1200-h630-p-k-no-nu" alt="" />
                <span className="collectionSubtitle">Мультфильмы</span>
            </Link>
        </div>
    </section> 
    <section className="newCollection">
        <div className="container">
            <div className="newCollection__content">
                <img className="newCollection__img" src={atackOnTitan} alt="" />
                <div className="newCollection__right">
                    <h1 className="newCollection__title">Новая коллекция по аниме:<br /> "Атака Титанов" </h1>
                    <Link onClick={() => dispatch(setActiveAnime("Atack on Titan"))} to={"/catalog"} className="mainButton">Перейти</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home