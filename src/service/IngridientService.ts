import { Ingridient } from "@prisma/client";
import { prisma } from "../prisma";


export async function findAllIngridients() {
    return await prisma.ingridient.findMany();
}

export async function findIngridientByName(name: string) {
    return await prisma.ingridient.findFirstOrThrow({
        where: {
            name: name,
        }
    });
}

export async function createIngridient(ingridient: Ingridient) {
    return await prisma.ingridient.create({
        data: {
            name: ingridient.name,
            description: ingridient.description
        }
    })
}
