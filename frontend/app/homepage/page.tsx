import React from 'react'
import Nav from '../shared_components/Nav';
import Footer from '../shared_components/Footer';
import Heropage from './Heropage';
import Featured from './Featured';
import Contact from './Contact';
import User_dashboard from '../dashboard/User_dashboard';

function Homepage() {
  return (
    <div>
        {/* <Nav />
        <Heropage /> */}
        <User_dashboard />
        {/* <Featured />
        <Contact /> */}
        {/* <Footer /> */}
    </div>
  )
}
export default Homepage