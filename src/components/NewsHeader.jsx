import React from 'react';
import imageLogo from '../assets/images/y18.gif';
import nh from '../assets/styling/NewsHeader.scss';

export default class NewsHeader extends React.PureComponent {
    constructor ( props ) {
        super( props );

        this.getLogo = (
            <div className={nh.newsHeader_logo}>
                <a href=" https://news.ycombinator.com/ ">
                    <img src={imageLogo} alt="logo" />
                </a>
            </div>
        );

        this.getTitle = (
            <div className={nh.newsHeader_title}>
                <a className={nh.newsHeader_textLink} href="https://news.ycombinator.com/ "> Hacker News </a>
            </div>
        );

        this.navLinks = [
            {
                name: 'new',
                url: 'newest'
            },
            {
                name: 'comments',
                url: 'newcomments'
            },
            {
                name: 'show',
                url: 'show '
            },
            {
                name: 'ask',
                url: 'ask'
            },
            {
                name: 'jobs',
                url: 'jobs'
            },
            {
                name: 'submit',
                url: 'submit'
            }
        ];

        this.getNav = (
            <div className={nh.newsHeader_nav}>
                {
                    this.navLinks.map( navLink => (
                        <a key={navLink.url} className={`${ nh.newsHeader_navLink } ${ nh.newsHeader_textLink }`} href={`https://news.ycombinator.com/${ navLink.url }`}>
                            {navLink.name}
                        </a>
                    ) )
                }
            </div>
        );

        this.getLogin = (
            <div className={nh.newsHeader_login}>
                <a className={nh.newsHeader_textLink} href="https://news.ycombinator.com/login?goto=news"> login </a>
            </div>
        );
    }

    render () {
        return (
            <div className={nh.newsHeader}>
                {this.getLogo}
                {this.getTitle}
                {this.getNav}
                {this.getLogin}
            </div>
        );
    }
}
