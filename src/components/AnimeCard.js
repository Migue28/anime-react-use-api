import {Card, Image} from 'semantic-ui-react';

const AnimeCard = (props) => {
    const {anime} = props;

    return(
        <AnimeCard key={anime.mal_id}>
            <Card>
                <Image src={anime.image_url} />
                <Card.Content>
                    <Card.Header>{anime.title}</Card.Header>
                    <Card.Description>{anime.synopsis}</Card.Description>
                </Card.Content>
            </Card>
        </AnimeCard>        
    )
}

export default AnimeCard;