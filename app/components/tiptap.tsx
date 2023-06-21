import {
  
} from '@radix-ui/react-icons'
import {Bold, Italic, Superscript as SuperScriptIcon, Subscript as SubScriptIcon, Strikethrough, Underline as UnderLineIcon, Code, ListOrdered, Link as LinkIcon, Unlink, Image as ImageIcon, Heading, Pencil, CodeIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon, HighlighterIcon, Heading1Icon, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Link2, UnlinkIcon, ListIcon, List,
    
}  from 'lucide-react'
import type { Editor} from '@tiptap/react';
import { EditorContent, useEditor } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
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
    <div className="flex flex-row gap-2 items-center justify-center text-sm">
    <button
                type="button"
                className={editor.isActive('bold') ? 'is-active' : ''}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                <Bold />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
            >
                <ItalicIcon />
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
                <SuperScriptIcon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleSubscript().run()}
            >
                <SubScriptIcon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHighlight().run()}
            >
                <HighlighterIcon />
            </button>
            </div>
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
                
                <Heading1 />

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
                    <Heading2 />
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
                    <Heading3 />
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
                    <Heading4 />
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
              
                    <Heading5 />
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
               
                    <Heading6 />
            </button>
            <button
                type="button"
                onClick={setLink}
                className={editor.isActive('link') ? 'is-active' : ''}
            >
                <LinkIcon />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().unsetLink().run()}
                disabled={!editor.isActive('link')}
            >
                <UnlinkIcon />
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
                <List />
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
                <ListIcon />
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
                class: 'flex-1 p-4 mx-auto border border-t-0 text-white  w-full h-auto text-sm m-5 focus:outline-non rounded-b-md mt-0 ',
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
