import { Prisma } from '@prisma/client'
import { prisma } from './prisma.server'

export async function getAllPosts() {
    return await prisma.post.findMany({})
}

export type createPostInput = {
    title: string
    description: string
    slug: string
    content: string
    imgUrl: string
    categories: string[]
    authorId: string
}

export async function createPost(input: createPostInput) {
    const post = await prisma.post.create({
        data: {
            title: input.title,
            description: input.description,
            slug: input.slug,
            content: input.content,
            imgUrl: input.imgUrl,
            authorId: input.authorId,
            categories: {
                connectOrCreate: input.categories.map((category) => ({
                    where: { label: category },
                    create: { label: category },
                })),
            },
        },
    })

    return post
}

export async function getPostBySlug(slug: string) {
    const post = await prisma.post.findUnique({
        where: { slug },
        include: {
            categories: true,
        },
    })
    return post
}

export async function getPostById(id: string) {
    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            categories: true,
        },
    })
    return post
}

type updatePostInput = {
    id: string
    title: string
    slug: string
    description: string
    content: string
    imgUrl: string
    categories: string[]
    authorId: string
}
export async function updatePost(input: updatePostInput) {
    const post = await prisma.post.update({
        where: { id: input.id },
        data: {
            title: input.title,
            slug: input.slug,
            description: input.description,
            content: input.content,
            imgUrl: input.imgUrl,
            authorId: input.authorId,
            categories: {
                connectOrCreate: input.categories.map((category) => ({
                    where: { label: category },
                    create: { label: category },
                })),
            },
        },
    })
    return post
}

export async function deletePost(id: string) {
    const post = await prisma.post.delete({
        where: { id },
    })
    return post
}
