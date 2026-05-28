import { response, Router } from "express"

import sorteadosController from "./controllers/sorteados"

const routes = Router()

routes.get("/", (request, response) => response.status(200).json({ sucess: true}))

routes.get("/sorteados", sorteadosController.list)

routes.post("/sorteados", sorteadosController.create)

routes.get("/sortear", sorteadosController.sortear)

routes.delete("/sorteados/:id", sorteadosController.delete)

export default routes