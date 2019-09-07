import React, { Component } from "react";
import FileInput from "./common/fileInput";
import { getFile, saveFile } from '../services/fileService'
import Input from './common/input'

class Upload extends Component {
    state = {
        myImage: '',
        name: '',
        lastName: ''
    };

    handleSubmit = async () => {

        //creating right format (FormDaat)
        const data = new FormData();
        data.append("file", this.state.myImage);
        data.append("name", this.state.name);
        data.append("lastName", this.state.lastName);
        //sending data
        const uploaded = await saveFile(data)

        // pulling single file and setting state with url
        const image = await getFile(uploaded.data._id);

        // setting image url
        this.setState({ imageUrl: (`http://localhost:3900/` + image.data.myImage) })
    };

    handleChange = async event => {
        this.setState({ myImage: event.target.files[0] })
    };
    handleNameChange = async event => {
        this.setState({ name: event.target.value })
        // console.log(event.target.value)
    };
    handleLastNameChange = async event => {
        this.setState({ lastName: event.target.value })
        // console.log(event.target.value)
    };
    render() {
        return (

            <div className="form-group files">
                <div>
                    <Input name= 'name' label='Name' onChange={this.handleNameChange} />
                    <Input name= 'lastName' label='Last Name' onChange={this.handleLastNameChange} />
                    <FileInput
                        onChange={this.handleChange}
                        name="myImage"
                        type="file"
                        label="Image upload"
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                <br />
                <br />
                <br />

                <p className="">{this.state.name}</p>
                <p className="">{this.state.lastName}</p>
                <img src={this.state.imageUrl} className="rounded" alt='Image should be here' />
            </div>

        );
    }
}
export default Upload;
