import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { setIsAnimeOpened, setIsCartoonOpened, setActiveAnime, setActiveCartoon, setAllHodies } from '../redux/slices/navigationSlice'

const Navigation = () => {
  const {isAnimeOpened, isCartoonOpened, allHoodies, activeAnime, activeCartoon} = useSelector(state => state.navigationSlice)

  const animeList = [
    {title: "Все", collection: "allAnime"},
    {title: "Наруто", collection: "Naruto"},
    {title: "Евангелион", collection: "Evangelion"},
    {title: "Джо Джо", collection: "JoJo"},
    {title: "Demon Slayer", collection: "Demon Slayer"},
    {title: "Атака Титанов", collection: "Atack on Titan"}
  ]
  const cartoonList = [
    {title: "Все", collection: "allCartoon"},
    {title: "Гравити Фолз", collection: "Gravity falls"},
    {title: "Рик и Морти", collection: "Rick and Morty"},
    {title: "Аркейн", collection: "Arcane"},
  ]
  const dispatch = useDispatch()
  return (
    <nav className="navigation">
        <div className="navList">
            <div className="nav__elem">
                <div onClick={() => dispatch(setAllHodies())} className={allHoodies? "active": ""}>Всё</div>
            </div>
            <div className="nav__elem">
                <div onClick={() => dispatch(setIsAnimeOpened())} className={isAnimeOpened || activeAnime ? "active": ""}>Аниме</div>
                {
                  isAnimeOpened && (
                    <div className="navigationPopup">
                    {
                      animeList.map((anime, i) => (
                        <div onClick={() => dispatch(setActiveAnime(anime.collection))} key={anime} className="navPopup__elem">{anime.title}</div>
                      ))
                    }
                    </div>
                    )
                  }
            </div>
            <div className="nav__elem">
                <div onClick={() => dispatch(setIsCartoonOpened())} className={isCartoonOpened || activeCartoon ? "active": ""}>Мультфильмы</div>
                {
                    isCartoonOpened && (
                      <div className="navigationPopup">
                      {
                        cartoonList.map((cartoon) => (
                            <div onClick={() => dispatch(setActiveCartoon(cartoon.collection)) } key={cartoon.collection} className="navPopup__elem">{cartoon.title}</div>
                        ))
                      }
                      </div>
                    )
                  }
            </div>
        </div>
    </nav>
  )
}

export default Navigation




