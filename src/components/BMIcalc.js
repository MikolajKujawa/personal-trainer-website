import React from 'react';
import '../styles/components-styles/BMIcalc.css'

const BMIcalc = () => {
    const [masa, setMasa] = React.useState(0);
    const [wzrost, setWzrost] = React.useState(0);
    const [bmi, setBMI] = React.useState(0);
    const [check, setCheck] = React.useState(false);
    const [ocena, setOcena] = React.useState('');

    const changeMasa = e => setMasa(e.target.value);
    const changeWzrost = e => setWzrost(e.target.value);

    const calculateBMI = () => {
        if (masa !== 0 && wzrost !== 0){ 
            const result = (masa/(Math.pow((wzrost/100),2)));
            setBMI(result);
            setCheck(true);
            if(result<16){setOcena('wygłodzenie')}
            else if(result>16 && result<16.99){setOcena('wychudzenie')}
            else if(result>17 && result<18.49){setOcena('niedowaga')}
            else if(result>18.5 && result<24.99){setOcena('wartość prawidłowa')}
            else if(result>25 && result<25.99){setOcena('nadwaga')}
            else if(result>30 && result<34.99){setOcena('otyłość I stopnia')}
            else if(result>35 && result<39.99){setOcena('otyłość II stopnia')}
            else if(result<40){setOcena('skajna otyłość')}
        }
        else{
            setCheck(false);
        }
    }

    return ( 
        <div className='BMIcalc'>
            <h1>BMI</h1>
            <span>
                <h3>Waga:</h3>
                <div><input 
                    type="number"
                    value={masa}
                    onChange={changeMasa}
                /> kg</div>
            </span>
            <span>
                <h3>Wzrost:</h3>
                <div><input
                    type="number"
                    value={wzrost}
                    onChange={changeWzrost}
                /> cm</div>
            </span>
            <span className='result'>
                <h3>Twoje BMI: {check === true ? bmi.toFixed(2) : 'Podaj swój wzrost i wagę'}</h3>
                <h3>Ocena: {check === false ? '' : ocena}</h3>
            </span>
            <button onClick={calculateBMI}>Oblicz</button>
        </div>
     );
}
 
export default BMIcalc;