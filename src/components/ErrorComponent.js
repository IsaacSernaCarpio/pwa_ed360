import React from 'react';

class ErrorComponent extends React.Component {

    componentDidMount() {
        if (this.props.errors.map((error) => {
            console.log('errorsitos')
            if (error.hasOwnProperty('msg')) {
                console.log('tiene msg')
                error.message = 'El campo ' + this.inputRequerid(error.param) + ' ' + error.msg.toLowerCase()
                return error;
            } else {
                console.log('no tiene msg')
                return error;
            }
        }));

        this.setState({
            errorMessage: this.props.errors[0].message
        });
    }

    componentDidUpdate = () => {
        if (this.props.errors.map((error) => {
            console.log('errorsitos')
            if (error.hasOwnProperty('msg')) {
                console.log('tiene msg')
                error.message = 'El campo ' + this.inputRequerid(error.param) + ' ' + error.msg.toLowerCase()
                return error;
            } else {
                console.log('no tiene msg')
                return error;
            }
        }));
    }

    inputRequerid = (inputRequerid) => {
        switch (inputRequerid) {
            case 'fromStudent':
                return 'estudiante';
            default: 
                return 'estudiante';
        }
    }

    state = {
        errorMessage: ''
    }

    render() {
        
        return (
            <div>
                <div 
                    className="alert alert-dismissible alert-danger">
                    <button 
                        onClick={this.props.hideErrors}
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="alert" />
                    <h4 className="alert-heading">
                        {this.props.title}
                    </h4>
                    <p 
                        className="mb-0"
                    >
                        {this.props.errors[0].message}
                    </p>
                </div>
            </div>
        )
    }
}

export default ErrorComponent;