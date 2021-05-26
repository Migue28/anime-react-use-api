import React, {Component} from 'react';
import {Container, Card} from 'semantic-ui-react';
import AnimeCard from './AnimeCard';

class AnimeResults extends Component {
    render() {
        return (
            <Container>
                <Card.Group>
                    {this.props.animes.map((anime) => 
                        <AnimeCard anime={anime} />
                    )}
                </Card.Group>
            </Container>  
        )
    }
}

export default AnimeResults;