import { Router } from "express"
import { bikeControllers } from "./bike.controller"

const router = Router()

router.post("/", bikeControllers.createBike)
router.get("/", bikeControllers.getAllBikes)
router.get("/:id", bikeControllers.getBikeById)
// router.put("/:id", bikeControllers.updateBikeById)
// router.delete("/:id", bikeControllers.deleteBikeById)

export const bikeRoutes = router
