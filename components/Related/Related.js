import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { WrapperRecomended, Label, Title } from './Recomended.style';


const Related = () => {

    const random = (Math.floor(Math.random() * 25 ));
    const [related, setRelated] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then((res) => {
          setRelated(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    })


    console.log(related)


    return(
        <WrapperRecomended>
            <Label>Pokemon Relacionado</Label>
            <Title>{related.name}</Title>
        </WrapperRecomended> 
    )
}

export default Related;

