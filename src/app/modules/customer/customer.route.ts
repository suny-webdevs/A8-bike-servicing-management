import { Router } from "express"
import { customerController } from "./customer.controller"

const router = Router()

router.post("/", customerController.createCustomer)
router.get("/", customerController.getAllCustomers)
router.get("/:id", customerController.getACustomer)
router.put("/:id", customerController.updateACustomer)
router.delete("/:id", customerController.deleteACustomer)

export const customerRoutes = router
