import './App.css';
import { useState} from 'react';
import FormTrainingData from './components/FormTrainingData';
import FormDatosPago from './components/FormDatosPago';
import FormPersonalData from './components/FormPersonalData';
import FormLocation from './components/FormLacation';
import ProgressBar from './components/ProgressBar';

function App() {
  const totalSteps = 5;
  const [numForm, setNumForm] = useState(0)
  const [allData, setAllData] = useState({
    personalData: {
      name: "", surname: "", email: "", telephone: ""
    },
    locationData: {
      address: "", city: "", postCode: ""
    },
    trainingData: {
      type: "", objectives: "", disponibility: ""
    },
    paymentData: {
       numeroTarjeta: "", cvv: "", expDateTarjeta: ""
    }
  });

  const handleClickBack = () => {
    setNumForm(numForm - 1);
    if (numForm == -1)
      setNumForm(0);
  }

  const submitEspecificPart = (data, type) => {
    const newData = { ...allData };
    newData[type] = data;
    setAllData(newData);
  };

  const handleSubmit = () => {
    fetch('https:://apiFitnes.com/posts',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData)
      }
    )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('No se puede conectar con la API. Estos son los datos que se quieren enviar'+
        allData.personalData + allData.locationData + allData.trainingData + allData.paymentData
      ));
  }

  return (
    <div className="App">
      <ProgressBar currentStep={numForm + 1} totalSteps={totalSteps} />
      {
        numForm === 0 &&
        <FormPersonalData recogeInfoPersonal={submitEspecificPart} setNumForm={setNumForm} handleClickBack={handleClickBack} />
      }
      {
        numForm === 1 &&
        <FormLocation recogeInfoUbicacion={submitEspecificPart} setNumForm={setNumForm} handleClickBack={handleClickBack} />
      }
      {
        numForm === 2 &&
        <FormTrainingData recogeInfoEntrenamiento={submitEspecificPart} setNumForm={setNumForm} handleClickBack={handleClickBack} />
      }
      {
        numForm === 3 &&
        <FormDatosPago recogeInfoPago={submitEspecificPart} setNumForm={setNumForm} handleClickBack={handleClickBack} />
      }
      {
        numForm === 4 &&
        <>
          <h3>Ya se han rellenado todos los datos</h3>
          <button onClick={handleSubmit}>Enviar</button>
        </>

      }
      
    </div>
  );
}

export default App;
