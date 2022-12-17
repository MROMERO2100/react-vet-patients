import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ paciente, setPaciente }) => {
    const [petName, setPetName] = useState('');
    const [petOwnerName, setpetOwnerName] = useState('');
    const [petOwnerEnmail, setpetOwnerEnmail] = useState('');
    const [petDate, setpetDate] = useState('');
    const [petSymptom, setpetSymptom] = useState('');

    const [error, setError] = useState(false);
    const [mesajeError, setmesajeError] = useState('');

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random+fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //VALIDACIONES DEL FORMULARIO.
        if ([petName, petOwnerName, petOwnerEnmail, petDate, petSymptom].includes('')) {
            setError(true);
            setmesajeError('Todos los Campos son Obligatorios.!')
        } else {
            setError(false);
            setmesajeError('')
        }

        const objPaciente = {
            petName,
            petOwnerName,
            petOwnerEnmail,
            petDate,
            petSymptom,
            id: generarId()
        }
        //console.log(objPaciente)
        setPaciente([...paciente, objPaciente])
        //RESETEAR EL FORMULARIO
        setPetName('');
        setpetOwnerName('');
        setpetOwnerEnmail('');
        setpetDate('');
        setpetSymptom('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className='text-white text-center text-bold text-3xl mb-2'>
                New Register For Follow Up.!
            </h2>
            <form
                onSubmit={handleSubmit}
                className='bg-gray-700 shadow-md rounded-lg py-10 px-5 mb-10'
            >
                {error && <Error><p>Todos los Campos Son Requeridos</p></Error>}
                <div className='mb-5'>
                    <label htmlFor='petName' className='text-white block uppercase font-bold'>
                        Name of Pet
                    </label>
                    <input
                        id='petName'
                        type='text'
                        placeholder='Write the name of the Pet'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
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
                        value={petOwnerName}
                        onChange={(e) => setpetOwnerName(e.target.value)}
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
                        value={petOwnerEnmail}
                        onChange={(e) => setpetOwnerEnmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='petRegistrationDate' className='text-white block uppercase font-bold'>
                        Date
                    </label>
                    <input
                        id='petDate'
                        type='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                        value={petDate}
                        onChange={(e) => setpetDate(e.target.value)}
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
                        value={petSymptom}
                        onChange={(e) => setpetSymptom(e.target.value)}
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

