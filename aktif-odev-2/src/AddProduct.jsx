import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

function AddCategory() {


    const formik = useFormik({
        initialValues: {
            name: '',
            unitPrice: '',
            stock: '',
            quantityPerUnit: ""
        },
        onSubmit: (values) =>{  

            axios.post('https://northwind.vercel.app/api/products', values)
                .then(res => {
                    console.log('Success!');
                })
        }
    })

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' onChange={formik.handleChange}
                    value={formik.values.name} />
            </div>
            <div>
                <label htmlFor="">Unit Price:</label>
                <input type='text' name='unitPrice' onChange={formik.handleChange}
                    value={formik.values.unitPrice} />
            </div>
            <div>
                <label htmlFor="">Stock:</label>
                <input type='text' name='stock' onChange={formik.handleChange}
                    value={formik.values.stock} />
            </div>
            <div>
                <label htmlFor="">Quantity Per Unit:</label>
                <input type='text' name='quantityPerUnit' onChange={formik.handleChange}
                    value={formik.values.quantityPerUnit} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>

        </form>
    </>
    )
}

export default AddCategory