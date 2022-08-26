import React,{ useEffect, useState } from 'react';

import axios from 'axios'

import { useParams, Link } from 'react-router-dom'

//CSS
import styles from './Details.module.css'

//Components
import Loading from '../Loading';
import Button from '../ButtonsComponent/Button';


const Details = () => {

    const [data, setData] = useState([])

    const params = useParams()
    const id = params.id


    useEffect(()=>{
        const fetchAPi = async () =>{
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setData(await response.data)
        }
        fetchAPi()
    }, [])

    return (
        <>
            {
                data.length === 0 ? <Loading /> :
            <div className={styles.details}>
                <div className={styles.image}><img src={data.image} alt={id} /></div>
                <div className={styles.title}>
                    <div className={styles.route}><Link to="/products">products</Link> / details-{id}</div>
                    <h3 className={styles.name}>{data.title}</h3>
                    <h4 className={styles.price}>{data.price} $</h4>
                    <div className={styles.buttons}>
                        <Button data={data} />
                    </div>
                    <div className={styles.descriptions}>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Details;