import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../components/Layout';
import Related from '../components/Related/Related';
import { ContentMax } from '../styles/global';
import {
    WrapperProfile,
    BodyProfile,
    ImgProfile,
    TitleProfile
} from '../components/UI/Profile/Profile.style';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function pokemon({ pokeman }) {


    return (
        <>
        <Head>
            <title>Pokemon App | {pokeman.name} Profile</title>
        </Head>
        <Layout title={pokeman.name}>  
            <ContentMax>
                <WrapperProfile>
                    <Link href="/">
                        <Button icon={<ArrowLeftOutlined />}>
                            Back to List
                        </Button>
                    </Link>
                    <BodyProfile>
                    <ImgProfile src={pokeman.image} alt={pokeman.name} />
                    <TitleProfile>{pokeman.name}</TitleProfile>
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
        const pokeman = await res.json();
        const paddedId = ('00' + id).slice(-3);
        pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { pokeman },
        };
    } catch (err) {
        console.error(err);
    }
}
