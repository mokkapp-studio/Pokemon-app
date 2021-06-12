import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';


const Related = () => {

    const random = (Math.floor(Math.random() * 25));
    const [related, setRelated] = useState({})

    const CallRecomended = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then((res) => {
          setRelated(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    console.log(related)


    return(
        <>
            <h1>Pokemon Relacionado</h1>
            <Button onClick={() => CallRecomended()}>Buscar</Button>
            <p>{related.name}</p>
        </>
    )
}

export default Related;

