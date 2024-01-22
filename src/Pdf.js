import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Pdf.css'
function Pdf() {
    const { register, handleSubmit, setValue, formState } = useForm();
const { isSubmitting } = formState;
const location=useNavigate()

const onSubmit = (data) => {
    // Store form data in local storage for access on the Receipt page
    localStorage.setItem('formData', JSON.stringify(data));

    // Navigate to the Receipt page
    location('/recipt');
  };

 
  return (
    <div className='main'>
         <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" {...register('name')} />
        </label>

        <label>
          Phone Number:
          <input type="tel" {...register('phoneNumber')} />
        </label>

        <label>
          Age:
          <input type="number" {...register('age')} />
        </label>

        <label>
          Gender:
          <select {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Date:
          <input type="date" {...register('date')} />
        </label>

        <label>
          Doctor Name:
          <input type="text" {...register('doctorName')} />
        </label>

        <label>
          Address:
          <textarea {...register('address')} />
        </label>

        <label>
          Unit Name:
          <input type="text" {...register('unitName')} />
        </label>

        <label>
          Speciality:
          <input type="text" {...register('speciality')} />
        </label>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Pdf