import React, { useState } from 'react'

function Tour({ id, name, price, info, image, removeUser }) {
    const [readMore, setReadMore] = useState(false)
    console.log(name);
    return (
        <div>
            <div className="container" key={id}>
                <h1>{name}</h1>
                <img src={image} alt="" />
                <h6>{price}</h6>
                <p>{
                    readMore ? info : `${info.slice(0, 150)}`}

                    <p onClick={() => setReadMore(!readMore)}>{readMore ? "more less" : "show more"}</p>
                </p>
                <button className="btn btn-info" onClick={() => removeUser(id)}>Not Instreasded</button>
            </div>
        </div>
    )
}

export default Tour
