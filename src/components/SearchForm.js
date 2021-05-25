import React, {Component, useState, setState} from 'react';
import {Header, Container, Form} from 'semantic-ui-react';
import axios from 'axios';

const style = {
    h1: {
        marginTop: '3em',
        margin: '4em 0em 2em',
    }, 
}

class SearchForm extends Component {
    getAnimes = async (event) => {
        event.preventDefault();
        const text = event. value;
        await axios.get(`https://api.jikan.moe/v3/search/anime?q=${text}&limit=5`)
    }

    render() {
        return (
            <div>
                <Header as='h1' content='Lets watch some anime' style={style.h1} textAlign='center' />
                <Container>
                    <Form onSubmit={this.getAnimes}>
                        <Form.Input label='Anime to search' type='text' placeholder='Anime with long name you problably forgot'/>
                        <Form.Button type='submit'>Search</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SearchForm;