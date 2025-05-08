import { Router } from "express"
import { serviceControllers } from "./service.controller"

const router = Router()

router.post("/", serviceControllers.createService)
router.post("/", serviceControllers.getAllServices)
router.post("/:id", serviceControllers.getServiceById)
router.post("/:id", serviceControllers.updateServiceById)

export const serviceRecordRoutes = router
