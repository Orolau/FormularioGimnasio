import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormPersonalData({ recogeInfoPersonal, setNumForm, handleClickBack }) {
    const formik = useFormik({
        initialValues: { name: "", surname: "", email: "", telephone: "" },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Deben ser 15 caracteres o menos')
                .required('Este campo es obligatorio'),
            surname: Yup.string()
                .max(20, 'Deben ser 20 caracteres o menos')
                .required('Este campo es obligatorio'),
            email: Yup.string()
                .email('Email invalido')
                .required('Este campo es obligatorio'),
            telephone: Yup.string()
                .max(9, 'Deben ser 9 caracteres')
                .min(9, 'Deben ser 9 caracteres')
                .required('Este campo es obligatorio'),


        }),

        onSubmit: values => {
            console.log(values);
            recogeInfoPersonal(values, 'personalData');
            setNumForm(1);
        }
    });


    return (
        <div>
            <h3>Formulario de registro</h3>
            <form onSubmit={formik.handleSubmit}>

                <div className='form-group'>
                    <label>Nombre</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        {...formik.getFieldProps('name')} />

                    {formik.touched.name && formik.errors.name ?
                        (<div>{formik.errors.name}</div>) : null}
                </div>
                <div className='form-group'>
                    <label>Apellidos</label>
                    <input
                        type='text'
                        id='surname'
                        name='surname'
                        {...formik.getFieldProps('surname')} />

                    {formik.touched.surname && formik.errors.surname ?
                        (<div>{formik.errors.surname}</div>) : null}
                </div>
                <div className='form-group'>

                    <label>Email</label>
                    <input type='email' id='email' name='email'
                        {...formik.getFieldProps('email')} />

                    {formik.touched.email && formik.errors.email ?
                        (<div>{formik.errors.email}</div>) : null}
                </div>
                <div className='form-group'>

                    <label>Teléfono</label>
                    <input type='text' id='telephone' name='telephone'
                        {...formik.getFieldProps('telephone')} />

                    {formik.touched.telephone && formik.errors.telephone ?
                        (<div>{formik.errors.telephone}</div>) : null}
                </div>

                <div className="button-container">
                    <button onClick={handleClickBack}>Atrás</button>
                    <button type='submit'>Siguiente</button>
                </div>

            </form>
        </div>
    )
}