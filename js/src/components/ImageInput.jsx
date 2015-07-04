var React = require('react');
var AvatarCropper = require("react-avatar-cropper");

var ImageInput = React.createClass({
    propTypes: {
        onSelect:React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            cropperOpen: false,
            img: null,
            croppedImg: "http://www.fillmurray.com/g/200/200"
        };
    },
    handleFileChange: function(dataURI) {
        this.setState({
            img: dataURI,
            croppedImg: this.state.croppedImg,
            cropperOpen: true
        });
    },
    handleCrop: function(dataURI) {
        this.setState({
            cropperOpen: false,
            img: null,
            croppedImg: dataURI
        });

        this.props.onSelect({
            image:this.state.fullImage,
            thumbnail:dataURI
        });
    },
    handleRequestHide: function() {
        this.setState({
            cropperOpen: false
        });
    },
    handleFile: function(e) {
        var reader = new FileReader();
        var file = e.target.files[0];

        if (!file) return;

        reader.onload = function(img) {
            React.findDOMNode(this.refs.in).value = '';
            this.handleFileChange(img.target.result);
        }.bind(this);
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            this.setState({
                fullImage:reader.result
            });
        }.bind(this);
    },
    render: function () {
    return (
        <div>
            <h2>Upload New Image</h2>
            <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
            {this.state.cropperOpen &&
                <AvatarCropper
                onRequestHide={this.handleRequestHide}
                onCrop={this.handleCrop}
                image={this.state.img}
                width={200}
                height={200}
                />
            }
        </div>
    );
}
});

module.exports = ImageInput;