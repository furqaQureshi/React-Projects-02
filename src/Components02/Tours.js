import React from 'react'
import Tour from './Tour'

function Tours({ tours,removeUser }) {
    return (
        <div>
            <div className="contaier">
                {tours.map((tour) => {
                   return <Tour key={tour.id} {...tour} removeUser={removeUser}/>
                })}
            </div>
        </div>
    )
}

export default Tours