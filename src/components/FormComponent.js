
import axios from "axios";
import React from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import localeSpanish from "date-fns/locale/es";

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
    isMobile
  } from "react-device-detect";

class FormComponent extends React.Component {

    
    async componentDidMount() {
        
        
        
        const response = await axios.get(process.env.REACT_APP_DOMAIN_URL + '/api/student');
        
        this.setState({
            students: response.data.students
        })
    }
    
    constructor(props) {
        
        toast.configure();
        super(props);
        this.state = {
            students: [],
            studentSelected: null,
            users: [
                {
                    id: 1,
                    name: 'Ruben Alavarado'
                },
                {
                    id: 2,
                    name: 'Antonio Lopez'
                },
                {
                    id: 3,
                    name: 'Ricardo Morales'
                },
                {
                    id: 4,
                    name: 'Roberto Carlos'
                },
                {
                    id: 5,
                    name: 'Jorge Allende'
                }
            ],
            questions: [
                {
                    id: 1,
                    answer: true,
                    numberTemperature: ''
                },
                {
                    id: 2,
                    answer: false,
                    symptomsComments: ''
                },
                {
                    id: 3,
                    answer: false,
                    exposedComments: ''
                },
                {
                    id: 4,
                    answer: false,
                    contactComments: ''
                },
                {
                    id: 5,
                    answer: false,
                    returnTravelDate: ''
                },
            ],
            dateCovid: new Date(),
            errors: [],
            symptoms: [
                {
                    name: 'Tos',
                    value: 'tos'
                },
                {
                    name: 'Dolor de cabeza',
                    value: 'dolor de cabeza'
                },
                {
                    name: 'Ojos rojos',
                    value: 'ojos rojos'
                },
                {
                    name: 'Otros',
                    value: 'otros'
                }
            ],
            symptomsSelected: []
        }
        
        this.radioButtonSelected = this.radioButtonSelected.bind(this) 
        this.save = this.save.bind(this) 
        this.setStartDate = this.setStartDate.bind(this) 
        this.studentSelected = this.studentSelected.bind(this)
        this.inputAnswer = this.inputAnswer.bind(this)

    }
    
    radioButtonSelected(e, questionNumber) {

        let newQuestions = this.state.questions.map((question, index) => {

            if (index === questionNumber) {
                question.answer = !this.state.questions[questionNumber].answer
                return question
            }
            return question
        });

        this.setState({
            questions: newQuestions
        });
        
    }

    formatError = (error) => {
        console.log('error movil', error.response.data)
        // Si es un array se tiene que dar formato
        if (Array.isArray(error.response.data.errors)) {
            return error.response.data.errors[0].msg +' '+ error.response.data.errors[0].param.toLowerCase()
        } else {
            // Si es un objeto se pinta inmediatamente
            return error.response.data.message.toString();
        }
        
    }

    async save() {
        const data = {
            byUser: '60f73c18d5cbc40015055ef8', // test
            fromStudent: this.state.studentSelected,
            temperature: this.state.questions[0].answer,
            numberTemperature: this.state.questions[0].numberTemperature,
            symptoms: this.state.questions[1].answer,
            symptomsComments: this.state.questions[1].symptomsComments,
            exposed: this.state.questions[2].answer,
            exposedComments: this.state.questions[2].exposedComments,
            contactCovid: this.state.questions[3].answer,
            contactComments: this.state.questions[3].contactComments,
            travel: this.state.questions[4].answer,
            returnTravelDate: this.state.dateCovid === null ? null : this.state.dateCovid.toLocaleDateString()
        }
        this.setState({errors: []});

        let result = await axios.post(process.env.REACT_APP_DOMAIN_URL + '/api/todayCOVID', data).catch((error) => {

            if (isMobile) {
                console.log('es movil')
                toast.error('❌  ' + this.formatError(error), {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                return;
            }
            let arrayErrors = [];
            if (!Array.isArray(error.response.data.errors)) {
                arrayErrors.push(error.response.data)
            } else {
                arrayErrors = error.response.data.errors
            }
            this.setState({
                errors: arrayErrors
            });
            console.log('array errors para props:' , arrayErrors)
            this.props.showErrors(arrayErrors);
        });

        
        if (typeof result === 'undefined') {
            return;
        }

        if (result.status === 200) {
            this.showAlert();
        }

    }

    setStartDate(date) {
        this.setState({
            dateCovid: date
        })
    }

    studentSelected(e) {
        this.setState({
            studentSelected: e.target.value
        });
    }

    inputAnswer(e, numberQuestion, inputAnswer) {
        let newQuestions = this.state.questions.map((question, index) => {

            if (index === numberQuestion) {
                question[inputAnswer] = e.target.value; 
                return question
            }
            return question
        })
        
        this.setState({
            questions: newQuestions
        });
        
    }

    showAlert = () => {
        toast.success('🦠 Formulario llenado con éxito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    setSymptomsSelected = (newValue) => {
        console.log('sintomas', newValue.target.value)
        let symptomsSelectedCopy = this.state.symptomsSelected;
        let symptom = symptomsSelectedCopy.find(element => element === newValue.target.value);
        
        let newSymptomsSelected = [];
        
        if (symptom) {
            newSymptomsSelected = symptomsSelectedCopy.filter(symptom => symptom !== newValue.target.value)
            this.setState({
                symptomsSelected: newSymptomsSelected
            });
            return;
        }

        symptomsSelectedCopy.push(newValue.target.value)

        this.setState({
            symptomsSelected: symptomsSelectedCopy
        });


        /* let symptoms = this.state.symptomsSelected.push()
        this.setState({
            symptomsSelected: 
        }); */
    }
    
    
    
    render() {
        let fontSize = '1rem';

        if (isMobile) fontSize = '1rem';
       
        return (
            <div>
                
                <div className="form-group" style={{textAlign: "left"}}>
                    <label htmlFor="exampleSelect1" className="form-label mt-4">Selecciona un Alumno</label>
                    <select onChange={this.studentSelected} className="form-select" id="exampleSelect1">
                        <option value={null}>
                            Selecciona un estudiante
                        </option>
                        {
                            this.state.students.map((student) => {
                                return <option 
                                    key={student._id}
                                    value={student._id}
                                    >
                                        {student.nameStudent + ' ' + student.lastNameStudent + ' ' + student.motherLastNameStudent}</option>
                            })
                        }
                    </select>
                </div>

                <fieldset className="form-group" style={{textAlign: "left"}}>
                    
                    <legend style={{fontSize}} className="mt-4">1.- ¿ Temperatura menor a 37° ? </legend>

                    <div className="row">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    checked={this.state.questions[0].answer === true} onChange={e => this.radioButtonSelected (e, 0) } 
                                    className="form-check-input" 
                                    name="optionsRadios" 
                                    id="optionsRadios1" 
                                    value={true} 
                                />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    checked={this.state.questions[0].answer === false} onChange={e => this.radioButtonSelected (e, 0)} className="form-check-input" name="optionsRadios" id="optionsRadios2" value={false} />
                                NO
                                </label>
                            </div>
                        </div>

                        
                        <div 
                            className="col-md-12 col-lg-3" 
                            style={ this.state.questions[0].answer === true || this.state.questions[0].answer === null ? {visibility: 'hidden'} : {}}
                        >
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Indique su temperatura" 
                                    id="numberTemperature"
                                    onChange={e => this.inputAnswer(e, 0, 'numberTemperature')} 
                                />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>

                <fieldset className="form-group" style={{textAlign: "left"}}>
                    <legend style={{fontSize}} className="mt-4">2.- ¿ Identificas algún síntoma ? </legend>

                    <div className="row justify-content-start ">
                        <div className="col-5 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    checked={this.state.questions[1].answer === true} 
                                    onChange={e => this.radioButtonSelected (e, 1) } 
                                    name="optionsRadios2" 
                                    id="optionsRadios1" 
                                    value={true} 
                                />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    checked={this.state.questions[1].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 1) }
                                    name="optionsRadios2" 
                                    id="optionsRadios2" 
                                    value={false} />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-7" style={ this.state.questions[1].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="row">
                            <fieldset className="form-group">
                            <div className="form-check">
                            <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Indica los síntomas" 
                                    id="exposedComments" 
                                    onChange={e => this.inputAnswer(e, 1, 'symptomsComments')} 
                                />
                                
                            {/* {
                                        this.state.symptoms.map((symptom) => {
                                            return <div key={symptom.value} className="col">
                                                <input onChange={this.setSymptomsSelected} className="form-check-input" type="checkbox" value={symptom.value} id={symptom.value} />
                                                <label className="form-check-label" htmlFor={symptom.value}>
                                                    { symptom.name }
                                                </label>
                                            </div>
                                        })
                                } */}
                                
                            </div>
                        </fieldset>
                            </div>
                        
                            
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group" style={{textAlign: "left"}}>
                    <legend style={{fontSize}} className="mt-4">3.- ¿ Has asistido a algun lugar sin medidas de control sanitario ? </legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                type="radio" 
                                className="form-check-input" 
                                checked={this.state.questions[2].answer === true} 
                                onChange={e => this.radioButtonSelected (e, 2) }
                                name="optionsRadios3" 
                                id="optionsRadios1" 
                                value={true} />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    checked={this.state.questions[2].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 2) }
                                    name="optionsRadios3" 
                                    id="optionsRadios2" 
                                    value={false} />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3" style={ this.state.questions[2].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Indica los lugares" 
                                    id="exposedComments" 
                                    onChange={e => this.inputAnswer(e, 2, 'exposedComments')} 
                                />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group" style={{textAlign: "left"}}>
                    <legend style={{fontSize}} className="mt-4">4.- ¿ Alguien en casa tiene Covid o tuviste contacto con alguien con este virus ?  </legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                type="radio" 
                                className="form-check-input" 
                                checked={this.state.questions[3].answer === true} 
                                onChange={e => this.radioButtonSelected (e, 3) }
                                name="optionsRadios4" 
                                id="optionsRadios1" 
                                value={true} 
                            />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input"
                                    checked={this.state.questions[3].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 3) } 
                                    name="optionsRadios4" 
                                    id="optionsRadios2" 
                                    value={false} 
                                />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3" style={ this.state.questions[3].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Comentario" 
                                    id="contactComments" 
                                    onChange={e => this.inputAnswer(e, 3, 'contactComments')} 
                                />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group" style={{textAlign: "left"}}>
                    <legend style={{fontSize}} className="mt-4">5.- ¿ Hiciste un viaje cuyo regreso fue dentro de los 14 dias anteriores ?  </legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input"
                                    checked={this.state.questions[4].answer === true} 
                                    onChange={e => this.radioButtonSelected (e, 4) } 
                                    name="optionsRadios5" 
                                    id="optionsRadios1" 
                                    value={true} 
                                />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input"
                                    checked={this.state.questions[4].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 4) }  
                                    name="optionsRadios5" 
                                    id="optionsRadios2" 
                                    value={false} 
                                />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12" style={ this.state.questions[4].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group" style={{display: 'display: flex; justify-content: center;'}}>
                                <DatePicker 
                                    dateFormat="dd/MM/yyyy"
                                    selected={this.state.dateCovid} 
                                    onChange={(date) => this.setStartDate(date)} 
                                    withPortal
                                    locale={localeSpanish}
                                />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>

                <div className="mb-4" style={{display: 'display: flex; justify-content: center;'}}>
                    <button 
                        onClick={this.save}
                        type="button" 
                        className="btn btn-outline-primary mt-4"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        );
    }

}

export default FormComponent;