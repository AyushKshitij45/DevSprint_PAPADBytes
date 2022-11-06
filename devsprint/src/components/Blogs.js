import React from 'react'
import { Component } from 'react'
import { Container, Form, Button,Card } from 'react-bootstrap'
const {Configuration, OpenAIApi} = require("openai");


class Blogs extends Component {
    constructor(){
        super()
        this.state = {
            heading: 'The AI generated response appears here',
            response: '...await the response'
        }
    }

    onFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObject = Object.fromEntries(formData.entries())
        console.log(formDataObject.productName)

        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion({
            model: "text-davinci-002",
            prompt: `Write a long, informative and descriptive blog about: ${formDataObject.productName}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response)=> {
            this.setState({
                heading: `Product Description Suggestions for: ${formDataObject.productName}`,
                response: `${response.data.choices[0].text}`
            })
        });
    }
    render (){
        return(
            <div>
                <Container>
                    <br/>
                    <br/>
                    <h2>Generate a Blog</h2>
                    <p>This features makes a blog based on a short description of the topic provided by you.
                    </p>

                    <Form onSubmit = {this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        </Form.Group>
                            <Form.Control 
                                text="text"
                                name="productName"
                                placeholder="Write a short description of the product/brand" 
                            />
                            
                        <br/>

                        <Button variant = "primary" size = "medium" type = "submit">
                            Get AI suggestions
                        </Button>
                    </Form>
                    <br/>
                    <Card>
                        <Card.Body>
                            <Card.Title><h4>{this.state.heading}</h4></Card.Title>
                            <hr/>
                            <br/>
                            <Card.Text>
                                {this.state.response}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Blogs