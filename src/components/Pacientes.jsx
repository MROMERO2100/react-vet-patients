import { useState, useEffect } from 'react'

const Pacientes = ({ paciente, setPaciente, deletePaciente }) => {

    const { petName, petOwnerName, petOwnerEnmail, petDate, petSymptom, id } = paciente;

    const handleDelete = () => {
        const response = confirm('Are you sure to Delete.?');

        if (response) {
            deletePaciente(id);
        }
    }

    return (
        <div className='mx-5 bg-gray-700 shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold text-white uppercase'>
                Pet Name: {''}
                <span className='font-normal normal-case'>{petName}</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Pet Owner Name: {''}
                <span className='font-normal normal-case'>{petOwnerName}</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Pet Owner Email: {''}
                <span className='font-normal normal-case'>{petOwnerEnmail}</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Date: {''}
                <span className='font-normal normal-case'>{petDate}</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Pet Symptom: {''}
                <span className='font-normal normal-case'>{petSymptom}</span>
            </p>
            <div className='flex justify-center mt-10'>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-300 text-white py-2 px-10 text-center uppercase rounded-lg cursor-pointer transition-colors'
                    onClick={() => setPaciente(paciente)}
                >Edit
                </button>
                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-300 text-white py-2 px-10 text-center uppercase rounded-lg cursor-pointer transition-colors'
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Pacientes