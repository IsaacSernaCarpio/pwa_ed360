import React from 'react';

class HomeComponent extends React.Component {

    render = () => {
        return (
            <div className="mt-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="card mb-3">
                            <h3 className="card-header">Encuesta Covid-19</h3>
                            <div className="card-body">
                                <a href="/quiz-covid" style={{textDecoration: 'none'}}>
                                    <h1 className="card-title">🦠</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="card mb-3">
                                <h3 className="card-header">Reporte Encuesta Covid-19</h3>
                                <div className="card-body">
                                    <a href="/quiz-covid" style={{textDecoration: 'none'}}>
                                        <h1 className="card-title">🧑‍🔬 🤔</h1>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="card mb-3">
                            <h3 className="card-header">Registro Familia</h3>
                            <div className="card-body">
                                <a href="/families" style={{textDecoration: 'none'}}>
                                    <h1 className="card-title">🧑‍🤝‍🧑 📝</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="card mb-3">
                                <h3 className="card-header">Registro Estudiante</h3>
                                <div className="card-body">
                                    <a href="/quiz-covid" style={{textDecoration: 'none'}}>
                                        <h1 className="card-title">😷 📝</h1>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-3">
                                <h3 className="card-header">Escanear QR</h3>
                                <div className="card-body">
                                    <a href="/qr-reader" style={{textDecoration: 'none'}}>
                                        <h1 className="card-title">😷 📝</h1>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeComponent;