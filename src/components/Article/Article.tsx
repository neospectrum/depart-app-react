import React from 'react';

import './Article.scss';

export const Article = () => {
    const photo = 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/8a7/f2e/24a/8a7f2e24aa87cdb7c5b996053e64e7ed.png';
    return (
        <div className="science__article article">
            <div className="article__content">
                <div className="article__title">
                    Личный опыт: какой уровень иностранного языка нужен для работы в IT в разных компаниях и странах
                </div>
                <div className="article__image">
                    <img src={ photo } alt=""/>
                </div>
                <div className="article__text">
                    Владение иностранным языком — преимущество для кандидата даже при трудоустройстве в родной стране. Но для работы за рубежом требования отличаются. Мы попросили айтишников поделиться опытом, как оценивают уровень иностранного в международных компаниях и интернациональных коллективах. 
                </div>
            </div>
        </div>
    );
};