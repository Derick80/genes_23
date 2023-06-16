import type { PdfLibrary as PrismaPdfLibrary } from '@prisma/client'
import type { SerializeFrom } from '@remix-run/node'

export type PdfLibrary = SerializeFrom<PrismaPdfLibrary>
