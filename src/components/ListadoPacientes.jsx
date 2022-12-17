import { useState, useEffect } from 'react'
import Pacientes from './Pacientes'

const ListadoPacientes = ({ paciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {paciente && paciente.length ?
                (
                    <>
                        <h2 className='text-white text-center text-bold text-3xl'>
                            List of Patients Registered
                        </h2>
                        <p className='text-white text-center text-xl mt-5'>
                            Check the List of Patients and made a {''}
                            <span className='text-indigo-600 font-bold'>Follow UP.!</span>
                        </p>
                        {paciente.map(paciente => (
                            <Pacientes
                                key={paciente.id}
                                paciente={paciente}
                            />
                        ))}
                    </>
                ) :
                (
                    <>
                        <h2 className='text-white text-center text-bold text-3xl'>
                            No Patients Registered
                        </h2>
                        <p className='text-white text-center text-xl mt-5'>
                            Add a New Patients and {''}
                            <span className='text-indigo-600 font-bold'>Follow UP.!</span>
                        </p>
                    </>
                )}
        </div>
    )
}

export default ListadoPacientes