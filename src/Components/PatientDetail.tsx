import { toast } from 'react-toastify'
import { usePatientStore } from "../Store/store";
import { Patient } from "../Types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patient
}

const PatientDetail = ({ patient } : PatientDetailProps) => {
  const { id, name, caretaker, email, date, symptoms } = patient
  
  const removePatient = usePatientStore(state => state.deletePatient);
  const getPatientById = usePatientStore(state => state.getPatientById);

  const handleBtnRemove = () => {
    removePatient(id);
    toast.error('Paciente eliminado');
  }

  return (
    <div className="mx-5 my-5 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={id} />
      <PatientDetailItem label="Nombre" data={name} />
      <PatientDetailItem label="Propietario" data={caretaker} />
      <PatientDetailItem label="Email" data={email} />
      <PatientDetailItem label="Fecha de registro" data={date.toString()} />
      <PatientDetailItem label="Sintomas" data={symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button" 
          className="py-2 px-10 bg-indigo-700 hover:bg-indigo-500 text-white font-bold 
            uppercase rounded-lg"
          onClick={() => getPatientById(id)}
        >
          Editar
        </button>
        <button
          type="button" 
          className="py-2 px-10 bg-red-700 hover:bg-red-500 text-white font-bold 
            uppercase rounded-lg"
          onClick={handleBtnRemove}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default PatientDetail;