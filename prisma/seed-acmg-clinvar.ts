import { PrismaClient } from '@prisma/client'
import acmgClinvar from './acmg_clinvartojson.json'
import { smaller_df_1 } from './smaller_df_1'
const prisma = new PrismaClient()

export async function seedACMGClinvar() {
    await prisma.clinvar.createMany({
        data: smaller_df_1,
        skipDuplicates: true,
    })
}
await seedACMGClinvar()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
