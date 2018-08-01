import React, { Component } from "react";
import API from "../../utils/API";
import List from "./List";
import Result from "./Result";

class Main extends Component {

    // Sets the initial state
    state = {
        dogImages: [],
        dogBreeds: [],
        searchBreed: ""
    };

    // Gets called once the component gets mounted to the DOM
    componentDidMount() {
        API.getRandom()
            .then(res => {
                // console.log(res.data);
                // Use setState method to update the component's state
                this.setState({ dogImages: res.data.message })
            })
            .catch(err => {
                console.log(err);
            });

            API.getAll()
            .then(res => {
                console.log(res.data.message);
                this.setState({ dogBreeds: res.data.message })
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleClick = event => {
        const mainBreed = event.target.parentElement.parentElement.parentElement.id;
        const subBreed = event.target.id;

        // If the clicked element has main breed
        if (mainBreed) {
            API.getBySubBreed(mainBreed, subBreed)
                .then(res => {
                    // console.log(res.data);
                    // Use setState method to update the component's state
                    this.setState({ dogImages: res.data.message })
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            API.getByBreed(subBreed)
            .then(res => {
                this.setState({ dogImages: res.data.message })
            })
            .catch(err => {
                console.log(err);
            });
        }
    };

    render() {
        return (
            <div className="gds-persist-nav gds-persist-nav--page-header">
                <List
                    handleClick={this.handleClick} 
                    dogBreeds={this.state.dogBreeds}
                />
                <Result dogImages={this.state.dogImages} />
            </div>
        );
    }

}

export default Main;