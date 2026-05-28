import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErros"

export default {
    list: async ( request: Request, response: Response) => {
        try{
            const users = await prisma.sorteados.findMany()
            return response.status(200).json(users)
        } catch(e) {
            return handleErrors(e, response)
        }
    },
    create: async (request: Request, response: Response) => {
        try{
            const {nome} = request.body

            if(!nome){
                return response.status(400).json("Falta o nome")
            }
            const user = await prisma.sorteados.create({
                data: {
                    nome
                }
            })
            return response.status(201).json(user)
        } catch(e) {
            return handleErrors(e, response)
        }
    },
    sortear: async (request: Request, response: Response) => {
    try {
        const users = await prisma.sorteados.findMany()

        if (users.length === 0) {
            return response.status(400).json({ message: "Nenhum usuário cadastrado" })
        }

        const randomIndex = Math.floor(Math.random() * users.length)

        const selectedUser = users[randomIndex]

        return response.status(200).json({ "sorteado": selectedUser })
    } catch (e) {
        return handleErrors(e, response)
    }
    },
    delete: async (request: Request, response: Response) =>{
        try {
            const {id} = request.params
            const user = await prisma.sorteados.delete({
                where: {id: +id}
            })
            return response.status(200).json(user)
        } catch(e) {
            return handleErrors(e, response)
        }
    }
}