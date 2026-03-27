"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEffect, useCallback } from "react";

interface RichTextEditorProps {
  name?: string;
  initialValue?: string;
  onChange?: (html: string) => void;
}

const ToolbarButton = ({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onMouseDown={(e) => {
      e.preventDefault();
      onClick();
    }}
    title={title}
    className={`flex h-8 w-8 items-center justify-center rounded text-sm transition-colors ${
      active
        ? "bg-brand text-white"
        : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
    }`}
  >
    {children}
  </button>
);

export default function RichTextEditor({
  name = "content",
  initialValue = "",
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-brand underline",
        },
      }),
      Placeholder.configure({
        placeholder: "내용을 작성하세요.",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: initialValue,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[360px] px-4 py-3 focus:outline-none prose prose-stone max-w-none",
      },
    },
  });

  useEffect(() => {
    if (editor && initialValue && editor.isEmpty) {
      editor.commands.setContent(initialValue);
    }
  }, [editor, initialValue]);

  const insertImage = useCallback(() => {
    if (!editor) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);
          
          // 압축률 0.7 정도로 변환해 용량 감소
          const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
          editor.chain().focus().setImage({ src: dataUrl }).run();
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }, [editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href || "";
    const url = window.prompt("링크 URL을 입력하세요:", prev);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const html = editor.getHTML();

  return (
    <div className="w-full rounded-md border border-border focus-within:border-brand focus-within:ring-1 focus-within:ring-brand overflow-hidden">
      {/* Hidden input to carry value in form */}
      <input type="hidden" name={name} value={html} />

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-stone-50 px-2 py-1.5">
        {/* Heading */}
        <select
          onMouseDown={(e) => e.preventDefault()}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "p") {
              editor.chain().focus().setParagraph().run();
            } else {
              editor
                .chain()
                .focus()
                .setHeading({ level: parseInt(val) as 1 | 2 | 3 })
                .run();
            }
          }}
          value={
            editor.isActive("heading", { level: 1 })
              ? "1"
              : editor.isActive("heading", { level: 2 })
              ? "2"
              : editor.isActive("heading", { level: 3 })
              ? "3"
              : "p"
          }
          className="h-8 rounded border border-border bg-white px-1.5 text-xs text-stone-700 focus:outline-none focus:border-brand cursor-pointer"
        >
          <option value="p">본문</option>
          <option value="1">제목 1</option>
          <option value="2">제목 2</option>
          <option value="3">제목 3</option>
        </select>

        <div className="w-px h-5 bg-border mx-1" />

        {/* Bold */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="굵게 (Ctrl+B)"
        >
          <strong className="text-xs">B</strong>
        </ToolbarButton>

        {/* Italic */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="기울기 (Ctrl+I)"
        >
          <em className="text-xs">I</em>
        </ToolbarButton>

        {/* Underline */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          title="밑줄 (Ctrl+U)"
        >
          <span className="text-xs underline">U</span>
        </ToolbarButton>

        {/* Strikethrough */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          title="취소선"
        >
          <s className="text-xs">S</s>
        </ToolbarButton>

        <div className="w-px h-5 bg-border mx-1" />

        {/* Align left */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
          title="왼쪽 정렬"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <rect x="1" y="2" width="14" height="1.5" rx="0.75" />
            <rect x="1" y="5.5" width="9" height="1.5" rx="0.75" />
            <rect x="1" y="9" width="14" height="1.5" rx="0.75" />
            <rect x="1" y="12.5" width="9" height="1.5" rx="0.75" />
          </svg>
        </ToolbarButton>

        {/* Align center */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
          title="가운데 정렬"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <rect x="1" y="2" width="14" height="1.5" rx="0.75" />
            <rect x="3.5" y="5.5" width="9" height="1.5" rx="0.75" />
            <rect x="1" y="9" width="14" height="1.5" rx="0.75" />
            <rect x="3.5" y="12.5" width="9" height="1.5" rx="0.75" />
          </svg>
        </ToolbarButton>

        {/* Align right */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
          title="오른쪽 정렬"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <rect x="1" y="2" width="14" height="1.5" rx="0.75" />
            <rect x="6" y="5.5" width="9" height="1.5" rx="0.75" />
            <rect x="1" y="9" width="14" height="1.5" rx="0.75" />
            <rect x="6" y="12.5" width="9" height="1.5" rx="0.75" />
          </svg>
        </ToolbarButton>

        <div className="w-px h-5 bg-border mx-1" />

        {/* Bullet list */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="글머리 기호"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <circle cx="2" cy="4" r="1.2" />
            <rect x="4.5" y="3.25" width="10" height="1.5" rx="0.75" />
            <circle cx="2" cy="8" r="1.2" />
            <rect x="4.5" y="7.25" width="10" height="1.5" rx="0.75" />
            <circle cx="2" cy="12" r="1.2" />
            <rect x="4.5" y="11.25" width="10" height="1.5" rx="0.75" />
          </svg>
        </ToolbarButton>

        {/* Ordered list */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="번호 목록"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <text x="1" y="5" fontSize="4.5" fontFamily="monospace">1.</text>
            <rect x="5" y="3.5" width="10" height="1.4" rx="0.7" />
            <text x="1" y="9" fontSize="4.5" fontFamily="monospace">2.</text>
            <rect x="5" y="7.5" width="10" height="1.4" rx="0.7" />
            <text x="1" y="13" fontSize="4.5" fontFamily="monospace">3.</text>
            <rect x="5" y="11.5" width="10" height="1.4" rx="0.7" />
          </svg>
        </ToolbarButton>

        <div className="w-px h-5 bg-border mx-1" />

        {/* Link */}
        <ToolbarButton
          onClick={setLink}
          active={editor.isActive("link")}
          title="링크 삽입"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <path d="M6.354 8.354a.5.5 0 010-.708L8.5 5.5A2.5 2.5 0 115.5 8.5L6.354 7.646a.5.5 0 11.707-.707L6.5 7.5A1.5 1.5 0 108.5 5.5L6.354 7.646a.5.5 0 010 .708z" />
            <path d="M9.646 7.646a.5.5 0 010 .708L7.5 10.5A2.5 2.5 0 1110.5 7.5l-.854.854a.5.5 0 11-.707-.707L9.5 7.5A1.5 1.5 0 107.5 9.5l2.146-2.147a.5.5 0 01.707 0z" />
          </svg>
        </ToolbarButton>

        {/* Image */}
        <ToolbarButton onClick={insertImage} title="이미지 삽입">
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <path d="M1 2.5A1.5 1.5 0 012.5 1h11A1.5 1.5 0 0115 2.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 13.5v-11zm1.5-.5a.5.5 0 00-.5.5v8.585l2.646-2.647a.5.5 0 01.708 0L7 10.586l3.146-3.147a.5.5 0 01.708 0L14 10.586V2.5a.5.5 0 00-.5-.5h-11zM14 11.707l-3.5-3.5-3.146 3.147a.5.5 0 01-.708 0L4.5 9.207l-3 3V13.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-1.793zM5 5.5a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </ToolbarButton>

        <div className="w-px h-5 bg-border mx-1" />

        {/* Horizontal rule */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="구분선"
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
            <rect x="0" y="7.25" width="16" height="1.5" rx="0.75" />
          </svg>
        </ToolbarButton>

        <div className="ml-auto flex items-center gap-0.5">
          {/* Undo */}
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            title="실행 취소"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
              <path d="M8 3a5 5 0 105 5h-1.5A3.5 3.5 0 118 4.5V3z" />
              <path d="M8 1L5 4l3 3V1z" />
            </svg>
          </ToolbarButton>

          {/* Redo */}
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            title="다시 실행"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
              <path d="M8 3a5 5 0 100 10v-1.5A3.5 3.5 0 118 4.5V3z" />
              <path d="M8 1l3 3-3 3V1z" />
            </svg>
          </ToolbarButton>
        </div>
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} />
    </div>
  );
}
