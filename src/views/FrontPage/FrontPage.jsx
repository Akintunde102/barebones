import React, { Component } from 'react';

class UserProfile extends Component {
    loader () {
        return ( 
<div>
      {/* LOADER */}
      <div id="preloader">
      <div className="loader-wrapper">
        <div className="loader-new">
          <div className="ball" />
          <div className="ball" />
          <div className="ball" />
        </div>
        <div className="text">LOADING...</div>
      </div>
    </div>
    {/* END LOADER */}
    </div>
 );
    }

    header () {
        return (
            <div>
        {/* Start header */}
        <header className="top-navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container realign">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo-seo.png" alt />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-seo" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbars-seo">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="index.html">Register</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html">Login</a></li>
                  <li className="nav-item"><a className="nav-link" href="case-study.html">About Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* End header */}
        </div>
 );
    }

    slider () {
        return (
            <div>
    <div id="slider" className="sl-slider-wrapper">
          <div className="sl-slider">
            <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation={-25} data-slice2-rotation={-25} data-slice1-scale={2} data-slice2-scale={2}>
              <div className="sl-slide-inner">
                <div className="bg-img bg-img-1" />
                <h2>Electoral Reports At its Best</h2>
                <blockquote><p>4000+ Well Documented Reports</p>
                  <a href="#" className="bttn-new">Subscribe Today</a>
                </blockquote>
              </div>
            </div>
            <div className="sl-slide" data-orientation="vertical" data-slice1-rotation={10} data-slice2-rotation={-15} data-slice1-scale="1.5" data-slice2-scale="1.5">
              <div className="sl-slide-inner">
                <div className="bg-img bg-img-2" />
                <h2>Best Pricing</h2>
                <blockquote><p>It's Just A N1000 naira Monthly </p>
                  <a href="#" className="bttn-new">Register Today</a>
                </blockquote>
              </div>
            </div>
            <div className="sl-slide" data-orientation="vertical" data-slice1-rotation={-5} data-slice2-rotation={25} data-slice1-scale={2} data-slice2-scale={1}>
              <div className="sl-slide-inner">
                <div className="bg-img bg-img-4" />
                <h2>Endorsed By the Best</h2>
                <blockquote><p>Sign Up to Have A Look</p>
                  <a href="#" className="bttn-new">Register Now!</a>
                </blockquote>
              </div>
            </div>
          </div>{/* /sl-slider */}
          { /*
          <nav id="nav-dots" className="nav-dots">
            <span className="nav-dot-current" />
            <span />
            <span />
            <span />
          </nav> */}
        </div>{/* /slider-wrapper */}
        </div>
 );
    }

    statistics () {
        return (
            <div>
                <div className="parallax section lb">
                    <div className="container">
                        <div className="row text-center stat-wrap">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-briefcase" /></span>
                                <p className="stat_count">1200</p>
                                <h3>Complated Projects</h3>
                            </div>
{/* end col */}
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-happy" /></span>
                                <p className="stat_count">3210</p>
                                <h3>Happy Clients</h3>
                            </div>
{/* end col */}
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-idea" /></span>
                                <p className="stat_count">3781</p>
                                <h3>Customer Services</h3>
                            </div>
{/* end col */}
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-customer-service" /></span>
                                <p className="stat_count">4300</p>
                                <h3>Answered Questions</h3>
                            </div>
{/* end col */}
                        </div>
{/* end row */}
                    </div>
{/* end container */}
                </div>
{/* end section */}
      </div>
        );
    }

    services () {
        return (
            <div>
                <div id="services" className="section lb">
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="owl-services-seo owl-carousel owl-theme">
                                <div className="text-center">
                                    <div className="service-widget">
                                        <div className="post-media wow fadeIn">
                                            <img src="images/seo_01.png" alt className="img-fluid img-rounded" />
                                        </div>
                                        <h3>Search Engine Optimization</h3>
                                        <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                                    </div>
{/* end service */}
                                </div>
{/* end col */}
                                <div className="text-center">
                                    <div className="service-widget">
                                        <div className="post-media wow fadeIn">
                                            <img src="images/seo_02.png" alt className="img-fluid img-rounded" />
                                        </div>
                                        <h3>Email Marketing</h3>
                                        <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
                                    </div>
{/* end service */}
                                </div>
{/* end col */}
                                <div className="text-center">
                                    <div className="service-widget">
                                        <div className="post-media wow fadeIn">
                                            <img src="images/seo_03.png" alt className="img-fluid img-rounded" />
                                        </div>
                                        <h3>Pay Per Click</h3>
                                        <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis accumsan.</p>
                                    </div>
{/* end service */}
                                </div>
{/* end col */}
                                <div className="text-center">
                                    <div className="service-widget">
                                        <div className="post-media wow fadeIn">
                                            <img src="images/seo_04.png" alt className="img-fluid img-rounded" />
                                        </div>
                                        <h3>Website Development</h3>
                                        <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                                    </div>
{/* end service */}
                                </div>
{/* end col */}
                                <div className="text-center">
                                    <div className="service-widget">
                                        <div className="post-media wow fadeIn">
                                            <img src="images/seo_05.png" alt className="img-fluid img-rounded" />
                                        </div>
                                        <h3>Reporting</h3>
                                        <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
                                    </div>
{/* end service */}
                                </div>
{/* end col */}
                                <div className="text-center">
                                    <div className="service-widget">
                                        <div className="post-media wow fadeIn">
                                            <img src="images/seo_06.png" alt className="img-fluid img-rounded" />
                                        </div>
                                        <h3>Social Media Marketing</h3>
                                        <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis accumsan.</p>
                                    </div>
{/* end service */}
                                </div>
{/* end col */}
                            </div>
{/* end col */}
                        </div>
{/* end row */}
                    </div>
{/* end container */}
                </div>
{/* end section */}
            </div>
        );
    }

    pricing () {
        return (
            <div>
                <div id="pricing" className="section pricing-bg">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3> Our Pricing</h3>
                            <p>Most Affordable</p>
                        </div>
{/* end title */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pricing pricing-palden">
                                    <div className="pricing-item pricing__item--featured">
                                        <div className="pricing-deco">
                                            <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                                                <path
className="deco-layer deco-layer--1"
d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
fill="#FFFFFF"
opacity="0.6"
                                                />
                                                <path
className="deco-layer deco-layer--2"
d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
fill="#FFFFFF"
opacity="0.6"
                                                />
                                                <path
className="deco-layer deco-layer--3"
d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
fill="#FFFFFF"
opacity="0.7"
                                                />
                                                <path
className="deco-layer deco-layer--4"
d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
fill="#FFFFFF"
                                                />
                                            </svg>
                                            <div className="pricing-price">
<span className="pricing-currency">Just </span>
₦1000 
<span className="pricing-period">/ mo</span>
                                            </div>
                                            <h3 className="pricing-title">Business</h3>
                                        </div>
                                        <ul className="pricing-feature-list">
                                            <li className="pricing-feature">5 GB of space</li>
                                            <li className="pricing-feature">Support at $5/hour</li>
                                            <li className="pricing-feature">Full cloud access</li>
                                        </ul>
                                        <button className="bttn-new-a">Choose plan</button>
                                    </div>
                                </div>
                            </div>
{/* end col */}
                        </div>
{/* end row */}
                    </div>
{/* end container */}
                </div>
{/* end section */}
            </div>
        );
    }

    happyClients () {
        return ( 
<div>

<div id="testimonials" className="section wb">
          <div className="container">
            <div className="section-title text-center">
              <h3>Happy Clients</h3>
              <p className="lead">We thanks for all our awesome testimonials! There are hundreds of our happy customers! <br />Let's see what others say about Landigoo website template!</p>
            </div>{/* end title */}
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="testi-carousel owl-carousel owl-theme">
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img src="images/testi_01.png" alt className="img-fluid alignleft" />
                      <h4>James Fernando <small>- Manager of Racer</small></h4>
                    </div>
                    {/* end testi-meta */}
                    <div className="desc">
                      <h3><i className="fa fa-quote-left" /> Wonderful Support! <i className="fa fa-quote-right" /></h3>
                      <p>They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
                    </div>
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img src="images/testi_02.png" alt className="img-fluid alignleft" />
                      <h4>Jacques Philips <small>- Designer</small></h4>
                    </div>
                    {/* end testi-meta */}
                    <div className="desc">
                      <h3><i className="fa fa-quote-left" /> Awesome Services! <i className="fa fa-quote-right" /></h3>
                      <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                    </div>
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img src="images/testi_03.png" alt className="img-fluid alignleft" />
                      <h4>Venanda Mercy <small>- Newyork City</small></h4>
                    </div>
                    {/* end testi-meta */}
                    <div className="desc">
                      <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team! <i className="fa fa-quote-right" /></h3>
                      <p>The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                    </div>
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img src="images/testi_01.png" alt className="img-fluid alignleft" />
                      <h4>James Fernando <small>- Manager of Racer</small></h4>
                    </div>
                    {/* end testi-meta */}
                    <div className="desc">
                      <h3><i className="fa fa-quote-left" /> Wonderful Support! <i className="fa fa-quote-right" /></h3>
                      <p>They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
                    </div>
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img src="images/testi_02.png" alt className="img-fluid alignleft" />
                      <h4>Jacques Philips <small>- Designer</small></h4>
                    </div>
                    {/* end testi-meta */}
                    <div className="desc">
                      <h3><i className="fa fa-quote-left" /> Awesome Services! <i className="fa fa-quote-right" /></h3>
                      <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                    </div>
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img src="images/testi_03.png" alt className="img-fluid alignleft" />
                      <h4>Venanda Mercy <small>- Newyork City</small></h4>
                    </div>
                    {/* end testi-meta */}
                    <div className="desc">
                      <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team! <i className="fa fa-quote-right" /></h3>
                      <p>The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                    </div>
                  </div>{/* end testimonial */}
                </div>{/* end carousel */}
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end section */}
    </div>
 );
    }

    partners () {
        return (
            <div>
                <div id="support" className="section db">
                    <div className="container">
                        <div className="row">
                            <div id="logo-carousel" className="owl-carousel">
                                <div> 
{' '}
<img src="images/logo_01.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_02.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_03.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_04.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_05.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_06.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_01.png" alt />
{' '}
 </div>
                                <div> 
{' '}
<img src="images/logo_02.png" alt />
{' '}
 </div>
                            </div>
                        </div>
{/* end row */}
                    </div>
{/* end container */}
                </div>
{/* end section */}
            </div>
        );
    }

    footer () {
        return ( 
<div>

<footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <img src="images/logo-light.png" alt />
                  </div>
                  <p> SEO Mauris pharetra quam ut commodo malesuada. Sed a ornare purus, nec cursus tortor. Integer vehicula felis nec nunc pulvinar efficitur. In et semper odio. Sed laoreet ullamcorper augue, ut mattis metus mattis quis.</p>
                  <p>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                </div>{/* end clearfix */}
              </div>{/* end col */}
              <div className="col-lg-2 col-md-6 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h3>Information</h3>
                  </div>
                  <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>{/* end links */}
                </div>{/* end clearfix */}
              </div>{/* end col */}
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h3>Newsletter</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tincidunt risus, vitae sollicitudin tellus.</p>
                  <div className="news-box">
                    <form action="#" method="post">
                      <div className="form-group">
                        <input className="form-control" placeholder="Email address" type="email" />
                        <button type="submit">
                          <svg id="Layer_11" data-name="Layer 11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.19 17.71">
                            <path className="cls-1" d="M311,387.93a.89.89,0,0,0-1.27,1.26l6.44,6.44H295a.89.89,0,0,0-.89.89.9.9,0,0,0,.89.9h21.24l-6.44,6.42a.91.91,0,0,0,0,1.27.89.89,0,0,0,1.27,0l8-8a.87.87,0,0,0,0-1.25Z" transform="translate(-294.08 -387.67)" /> </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="widget-title">
                    <h3>Social</h3>
                  </div>
                  <ul className="footer-links social-md">
                    <li><a className="fb btn-a" title="Facebook" data-tippy-animation="scale" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="gi btn-a" title="Github" data-tippy-animation="scale" href="#"><i className="fa fa-github" /> </a></li>
                    <li><a className="tw btn-a" title="Twitter" data-tippy-animation="scale" href="#"><i className="fa fa-twitter" /> </a></li>
                    <li><a className="dr btn-a" title="Dribbble" data-tippy-animation="scale" href="#"><i className="fa fa-dribbble" /> </a></li>
                    <li><a className="pi btn-a" title="Pinterest" data-tippy-animation="scale" href="#"><i className="fa fa-pinterest" /> </a></li>
                  </ul>{/* end links */}
                </div>{/* end clearfix */}
              </div>{/* end col */}
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h3>Contact Details</h3>
                  </div>
                  <ul className="footer-links">
                    <li><a href="mailto:#">info@yoursite.com</a></li>
                    <li><a href="#">www.yoursite.com</a></li>
                    <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
                    <li>+61 3 8376 6284</li>
                  </ul>{/* end links */}
                </div>{/* end clearfix */}
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end container */}
        </footer>{/* end footer */}
    </div>
 );
    }

    copyrights () {
        return (
            <div>
                <div className="copyrights">
                    <div className="container">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-company-name">
All Rights Reserved. © 2018
{' '}
<a href="#">GreatSEO</a>
{' '}
Design By :
{' '}
<a href="https://html.design/">html design</a>
</p>
                            </div>
                        </div>
                    </div>
{/* end container */}
                </div>
{/* end copyrights */}
            </div>
        );
    }

    backup () {
        return (
            <div>
                <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up" /></a>
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.loader()}
                {this.header()}
                {this.slider()}
            </div>
        );
    }
}

export default UserProfile;
