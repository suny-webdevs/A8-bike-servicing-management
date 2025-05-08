import { ServiceRecord } from "@prisma/client"
import prisma from "../../config"

const createService = async (data: ServiceRecord) => {
  return await prisma.serviceRecord.create({ data })
}

const getAllServices = async () => {
  return await prisma.serviceRecord.findMany()
}

const getServiceById = async (serviceId: string) => {
  return await prisma.serviceRecord.findUnique({ where: { serviceId } })
}

const updateServiceById = async (
  serviceId: string,
  data: Partial<ServiceRecord>
) => {
  return await prisma.serviceRecord.update({ where: { serviceId }, data })
}

export const serviceRecordServices = {
  createService,
  getAllServices,
  getServiceById,
  updateServiceById,
}
