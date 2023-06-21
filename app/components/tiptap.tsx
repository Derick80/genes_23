import {
    FontBoldIcon,
    FontItalicIcon,
    StrikethroughIcon,
    UnderlineIcon,
    Pencil1Icon,
    HeadingIcon,
    Link1Icon,
    LinkBreak1Icon,
    CodeIcon,
    ImageIcon,
    ListBulletIcon,
} from '@radix-ui/react-icons'
import type { Editor} from '@tiptap/react';
import { EditorContent, useEditor } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Code from '@tiptap/extension-code'
import Link from '@tiptap/extension-link'
import React from 'react'

const MenuBar = ({ editor }: { editor: Editor }) => {
    const addImage = React.useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])
    const setLink = React.useCallback(() => {
        const previousUrl = editor?.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor?.chain().focus().extendMarkRange('link').unsetLink().run()

            return
        }

        // update link
        editor
            ?.chain()
            .focus()
            .extendMarkRange('link')
            .setLink({ href: url })
            .run()
    }, [editor])

    if (!editor) {
        return null
    }

    return (
        <div className="flex h-12 w-full flex-row items-center justify-between border-b border-gray-200 bg-gray-100 text-black">
            <button
                type="button"
                className={editor.isActive('bold') ? 'is-active' : ''}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                <FontBoldIcon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
            >
                <FontItalicIcon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
            >
                <StrikethroughIcon />
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
                <UnderlineIcon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleSuperscript().run()}
            >
                <svg
                    className="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                >
                    <path d="M11 7V20H9V7H3V5H15V7H11ZM19.5507 6.5803C19.7042 6.43453 19.8 6.22845 19.8 6C19.8 5.55817 19.4418 5.2 19 5.2C18.5582 5.2 18.2 5.55817 18.2 6C18.2 6.07624 18.2107 6.14999 18.2306 6.21983L17.0765 6.54958C17.0267 6.37497 17 6.1906 17 6C17 4.89543 17.8954 4 19 4C20.1046 4 21 4.89543 21 6C21 6.57273 20.7593 7.08923 20.3735 7.45384L18.7441 9H21V10H17V9L19.5507 6.5803V6.5803Z"></path>
                </svg>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleSubscript().run()}
            >
                <svg
                    className="text-black"
                    color="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                >
                    <path d="M11 6V19H9V6H3V4H17V6H11ZM19.5507 16.5803C19.7042 16.4345 19.8 16.2284 19.8 16C19.8 15.5582 19.4418 15.2 19 15.2C18.5582 15.2 18.2 15.5582 18.2 16C18.2 16.0762 18.2107 16.15 18.2306 16.2198L17.0765 16.5496C17.0267 16.375 17 16.1906 17 16C17 14.8954 17.8954 14 19 14C20.1046 14 21 14.8954 21 16C21 16.5727 20.7593 17.0892 20.3735 17.4538L18.7441 19H21V20H17V19L19.5507 16.5803V16.5803Z"></path>
                </svg>{' '}
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHighlight().run()}
            >
                <Pencil1Icon />
            </button>
            <button type="button"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                <CodeIcon />
            </button>

            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
                }
            >
                <div className="flex flex-row items-center justify-center">
                    <HeadingIcon />
                    <p className="text-[15px]">1</p>
                </div>
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
                }
            >
                <div className="flex flex-row items-center justify-center">
                    <HeadingIcon />
                    <p className="text-[15px]">2</p>
                </div>
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                    editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
                }
            >
                <div className="flex flex-row items-center justify-center">
                    <HeadingIcon />
                    <p className="text-[15px]">3</p>
                </div>
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                    editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
                }
            >
                <div className="flex flex-row items-center justify-center">
                    <HeadingIcon />
                    <p className="text-[15px]">4</p>
                </div>
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                    editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
                }
            >
                <div className="flex flex-row items-center justify-center">
                    <HeadingIcon />
                    <p className="text-[15px]">5</p>
                </div>
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={
                    editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
                }
            >
                <div className="flex flex-row items-center justify-center">
                    <HeadingIcon />
                    <p className="text-[15px]">6</p>
                </div>
            </button>
            <button
                type="button"
                onClick={setLink}
                className={editor.isActive('link') ? 'is-active' : ''}
            >
                <Link1Icon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().unsetLink().run()}
                disabled={!editor.isActive('link')}
            >
                <LinkBreak1Icon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                <CodeIcon />
            </button>
            <button
                className={editor.isActive('image') ? 'is-active' : ''}
                type="button"
                onClick={addImage}
            >
                <ImageIcon />
            </button>
            <button
                type="button"
                className={editor.isActive('bulletList') ? 'is-active' : ''}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
                <ListBulletIcon />
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
                <ListBulletIcon />
            </button>
        </div>
    )
}
const TipTap = ({ content }: { content: string }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    HTMLAttributes: {
                        class: 'my-custom-heading',
                    },
                    levels: [1, 2, 3,4  ,5, 6],
                },
                
                
            }),
            Highlight.configure({
                HTMLAttributes: {
                    class: 'bg-yellow-200',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-500 underline',
                },
            }),
            Underline.configure({
                HTMLAttributes: {
                    class: 'text-black dark:text-slate-50',
                },
            }),
            
            Image.configure({
                HTMLAttributes: {
                    class: 'w-full',
                },
            }),
            
            Subscript.configure({
                HTMLAttributes: {
                    class: 'text-black dark:text-slate-50',
                },
            }),
            Superscript.configure({
                HTMLAttributes: {
                    class: 'text-black dark:text-slate-50',
                },
            }),
            
            
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'flex-1 p-4 mx-auto border border-t-0 text-black dark:text-slate-50 w-full h-auto text-sm m-5 focus:outline-non rounded-b-md mt-0 ',
            },
        },
    })

    if (!editor) return null

    return (
        <div className="flex flex-col gap-2 border-2 border-red-500">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            <input type="hidden" name="notes" value={editor?.getHTML() || ''} />
        </div>
    )
}

export default TipTap
