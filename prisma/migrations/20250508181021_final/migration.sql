-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('pending', 'in_progress', 'done');

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "Bike" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("bikeId")
);

-- CreateTable
CREATE TABLE "ServiceRecord" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "ServiceStatus" NOT NULL,

    CONSTRAINT "ServiceRecord_pkey" PRIMARY KEY ("serviceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Bike_customerId_key" ON "Bike"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceRecord_bikeId_key" ON "ServiceRecord"("bikeId");

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
