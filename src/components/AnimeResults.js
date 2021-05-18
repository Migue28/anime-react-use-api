import React, {Component} from 'react';
import {Container, Card} from 'semantic-ui-react';

class AnimeResults extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card.Group>
                        <Card /*image={image} header={name} description={description}*/ />
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

export default AnimeResults;