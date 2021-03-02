import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='/' className='nav-link'>
              about me
            </a>
          </li>
          <li>
            <a href='/work-experience' className='nav-link'>
              work experience
            </a>
          </li>
          <li>
            <a href='/interests' className='nav-link'>
              interests
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
