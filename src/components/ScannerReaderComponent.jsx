import React, { useState } from 'react';

import QrReader from 'react-qr-reader'

import { useHistory } from "react-router-dom";

function ScannerReaderComponent() {

    const history = useHistory();

    const [result, setResult] = useState('');

    const styleForCamera = {
        display: 'flex',
        justifyContent: 'center'
    }

    function handleScan(data) {
        
        if (data) {
            setResult(data);
            history.push('/quiz-covid/' + data);
        }
    }

    function handleError(err) {
        console.error(err)
    }

    
    return (
        <div className="mt-5">

            <div style={styleForCamera}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '300px' }}
                />
                <p>{result}</p>
            </div>
        </div>
    );
    
}

export default ScannerReaderComponent;