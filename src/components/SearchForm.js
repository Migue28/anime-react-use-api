import React, {Component} from 'react';
import {Header, Container, Form} from 'semantic-ui-react';

const style = {
    h1: {
        marginTop: '3em',
        margin: '4em 0em 2em',
    }, 
}

class SearchForm extends Component {
    state = {
        query:"",
    }

    getAnimes = (e) => {
        e.preventDefault();
        this.props.getAnimes(this.state.query)        
    }

    handleQuery = (e) => this.setState({query: e.target.value,})

    render() {
        return (
            <div>
                <Header as='h1' content='Lets watch some anime' style={style.h1} textAlign='center' />
                <Container>
                    <Form onSubmit={this.getAnimes}>
                        <Form.Input onChange={this.handleQuery.bind(this)} label='Anime to search' type='text' placeholder='Anime with long name you problably forgot'/>
                        <Form.Button type='submit'>Search</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SearchForm;