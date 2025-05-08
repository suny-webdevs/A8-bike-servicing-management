import { Customer } from "@prisma/client"
import prisma from "../../config"

const createCustomer = async (data: Customer) => {
  const result = await prisma.customer.create({ data })
  return result
}

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany()
  return result
}

const getCustomerById = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: { id },
  })
  return result
}

const updateACustomer = async (
  id: string,
  data: Partial<{ name: string; phone: string }>
) => {
  return prisma.customer.update({
    where: { id },
    data,
  })
}

const deleteACustomer = async (id: string) => {
  return prisma.customer.delete({ where: { id } })
}

export const customerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateACustomer,
  deleteACustomer,
}
