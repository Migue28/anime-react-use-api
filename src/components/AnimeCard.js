import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const AnimeCard = (props) => {
    const {anime} = props;

    return(
        <>
            <Card key={anime.mal_id}>
                <Image src={anime.image_url} />
                <Card.Content>
                    <Card.Header>{anime.title}</Card.Header>
                    <Card.Description>{anime.synopsis}</Card.Description>
                </Card.Content>
            </Card>
        </>
    )
    
   
}

export default AnimeCard;