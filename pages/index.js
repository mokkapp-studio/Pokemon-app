import React, {useState} from 'react';
import Link from 'next/Link';
import Layout from '../components/Layout';
import {
  WrapperCard,
  Header 
} from '../components/UI/Card/Card.style';
import { Row, Col, Button } from 'antd';


export default function Home({ pokemon }) {


    return (
        <Layout>
            <Row gutter={12}>
                {pokemon.map((pokeman, index) => (
                    <Col xl={6} lg={6} md={12} sm={12} xs={24} key={index}>
                        <WrapperCard>
                          <Header>
                          <h3>{pokeman.name}</h3>
                          </Header>
                          <img
                              src={pokeman.image}
                              alt={pokeman.name}
                          />
                          <Link href={`/pokemon?id=${index + 1}`}>
                            <Button type="primary" block>Details</Button>
                          </Link>
                        </WrapperCard>
                    </Col>
                ))}
            </Row>
        </Layout>
    );
}


export async function getStaticProps(context) {

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
        const { results } = await res.json();
        const pokemon = results.map((pokeman, index) => {
            const detailId = ('00' + (index + 1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${detailId}.png`;
            return { ...pokeman, image };

        });
        return {
            props: { pokemon },
            
        };
        
    } catch (err) {
        console.error(err);
    }



}




