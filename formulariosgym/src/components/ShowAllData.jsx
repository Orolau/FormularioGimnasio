
export default function ShowAllData({allData}) {

    return (
        <div>
            <h3>Ya se han rellenado todos los datos</h3>
            <div className="data-display">
                <h3>Datos Completos:</h3>

                <div className="section">
                    <h4>Datos Personales:</h4>
                    <p>Nombre: {allData.personalData.name}</p>
                    <p>Apellidos: {allData.personalData.surname}</p>
                    <p>Email: {allData.personalData.email}</p>
                    <p>Teléfono: {allData.personalData.telephone}</p>
                </div>

                <div className="section">
                    <h4>Datos de Ubicación:</h4>
                    <p>Dirección: {allData.locationData.address}</p>
                    <p>Ciudad: {allData.locationData.city}</p>
                    <p>Código Postal: {allData.locationData.postCode}</p>
                </div>

                <div className="section">
                    <h4>Datos de Entrenamiento:</h4>
                    <p>Tipo de Entrenamiento: {allData.trainingData.type}</p>
                    <p>Objetivos: {allData.trainingData.objectives}</p>
                    <p>Disponibilidad: {allData.trainingData.disponibility}</p>
                </div>

                <div className="section">
                    <h4>Datos de Pago:</h4>
                    <p>Número de Tarjeta: {allData.paymentData.numeroTarjeta}</p>
                    <p>CVV: {allData.paymentData.cvv}</p>
                    <p>Fecha de Expiración: {allData.paymentData.expMonth}/{allData.paymentData.expYear}</p>
                </div>
            </div>

        </div>
    )
}