import React from 'react';

export default function header () {
    return (
        <div>
            <header className="header_area clearfix">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 h-100">
                            <div className="menu_area h-100">
                                <nav className="navbar h-100 navbar-expand-lg align-items-center">

                                    <a className="navbar-brand" href="index.html">
                                        <img src="img/core-img/logo.png" alt="logo" />
                                    </a>

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>

                                    <div className="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                                        <ul className="navbar-nav animated" id="nav">
                                            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="moshDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                <div className="dropdown-menu" aria-labelledby="moshDropdown">
                                                    <a className="dropdown-item" href="index.html">Home</a>
                                                    <a className="dropdown-item" href="about.html">About Us</a>
                                                    <a className="dropdown-item" href="services.html">Services</a>
                                                    <a className="dropdown-item" href="portfolio.html">Portfolio</a>
                                                    <a className="dropdown-item" href="blog.html">Blog</a>
                                                    <a className="dropdown-item" href="contact.html">Contact</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="elements.html">Elements</a>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                                            <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                                            <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                                            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                        </ul>

                                        <div className="search-form-area animated">
                                            <form action="#" method="post">
                                                <input type="search" name="search" id="search" placeholder="Type keywords &amp; hit enter" />
                                                <button type="submit" className="d-none">
                                                    <img src="img/core-img/search-icon.png" alt="Search" />
                                                </button>
                                            </form>
                                        </div>

                                        <div className="search-button">
                                            <a href="#" id="search-btn"><img src="img/core-img/search-icon.png" alt="Search" /></a>
                                        </div>

                                        <div className="login-register-btn">
                                            <a href="#">Login</a>
                                            <a href="#">/ Register</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
