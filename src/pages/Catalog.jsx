import React from 'react'

import Hoodie from '../components/Hoodie.jsx';
import { useSelector } from 'react-redux';

import Navigation from '../components/Navigation';

import '../assets/styles/catalog.css'

const Catalog = () => {
    const [hoodies, setHoodies] = React.useState([])
    const {activeAnime, activeCartoon, allHoodies} = useSelector(state => state.navigationSlice)

    const findCartoon = activeCartoon === "allCartoon"? `https://62d7f5dc9c8b5185c77fdb54.mockapi.io/hoodies?type=cartoon`: `https://62d7f5dc9c8b5185c77fdb54.mockapi.io/hoodies?collection=${activeCartoon}&type=cartoon`
    const findAnime = activeAnime === "allAnime"? `https://62d7f5dc9c8b5185c77fdb54.mockapi.io/hoodies?type=anime`: activeAnime? `https://62d7f5dc9c8b5185c77fdb54.mockapi.io/hoodies?collection=${activeAnime}`: findCartoon
    

    React.useEffect(() => {
        fetch(allHoodies? "https://62d7f5dc9c8b5185c77fdb54.mockapi.io/hoodies": findAnime)
        .then((response) => {
            response = response.json()
            return response
        })
        .then((data) => {
            setHoodies(data)
        })
    }, [findAnime, allHoodies])

  return (
    <div className='wrapper'>
        <Navigation />
        <div className="products">
        {
            hoodies && (hoodies.map((item) => (
                <Hoodie key={item.id} {...item} />   
            )))
        }
        </div>   
    </div>
  )
}

export default Catalog;