import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormTrainingData({recogeInfoEntrenamiento, setNumForm, handleClickBack}) {
    const formik = useFormik({
        initialValues: { type: "", objectives: "", disponibility: "" },

        validationSchema: Yup.object({
            objectives: Yup.string()
            .max(50, '50 caracteres o menos')
            .required('Este campo es obligatorio'),
            disponibility: Yup.string()
            .max(50, '50 caracteres o menos')
            .required('Este campo es obligatorio'),
            type: Yup.string()
            .required('Este campo es obligatorio'),
        }),

        onSubmit: values => {
            console.log(values);
            recogeInfoEntrenamiento(values, 'trainingData');
            setNumForm(3);
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label>Tipo de entrenamiento</label>
                    <select {...formik.getFieldProps('type')}>
                        <option value="">Seleccione una opción</option>
                        <option value="Powerlifting">Powerlifting</option>
                        <option value="HIIT">HIIT</option>
                        <option value="CrossFit">CrossFit</option>
                        <option value="Kickboxing">Kickboxing</option>
                        <option value="EntrenamientoPersonal">Entrenamiento personal</option>
                    </select>
                    {formik.touched.type && formik.errors.type ? (
                        <div>{formik.errors.type}</div>
                    ) : null}
                </div>
                <div className='form-group'>
                    <label>Objetivos</label>
                    <input
                        type='text'
                        name='objectives'
                        id='objectives'
                        {...formik.getFieldProps('objectives')} />

                    {formik.touched.objectives && formik.errors.objectives ?
                        (<div>{formik.errors.objectives}</div>) : null}
                </div>
                <div className='form-group'>
                    <label>Disponibilidad</label>
                    <input
                        type='text'
                        name='disponibility'
                        id='disponibility'
                        {...formik.getFieldProps('disponibility')} />

                    {formik.touched.disponibility && formik.errors.disponibility ?
                        (<div>{formik.errors.disponibility}</div>) : null}
                </div>

                <div className="button-container">
                    <button onClick={handleClickBack}>Atrás</button>
                    <button type='submit'>Siguiente</button>
                </div>
            </form>
        </div>
    )
}