import { PrismaClient } from '@prisma/client';
                                //just displaying the query from db
const prisma = new PrismaClient()

async function main() {
 await prisma.user.deleteMany()
 // here you can write prisma client queries here
  const users = await prisma.user.createMany({
   data: [
     {
      name: "tite",
      email: "malaki@",
      age: 21,
      // preferences: {
      //  //always use this fucking create to create a objeect of a table fucking idiot
      //  create: {
      //   EmailUpdate: true
      //  }
      // },
      // writtenPost: {
      //  create: {
      //   title: 'yourname',
      //   rating:2.3
      //  }
      // }
    },
    {
      name: "choleng",
    email: "ttete@",
    age: 21,
    },
     {
      name: "choleng",
    email: "2@",
    age: 22,
     },
     {
      name: "choleng",
    email: "21@",
    age: 23,
    }
   ],
   //to show it to the terminal
    // include: {
    //  preferences: true,
    //  // writtenPost:true
   // },
   //same lang sila ng include pero pede 
   //specific here and mas madami tong silbe
   // select: {
   //  //specific
   //  name: true,
   //  // ito nga
   //  // preferences:{select:{id:true}}
   //  }
  })
 
 //hahanapin lang nya yung may @unique sa schema mo
 const findUnique = await prisma.user.findUnique({
  where:{email:"ttete@"}
 })
 console.log(findUnique)

 const findFirst = await prisma.user.findFirst({
 where: {
  name:'malambot'
 }
})
 console.log(findFirst)
 const findMany= await prisma.user.findMany({
  where: {
    name:'choleng'
  }, 
  orderBy: {
   age:"desc"
  }
  //pagination
  // take:2

  //skippimg
  // skip:1
 })
 console.log(findMany)
 console.log(findMany.length)

  console.log(users)
  const updateUser = await prisma.user.update({
   where: {
     email:'malaki@',
   },
   data: {
    email:'tetengmalambot',
   },
  })
 console.log(updateUser)
 
 const preference = await prisma.preferences.create({
  data: {
   EmailUpdate:true
  }
 })
 console.log(preference)


  const updatePref = await prisma.user.update({
   where: {
     email:'malaki@',
   },
   data: {
    preferences: {
     connect: {
      id:'9d179405-fe1b-4487-bf9e-d09d915cb58f'
     }
    }
   },
  })
 console.log(updateUser)
}


main().catch(e => {
 console.error(e.message)
})
 .finally(async () => {
 await prisma.$disconnect()
})
