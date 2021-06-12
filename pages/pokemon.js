import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../components/Layout';
import Related from '../components/Related/Related';


export default function pokemon({ pokeman }) {

    // const random = (Math.floor(Math.random() * 25));
    // const [related, setRelated] = useState({})

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
    //     .then((res) => {
    //       setRelated(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // })

    return (
        <>
        <Head>
            <title>Pokemon App | {pokeman.name} Profile</title>
        </Head>
        <Layout title={pokeman.name}>        
            <img src={pokeman.image} alt={pokeman.name} />
            <p>
                <span >Weight:</span> {pokeman.weight}
            </p>
            <p>
                <span >Height:</span>
                {pokeman.height}
            </p>
            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
            <Related/>
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
