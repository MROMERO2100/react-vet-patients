import React from 'react'

const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='text-white text-center text-bold text-3xl mb-2'>
                New Register For Follow Up.!
            </h2>
            <form className='bg-gray-700 shadow-md rounded-lg py-10 px-5 mb-10'>
                <div className='mb-5'>
                    <label htmlFor='petName' className='text-white block uppercase font-bold'>
                        Name of Pet
                    </label>
                    <input
                        id='petName'
                        type='text'
                        placeholder='Write the name of the Pet'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='petOwnerName' className='text-white block uppercase font-bold'>
                        Pet Owner's Name
                    </label>
                    <input
                        id='petOwnerName'
                        type='text'
                        placeholder='Write the Pet Owners name'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='petOwnerEmail' className='text-white block uppercase font-bold'>
                        Pet Owner Email
                    </label>
                    <input
                        id='petOwnerEmail'
                        type='email'
                        placeholder='Write the Pet Owner Eamil'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='petRegistrationDate' className='text-white block uppercase font-bold'>
                        Date
                    </label>
                    <input
                        id='petRegistrationDate'
                        type='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='petSymptom' className='text-white block uppercase font-bold'>
                        Pet Symptom
                    </label>
                    <textarea
                        id='petSymptom'
                        placeholder='Write the Pet Symptoms'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                    />
                </div>
                <input
                    type='submit'
                    className='bg-indigo-600 text-white w-full p-3 text-center uppercase hover:bg-indigo-300 cursor-pointer transition-colors'
                    value='Add Patient'
                />
            </form>
        </div>
    )
}

export default Formulario

