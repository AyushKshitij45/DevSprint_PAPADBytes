import React from 'react'
import { Component,hr } from 'react'
import "./home.css"
import logo from './logo.png';

class Home extends Component {
    render (){
        return(
            <div className="App">
            <header className="App-header">
            <img src={logo} />
            <div className='homeText'>
                <h5>
                If you're looking for help with your content marketing strategy, look no further than content.ly. We provide artificial intelligence generated content for product descriptions, cold emails, insta captions, and tweets. This means that you can focus on your core business and leave the content creation to us. Here's how it works: our algorithm analyzes your products and target audience and then creates custom content that is designed to convert. Whether you're looking for short, snappy product descriptions or in-depth blog posts, we've got you covered. What's more, our content is always up-to-date and engaging, which means that your customers will keep coming back for more. So if you're looking for a content marketing solution that will take your business to the next level, look no further than content.ly.
                </h5>
            </div>
              
              
            </header>
            </div>
        )
    }
}

export default Home