import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';
import Products from './Prods'
import {Link } from 'react-router-dom'

import { Carousel, Card, Button ,Container,CardColumns} from 'react-bootstrap'
import Nav from './Nav'

function Shop() {
    

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://django-rest-backend-ecom.herokuapp.com/prodapi/').then(res => {
            
            setData(res.data)
            
        })
            .catch(err => {
                console.log(err)

            })

    }, [])


    return (


           <div>
                <Nav/>

               <Container>
                   <CardColumns className="my-5 ">






                {data.map((data, index) => {
                    return (

                           
                        
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <Card key={index} style={{width:'18rem'}} border={'dark'} className="text-center h-100 card"   >
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body >
                                    <Card.Title>{data.prod_name}</Card.Title>
                                    <Card.Title>RS-{data.price}</Card.Title>
                                    <Card.Text>
                                        
                                        {data.desc}
                                    </Card.Text>
                                  <Link to={`/shop/${data.id}`}>  <Button variant="dark">View/Buy Product</Button></Link>
                                </Card.Body>
                            </Card>
                            </div>

                        



                    )
                })}
                 </CardColumns>
                 </Container>





        
        </div>




    )

}

export default Shop;
