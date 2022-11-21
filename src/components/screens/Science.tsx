import React from 'react';

import { Container } from '../containers/Container';
import { PageTitle } from '../PageTitle/PageTitle';
import { Article } from '../Article/Article';
import { Button } from '../Button/Button';

export const Science = () => {
    return (
        <div className="science">
            <Container>
                <PageTitle>Научная деятельность</PageTitle>
                <div className="science__articles articles">
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Button>Еще статьи</Button>
                </div>
            </Container>
        </div>
    );
};