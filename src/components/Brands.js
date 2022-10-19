import React from "react";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Brands = () => {
    const { brands } = useSelector(state => state)
    return(
        <div>
            <ul  className="brands-container">
                { 
                    brands.map(brand => {
                        return(
                           <Link 
                                
                                key={brand.id} 
                                to={`/brands/${brand.id}`}>
                                
                                <li 
                                    id="brand"
                                    className="brand-name"
                                    onMouseOver={() => {
                                        document.querySelector('#brand').style.cursor = 'grab'
                                    }}
                                    onMouseOut={() => console.log('exited')}
                                    >{brand.name}</li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Brands