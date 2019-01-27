import React from 'react';
import { ToastContainer, ToastStore } from 'react-toasts';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';
import nh from '../assets/styling/NewsHeader.scss';

export default class NewsList extends React.PureComponent {
    render () {
        const alertWord = 'Reloaded';

        ToastStore.success( alertWord );

        const { items } = this.props;

        return (
            <div className={nh.newsList}>
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_LEFT} lightBackground />
                <NewsHeader />
                <ol className={nh.newsList_newsItem}>
                    {
                        items.map( ( item, index ) => {
                            const dataItem = item.data;
                            return (
                                <NewsItem key={dataItem.id} item={dataItem} rank={index + 1} />
                            );
                        } )
                    }
                </ol>
            </div>
        );
    }
}
