import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../components/Layout';
import Related from '../components/Recomended/Recomended';
import { ContentMax } from '../styles/global';
import {
    WrapperProfile,
    BodyProfile,
    ImgProfile,
    TitleProfile
} from '../components/UI/Profile/Profile.style';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function pokemon({ pokemon }) {


    return (
        <>
        <Head>
            <title>Pokemon App | {pokemon.name} Profile</title>
        </Head>
        <Layout title={pokemon.name}>  
            <ContentMax>
                <WrapperProfile>
                    <Link href="/">
                        <Button icon={<ArrowLeftOutlined />}>
                            Back to List
                        </Button>
                    </Link>
                    <BodyProfile>
                    <ImgProfile src={pokemon.image} alt={pokemon.name} />
                    <TitleProfile>{pokemon.name}</TitleProfile>
                    </BodyProfile>
                    <Related/>
                </WrapperProfile>
            </ContentMax>      
        </Layout>
        </>
    );
}

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        const paddedId = ('00' + id).slice(-3);
        pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { pokemon },
        };
    } catch (err) {
        console.error(err);
    }
}
