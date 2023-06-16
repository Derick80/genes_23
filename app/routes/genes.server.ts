import { prisma } from '~/server/prisma.server'

export async function getFilteredGenes(whereFilter: string) {
    return await prisma.gene.findMany({
        where: {
            symbol: {
                contains: whereFilter,
                mode: 'insensitive',
            },
        },
        include: {
            lofMetrics: true,
        },
    })
}
