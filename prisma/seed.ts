import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

const main =async()=> {
    await prisma.student.createMany({
        data: [
            { name: "Alice", DOB: "2000-05-15", email: "alice@example.com" },
            { name: "Bob", DOB: "1999-08-20", email: "bob@example.com" },
            { name: "Charlie", DOB: "2001-01-12", email: "charlie@example.com" },
            { name: "Diana", DOB: "2002-03-10", email: "diana@example.com" },
            { name: "Ethan", DOB: "2000-11-05", email: "ethan@example.com" },
            { name: "Fiona", DOB: "2001-07-22", email: "fiona@example.com" },
            { name: "George", DOB: "1998-12-30", email: "george@example.com" },
            { name: "Hannah", DOB: "2000-09-14", email: "hannah@example.com" },
            { name: "Ivan", DOB: "2002-02-28", email: "ivan@example.com" },
            { name: "Julia", DOB: "1999-04-18", email: "julia@example.com" },
            { name: "Kevin", DOB: "2000-12-25", email: "kevin@example.com" },
            { name: "Laura", DOB: "2001-06-30", email: "laura@example.com" },
            { name: "Michael", DOB: "1999-10-10", email: "michael@example.com" },
            { name: "Nina", DOB: "2002-01-01", email: "nina@example.com" },
            { name: "Oliver", DOB: "2000-04-22", email: "oliver@example.com" },
            { name: "Paul", DOB: "1999-11-30", email: "paul@example.com" },
            { name: "Quinn", DOB: "2001-03-15", email: "quinn@example.com" },
            { name: "Rachel", DOB: "2000-08-05", email: "rachel@example.com" },
            { name: "Sam", DOB: "2002-02-14", email: "sam@example.com" },
            { name: "Tina", DOB: "1999-09-09", email: "tina@example.com" }
        ],skipDuplicates: true,
    });
}

main()
.then(()=> {
    console.log("Seeding completed");
}).catch((e) => {
    console.error("Seeding failed", e);
}).finally(async () => {
    await prisma.$disconnect();
});