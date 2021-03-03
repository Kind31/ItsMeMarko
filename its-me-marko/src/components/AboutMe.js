import React from 'react'
import Me from '../img/me.png'

class AboutMe extends React.Component {
  render() {
    return (
      <div className='aboutMe'>
        <div className='text'>
          <div className='content'>
            <h1>it's me, marko!</h1>
            <ul>
              <li>
                <div>name</div>marko nenonen
              </li>
              <li>
                <div>age</div> 31
              </li>
              <li>
                <div>phone</div> +358504661792
              </li>
              <li>
                <div>mail</div> marko.nenonen@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className='image'>
          <img src={Me} alt='me' />
        </div>
      </div>
    )
  }
}

export default AboutMe
