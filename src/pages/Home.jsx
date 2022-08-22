import React from 'react'
import '../assets/styles/main.css'
import atackOnTitan from '../assets/img/atackOnTitan.jpg'
import { Link } from 'react-router-dom'
import { setActiveAnime, setActiveCartoon, setAllHodies } from '../redux/slices/navigationSlice'
import { useDispatch } from 'react-redux'

const Main = () => {
  const dispatch = useDispatch()
  return (
    <>
    <section className="startingSection">
        <div className="startingSection__content">
            <div className="startingSection__title">Магазин очень крутых Худи</div>
            <Link to={"/catalog"} onClick={setAllHodies()} className="mainButton">Каталог</Link>    
        </div>
    </section>
    <section className="collectionsSections">
        <div className="container">
            <div className="collectionsContent">
                <Link onClick={() => dispatch(setActiveAnime("allAnime"))} className="collectionLink" to={"/catalog"}>
                    <img className="collectionImg" src="https://sun9-74.userapi.com/impg/LxHeC9JjIGVUPWo7X7vrC1GW3f1CZYPchHWo7A/AkjApiUicZI.jpg?size=480x604&quality=95&sign=313b338954a7b6345daa8a69a0374cda&type=album" alt="" />
                    <div className="collectionSubtitle">Аниме</div>
                </Link>
                <Link onClick={() => dispatch(setActiveCartoon("allCartoon"))} className="collectionLink" to={"/catalog"}>
                    <img className="collectionImg" src="https://lh4.googleusercontent.com/proxy/9kblhn3G6BdmwJzkKDxSL6izB-SyGN9zDvcwWG7BdYpkJkBJVP4T-KS5_06tBf7EjGzT5zGR-xwW0BkEaOc5qVQrpvw5CT0eJlKyBlWs99hIl1vIEm8jlJfsZoB0WNfj=w1200-h630-p-k-no-nu" alt="" />
                    <div className="collectionSubtitle">Мультфильмы</div>
                </Link>
            </div>
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

export default Main