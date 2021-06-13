import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WrapperRecomended, Label, Title } from './Recomended.style';


const Recomended = () => {

    const random = (Math.floor(Math.random() * 25 ));
    const [recomended, setRecomended] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then((res) => {
            setRecomended(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <WrapperRecomended>
            <Label>Pokemon Relacionado</Label>
            <Title>{recomended.name}</Title>
        </WrapperRecomended> 
    )
}

export default Recomended;

