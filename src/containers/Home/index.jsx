import React, { useEffect } from 'react'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './style.css';
import { NavLink } from 'react-router-dom';

const Home = (props) => {
    return (
       <Layout>
           <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        <ul>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/products'}>Products</NavLink></li>
                            <li><NavLink to={'/orders'}>Orders</NavLink></li>
                        </ul>
                    </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>Container</Col>
                </Row>
           </Container>
           
           {/* <Jumbotron className="text-center" style={{ margin: '5rem', backgroundColor: '#fff' }}>
               <h1>Welcome to Admin Dashboard</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et molestias, corporis quam beatae necessitatibus minus at magni pariatur quis quas, voluptate, alias nihil recusandae incidunt dicta iste iure magnam dolore fugiat rem reprehenderit. Veniam molestias earum laboriosam saepe quam. In quos ullam magnam molestiae praesentium, unde amet totam saepe, ut adipisci quasi delectus vel tempora ipsam blanditiis necessitatibus sed hic doloribus suscipit? Unde rem asperiores tempora ratione ipsam vitae cum doloribus dicta, dolorem corrupti eveniet molestias odit voluptates dolorum nisi eaque pariatur, repudiandae ab voluptatem tempore! Culpa illo corrupti, dolorum commodi veritatis voluptatibus molestiae repellat praesentium quia, rerum officiis blanditiis?</p>
           </Jumbotron> */}
       </Layout>
    )
}

export default Home
