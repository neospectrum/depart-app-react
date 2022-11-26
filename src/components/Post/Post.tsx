import React, { FC } from 'react';
import { IEvent } from '../../models/IEvent';
import { INew } from '../../models/INew';
import { formatDate } from '../../utils/formatDate';
import './Post.scss';

interface PostProps { 
    post: IEvent | INew;
    type?: string
}

export const Post: FC<PostProps> = ({ post, type }) => {
    return (
        <div className='post'>
            <div className="post__title">
                <div className='title'>{ post.title }</div>
                { ('start_date') in post &&
                    <div className='post__date'>{ formatDate(post.start_date, true) } - { formatDate(post.end_date) }</div>
                }
            </div>
            <div className="post__image">
                <img src={ post.full_img_url } alt="Изображение новости" />
            </div>
            <div className="post__text" dangerouslySetInnerHTML={{ __html: post.text }}></div>
            <CKEditor>

            </CKEditor>
        </div>
    );
};
