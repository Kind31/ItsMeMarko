import React from 'react'
import LinkedIn from '../img/linkedin.svg'
import GitHub from '../img/github.svg'
import Instagram from '../img/instagram.svg'

class SocialMedia extends React.Component {
  render() {
    return (
      <div className='socialMedia'>
        <div className='container'>
          <a
            href='https://instagram.com/realmarkoboy'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Instagram} alt='instagram' />
          </a>
          <a
            href='https://linkedin.com/in/marko-nenonen-05a3a88a/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedIn} alt='linkedin' />
          </a>
          <a href='https://github.com/Kind31/' target='_blank' rel='noreferrer'>
            <img src={GitHub} alt='github' />
          </a>
        </div>
      </div>
    )
  }
}

export default SocialMedia
