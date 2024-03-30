import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
 // here you can write prisma client queries here
 const user = await prisma.user.deleteMany()
 // console.log(user)
}

main().catch(e => {
 console.error(e.message)
})
 .finally(async () => {
 await prisma.$disconnect()
})
