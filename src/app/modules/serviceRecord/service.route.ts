import { Router } from "express"
import { serviceControllers } from "./service.controller"

const router = Router()

router.post("/", serviceControllers.createService)
router.get("/", serviceControllers.getAllServices)
router.get("/:id", serviceControllers.getServiceById)
router.put("/:id", serviceControllers.updateServiceById)

export const serviceRecordRoutes = router
