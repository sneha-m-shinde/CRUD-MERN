import React, { Component } from 'react';

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            contact: '',
            email: '',
            logo: '',
            state: '',
            city: '',
            completed: false
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeLogo(e) {
        this.setState({
            logo: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Contact: ${this.state.contact}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Logo: ${this.state.logo}`);
        console.log(`State: ${this.state.state}`);
        console.log(`City: ${this.state.city}`);

        this.setState({
            name: '',
            description: '',
            contact: '',
            email: '',
            logo: '',
            state: '',
            city: '',
            completed: false
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Company</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea 
                            className="form-control"                           
                            value={this.state.description}
                            onChange={this.description}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Contact NO.:</label>
                        <input type="number"
                            className="form-control"
                            value={this.state.contact}
                            onChange={this.onChangeContact}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Logo:</label>
                        <input type="file"
                            className="form-control"
                            value={this.state.logo}
                            onChange={this.onChangeLogo}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>State:</label>
                        <select className="form-control"
                            value={this.state.state}
                            required
                            onChange={this.onChangeState}>
                            <option>Maharashtra</option>
                            <option>West Bengal</option>
                            <option>Rajasthan</option>
                            <option>Bihar</option>
                            <option>Madhya Pradesh</option>
                            <option>Goa</option>
                        </select>
                    </div>
                    <div className="form-grop">
                        <label>City:</label>
                        <input type="text"
                        className="form-control"
                        value={this.state.city}
                        onChange={this.onChangeCity}
                        required
                        />
                    </div><br/>

                    <div className="form-group">
                            <input type="submit" value="Create" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}