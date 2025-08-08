export default interface UserAnamneseFitnessUI{
 // Dados pessoais
    name: string,
    // email: '',
    // phone: '',
    profession: string,
    workPosition: WorkPosition | null,
    
    // Saúde
    hasInjury: 'yes'| 'nope' | null,
    injuryDetails: string,
    hasPain:  'yes'| 'nope' | null,
    painDetails: string,
    takeMedication: 'yes'| 'nope' | null,
    medicationDetails: string,
    
    // Atividade física
    likesExercise: 'yes'| 'nope' |'moreOrLess'| null,
    currentExercises: string,
    exerciseTime: string,
    
    // Objetivos
    goal: string,
    bodyParts: string,
    timeframe: string,
    
    // Empecilhos
    obstacles: [],
    obstacleDetails: ''
}

export enum exerciseTimeEnum {
  oneMonth= '1 mês',
  threeMonth = '3 meses',
  sixMonth = '6 meses',
  oneYear ='1 ano',
  moreOneYear = 'Mais de 1 ano'
}

export const initialForm: UserAnamneseFitnessUI = {
  name: '',
  profession: '',
  workPosition:null ,
  hasInjury: null,
  injuryDetails: '',
  hasPain: null,
  painDetails: '',
  takeMedication: null,
  medicationDetails: '',
  likesExercise: null,
  currentExercises: '',
  exerciseTime: '',
  goal: '',
  bodyParts: '',
  timeframe: '',
  obstacles: [],
  obstacleDetails: ''
};
export type WorkPosition = 'pe' | 'sentado' | 'misto';