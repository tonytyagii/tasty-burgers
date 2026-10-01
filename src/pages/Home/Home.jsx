import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import Section2 from './Section2'
import "../../styles/HomeStyle.css"
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'


const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Secion hero Banner */}

        <Section1/>

         {/* Home Secion About Banner */}

         <Section2/>

          {/* Home Secion Menu */}

          <Section3/>

           {/* Home Secion Promotion */}

          <Section4/>

           {/* Home Secion Shop */}

           <Section5/>


             {/* Home Secion Blog */}
             <Section6/>

              {/* Home Secion Contact */}
              <Section7/>

      </Layout>
    </>
  )
}

export default Home