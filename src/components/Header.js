import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Shaughn Finnerty</h1>
                <p>Full Stack Software Developer</p>            
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {window.open("https://registry.jsonresume.org/finnergizer?theme=elegant", "_blank")}}>Resume</a></li>            
            </ul>
        </nav>
        <ul className="icons">
            <li><a href="https://ca.linkedin.com/in/shaughn-finnerty-604341ba" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.github.com/finnergizer" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.instagram.com/finnergizer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="mailto:me@shaughn.net" className="icon fa-envelope"><span className="label">Instagram</span></a></li>
          </ul>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
