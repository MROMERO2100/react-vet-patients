import React from 'react'

const Pacientes = () => {
    return (
        <div className='m-3 bg-gray-700 shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold text-white uppercase'>
                Pet Name: {''}
                <span className='font-normal normal-case'>Patient 1</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Pet Owner Email: {''}
                <span className='font-normal normal-case'>Owner Patient 1</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Date: {''}
                <span className='font-normal normal-case'>December 15, 2022</span>
            </p>
            <p className='font-bold text-white uppercase'>
                Pet Symptom: {''}
                <span className='font-normal normal-case'>Stomach Ache</span>
            </p>
        </div>
    )
}

export default Pacientes