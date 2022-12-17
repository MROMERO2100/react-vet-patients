import { useState, useEffect } from 'react'

const Pacientes = ({ paciente }) => {

    const { petName, petOwnerName, petOwnerEnmail, petDate, petSymptom } = paciente;

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
        </div>
    )
}

export default Pacientes