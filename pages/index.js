import React, {useState} from 'react';
import Link from 'next/Link';
import Layout from '../components/Layout';
import {
  WrapperCard,
  Header 
} from '../components/UI/Card/Card.style';
import {
    ContentMax 
} from '../styles/global'
import { Row, Col, Button } from 'antd';



export default function Home({ pokemons }) {


    return (
        <Layout>
            <ContentMax>
            <Row gutter={12}>
                {pokemons.map((pokemon, index) => (
                    <Col xl={6} lg={6} md={12} sm={12} xs={24} key={index}>
                        <WrapperCard>
                          <Header>
                          <h3>{pokemon.name}</h3>
                          </Header>
                          <img
                              src={pokemon.image}
                              alt={pokemon.name}
                          />
                          <Link href={`/pokemon?id=${index + 1}`}>
                            <Button type="primary" block>Details</Button>
                          </Link>
                        </WrapperCard>
                    </Col>
                ))}
            </Row>
            </ContentMax>
        </Layout>
    );
}


export async function getStaticProps(context) {

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
        const { results } = await res.json();
        const pokemons = results.map((pokemon, index) => {
            const detailId = ('00' + (index + 1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${detailId}.png`;
            return { ...pokemon, image };

        });
        return {
            props: { pokemons },
            
        };
        
    } catch (err) {
        console.error(err);
    }



}


