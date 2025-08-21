import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Insert data to user table
async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log("Data inserted successfully", res);
}
//insertUser("avineet.kaur@hello.com", "hello", "avineet", "kaur");

//update users in table
interface User {

}
