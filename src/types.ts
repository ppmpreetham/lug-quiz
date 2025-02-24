export interface Question{
    question: string,
    options: string[],
    answer?: string[]
}
  
export interface Quiz{
    question: Question[],
}

export interface Profile{
    username: string,
    
}