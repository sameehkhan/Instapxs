import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.post, { photoFile: null })

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);


    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[caption]", this.state.caption)
        formData.append("post[photo]", this.state.photoFile)
        this.props.action(formData)
            .then(() => {
                this.props.history.push("/feed")});
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    closeModal(e){
        e.preventDefault();

        document.getElementById('user-modal').style.display = 'none';

    }

    render() {
        
        return (
            <div className='post-form'>
                <div><button onClick={this.closeModal}>X</button></div>
                <div className='upload-form'>
                <h2 className="post-index-upload-title">Upload Your Own Photo</h2>
                <form className="post-form" onSubmit={this.handleSubmit}>
                    <textarea className="post-caption" placeholder="Caption" value={this.state.title} onChange={this.update("caption")} />
                    <input className="post-file" type="file" onChange={this.handleFile.bind(this)} />
                    <input className="post-submit-button" type="submit" value="Submit" />
                </form>
                </div>
            </div>
        );
    }
}

export default PostForm;