import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export default function FormLocation({ recogeInfoUbicacion, setNumForm, handleClickBack }) {
    const formik = useFormik({
        initialValues: { address: "", city: "", postCode: "" },

        validationSchema: Yup.object({
            address: Yup.string()
                .max(30, 'Deben ser 30 caracteres o menos')
                .required('Este campo es obligatorio'),
            city: Yup.string()
                .max(20, 'Deben ser 30 caracteres o menos')
                .required('Este campo es obligatorio'),
            postCode: Yup.string()
                .max(5, 'Deben ser 5 caracteres')
                .min(5, 'Deben ser 5 caracteres')
                .required('Este campo es obligatorio'),

        }),

        onSubmit: values => {
            console.log(values);
            recogeInfoUbicacion(values, 'locationData');
            setNumForm(2);
        }
    });

    return (
        <div>
            <h3>Formulario de registro</h3>
            <form onSubmit={formik.handleSubmit}>

                <div className='form-group'>
                    <label>Dirección</label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        {...formik.getFieldProps('address')} />

                    {formik.touched.address && formik.errors.address ?
                        (<div>{formik.errors.address}</div>) : null}
                </div>
                <div className='form-group'>
                    <label>Ciudad</label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        {...formik.getFieldProps('city')} />

                    {formik.touched.city && formik.errors.city ?
                        (<div>{formik.errors.city}</div>) : null}
                </div>
                <div className='form-group'>
                    <label>Código postal</label>
                    <input
                        type='text'
                        id='postCode'
                        name='postCode'
                        {...formik.getFieldProps('postCode')} />

                    {formik.touched.postCode && formik.errors.postCode ?
                        (<div>{formik.errors.postCode}</div>) : null}
                </div>

                <div className="button-container">
                    <button onClick={handleClickBack}>Atrás</button>
                    <button type='submit'>Siguiente</button>
                </div>


            </form>
        </div>
    )
}