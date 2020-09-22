import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

function Home() {
    return (
       <Layout>
           <Jumbotron className="text-center" style={{ margin: '5rem', backgroundColor: '#fff' }}>
               <h1>Welcome to Admin Dashboard</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et molestias, corporis quam beatae necessitatibus minus at magni pariatur quis quas, voluptate, alias nihil recusandae incidunt dicta iste iure magnam dolore fugiat rem reprehenderit. Veniam molestias earum laboriosam saepe quam. In quos ullam magnam molestiae praesentium, unde amet totam saepe, ut adipisci quasi delectus vel tempora ipsam blanditiis necessitatibus sed hic doloribus suscipit? Unde rem asperiores tempora ratione ipsam vitae cum doloribus dicta, dolorem corrupti eveniet molestias odit voluptates dolorum nisi eaque pariatur, repudiandae ab voluptatem tempore! Culpa illo corrupti, dolorum commodi veritatis voluptatibus molestiae repellat praesentium quia, rerum officiis blanditiis?</p>
           </Jumbotron>
       </Layout>
    )
}

export default Home
