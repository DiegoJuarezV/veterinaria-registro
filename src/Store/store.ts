import { create } from "zustand";
import { DraftPatient, Patient } from "../Types";
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
  patients: Patient[]
  activeId: Patient['id']
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  getPatientById: (id: Patient['id']) => void
}

const createPatientId = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  activeId: "",
  addPatient: (data) => { 
    const newPatient = createPatientId(data)
    set((state) => ({
      patients: [ ...state.patients, newPatient ]
    }))
  },
  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter(patient => patient.id !== id)
    }))
  },
  getPatientById: (id) => {
    set(() => ({
      activeId: id
    }))
  }
}))