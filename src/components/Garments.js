import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Garments = () => {
    const { garments } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(garments)
    return(
        <div>
            <h1>Garments</h1>
            <ul>
                {
                    garments.map(garment => {
                        return(
                            <li key={garment.id}>{garment.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Garments