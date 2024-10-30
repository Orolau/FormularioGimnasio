import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormDatosPago({ recogeInfoPago, setNumForm, handleClickBack }) {
    const currentYear = new Date().getFullYear(); // Obtiene el año actual
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i); // Crea un array de años futuros
    const months = Array.from({ length: 12 }, (_, i) => i + 1); // Crea un array de meses (1 a 12)

    const formik = useFormik({
        initialValues: { numeroTarjeta: "", cvv: "", expMonth: "", expYear: "" },

        validationSchema: Yup.object({
            numeroTarjeta: Yup.string()
                .max(16, 'Debes ingresar 16 dígitos')
                .min(16, 'Debes ingresar 16 dígitos')
                .required('Este campo es obligatorio'),
            cvv: Yup.string()
                .max(3, 'Debes ingresar 3 dígitos')
                .min(3, 'Debes ingresar 3 dígitos')
                .required('Este campo es obligatorio'),
            expMonth: Yup.string()
                .required('Este campo es obligatorio'),
            expYear: Yup.string()
                .required('Este campo es obligatorio')
                .test('is-expired', 'La tarjeta ya ha expirado', function (value) {
                    const { expMonth } = this.parent;
                    const expirationDate = new Date(value, expMonth); // Crea una fecha con el año y el mes seleccionados
                    return expirationDate > new Date(); // Verifica que la fecha no esté en el pasado
                }),
        }),

        onSubmit: values => {
            console.log(values);
            recogeInfoPago(values, 'paymentData');
            setNumForm(4);
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label>Número tarjeta</label>
                    <input
                        type='text' 
                        id='numeroTarjeta'
                        name='numeroTarjeta'
                        {...formik.getFieldProps('numeroTarjeta')} />

                    {formik.touched.numeroTarjeta && formik.errors.numeroTarjeta ? (
                        <div>{formik.errors.numeroTarjeta}</div>
                    ) : null}
                </div>
                <div className='form-group'>
                    <label>CVV</label>
                    <input
                        type='text'
                        id='cvv'
                        name='cvv'
                        {...formik.getFieldProps('cvv')} />

                    {formik.touched.cvv && formik.errors.cvv ? (
                        <div>{formik.errors.cvv}</div>
                    ) : null}
                </div>
                <div className='form-group'>
                    <label>Fecha de expiración</label>
                    <div>
                        <select
                            id='expMonth'
                            name='expMonth'
                            {...formik.getFieldProps('expMonth')}>
                            <option value="">Mes</option>
                            {months.map(month => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>
                        {formik.touched.expMonth && formik.errors.expMonth ? (
                            <div>{formik.errors.expMonth}</div>
                        ) : null}

                        <select
                            id='expYear'
                            name='expYear'
                            {...formik.getFieldProps('expYear')}>
                            <option value="">Año</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        {formik.touched.expYear && formik.errors.expYear ? (
                            <div>{formik.errors.expYear}</div>
                        ) : null}
                    </div>
                </div>
                <div className="button-container">
                    <button type="button" onClick={handleClickBack}>Atrás</button>
                    <button type='submit'>Siguiente</button>
                </div>
            </form>
        </div>
    )
}
