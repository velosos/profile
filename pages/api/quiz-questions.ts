import { NextApiRequest, NextApiResponse } from 'next'

const quiz = {
  "questions":[
    {
    "questionText":"Qual foi o primeiro filme estrelado por Jim Carrey?",
    "option1":"O mascara",
    "option2":"Sim Senhor",
    "option3": "O mentiroso",
    "option4": "Rubberface",
    "answer": 4
    },
    
    {
    "questionText":"Qual o nome do primeiro guitarrista do Red Hot Chili Peppers ?",
    "option1":"Hillel Slovak",
    "option2":"Jack Sherman",
    "option3": "John Frusciante",
    "option4": "Josh Klinghoffer",
    "answer": 1
    },
    
    {
    "questionText":"Qual o nome da primeira séria original da Netflix?",
    "option1":"3%",
    "option2":"Orange Is the New Black",
    "option3": "House of Cards",
    "option4": "Dark",
    "answer": 3
    }
   ]
}   

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json(quiz)
}