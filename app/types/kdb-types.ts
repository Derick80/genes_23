import type { PdfLibrary as PrismaPdfLibrary } from '@prisma/client'
import type { SerializeFrom } from '@remix-run/node'

import type { PdfNotes as PrismaPdfNotes } from '@prisma/client'

export type PdfNotes = SerializeFrom<PrismaPdfNotes>
export type PdfLibrary = SerializeFrom<PrismaPdfLibrary>

export type myPdfLibrary =  PdfLibrary & PdfNotes
