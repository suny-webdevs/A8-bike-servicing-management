import { Bike } from "@prisma/client"
import prisma from "../../config"

const createBike = async (data: Bike) => {
  return await prisma.bike.create({ data })
}

const getAllBikes = async () => {
  return await prisma.bike.findMany()
}

const getBikeById = async (bikeId: string) => {
  return await prisma.bike.findUnique({ where: { bikeId } })
}

// const updateBikeById = async (bikeId: string, data: Partial<Bike>) => {
//   return await prisma.bike.update({ where: { bikeId }, data })
// }

// const deleteBikeById = async (bikeId: string) => {
//   return await prisma.bike.delete({ where: { bikeId } })
// }

export const bikeServices = {
  createBike,
  getAllBikes,
  getBikeById,
  // updateBikeById,
  // deleteBikeById,
}
