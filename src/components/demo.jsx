import React from 'react';
import { Url } from 'url';
import Moment from 'moment';
import ni from '../assets/styling/NewsItem.scss';
import ImageGrayArrow from '../assets/images/grayarrow.gif';

export default class NewsItem extends React.Component {
    constructor ( props ) {
        super( props );

        const { item, rank } = this.props;

        const url = new Url( item.url );

        this.getDomain = url.hostname;

        const commentText = item.kids && item.kids.length ? `${ item.kids.length } comment` : 'discuss';

        const hideText = 'hide';

        this.getCommentLink = <a href={`https://news.ycombinator.com/item?id=${ item.id }`}>{commentText}</a>;

        this.getHideLink = <a href={`https://news.ycombinator.com/hide?id=${ item.id }&goto=news`}>{hideText}</a>;

        this.getSubtext = (
            <div className={ni.newsItem_subtext}>
                {item.score}
                {`points by `}
                <a href={`https://news.ycombinator.com/user?id=${ item.by }`}>{ item.by}</a>
                {Moment.utc( item.time * 1000 ).fromNow()}
                |
                {this.getHideLink}
                |
                {this.getCommentLink}
            </div>
        );

        this.getRank = (
            <div className={ni.newsItem_rank}>
                { rank }
            </div>
        );

        this.getVote = (
            <span className={ni.newsItem_vote}>
                <a href={`https://news.ycombinator.com/vote?for=${ item.id }&dir=up&goto=news`}>
                    <img src={ImageGrayArrow} width="10" alt="VoteArrow" />
                </a>
            </span>
        );

        this.getTitle = (
            <div className={ni.newsItem_title}>
                {this.getVote}
                <a className={ni.newsItem_titleLink} href={item.url ? item.url : `https://news.ycombinator.com/item?id=${ item.id }`}>{item.title}</a>
                {
                    item.url && (
                        <span className={ni.newsItem_domain}>
                            <a href={`https://news.ycombinator.com/from?site=${ this.getDomain }`}>

                                {this.getDomain}

                            </a>
                        </span>
                    )
                }
            </div>
        );
    }

    render () {
        return (
            <li className={ni.newsItem}>
                <div className={ni.newsItem_itemText}>
                    {this.getTitle}
                    {this.getSubtext}
                </div>
            </li>
        );
    }
}
