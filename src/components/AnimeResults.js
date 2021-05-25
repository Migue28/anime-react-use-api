import React, {Component} from 'react';
import {Container, Card} from 'semantic-ui-react';
import AnimeCard from './AnimeCard';

class AnimeResults extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card.Group>
                        {this.props.animes.map(anime => {
                            return <AnimeCard anime={anime}/>
                        })}
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

export default AnimeResults;