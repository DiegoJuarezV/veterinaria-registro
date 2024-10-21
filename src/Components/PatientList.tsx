import { usePatientStore } from "../Store/store";
import PatientDetail from "./PatientDetail";

const PatientList = () => {
  const patients = usePatientStore(state => state.patients);

  return (
    <section className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus
            <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
          </p>
          {patients.map(patient => (
            <PatientDetail 
              key={patient.id} 
              patient={patient} 
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes y  
            <span className="text-indigo-600 font-bold"> aparecerán en este lugar</span>
          </p>
        </>
      )}
    </section>
  )
}

export default PatientList;