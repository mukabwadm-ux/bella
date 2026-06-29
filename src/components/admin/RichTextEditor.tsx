"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import ImageExtension from "@tiptap/extension-image";
import UnderlineExtension from "@tiptap/extension-underline";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useCallback } from "react";
import {
  Bold, Italic, Underline, Strikethrough, Link, Image,
  List, ListOrdered, Quote, Minus, Undo2, Redo2,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Indent, Outdent,
} from "lucide-react";

interface Props {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
}

type Level = 1 | 2 | 3 | 4 | 5 | 6;

function ToolBtn({
  onClick,
  active,
  title,
  children,
  disabled,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
        active
          ? "bg-[#0B3D2E] text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      } ${disabled ? "opacity-30 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="w-px h-5 bg-gray-200 flex-shrink-0 mx-0.5" />;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing here...",
  minHeight = "min-h-[280px]",
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
      }),
      UnderlineExtension,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      ImageExtension.configure({ inline: false, allowBase64: false }),
      LinkExtension.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html === "<p></p>" ? "" : html);
    },
    editorProps: {
      attributes: {
        class: `prose prose-base max-w-none focus:outline-none ${minHeight} px-4 py-3`,
      },
    },
  });

  // Sync external value changes (e.g. when loading edit form)
  useEffect(() => {
    if (!editor) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value === "" ? value : undefined, editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);

  const insertImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  if (!editor) return null;

  const headingValue = (() => {
    for (let i = 1; i <= 6; i++) {
      if (editor.isActive("heading", { level: i })) return String(i);
    }
    return "0";
  })();

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[#0B3D2E]/20 focus-within:border-[#0B3D2E] transition-colors bg-white">
      {/* ── TOOLBAR ─────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50 px-3 py-2 flex flex-wrap items-center gap-0.5">

        {/* Heading select */}
        <select
          value={headingValue}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: val as Level }).run();
            }
          }}
          className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-[#0B3D2E] cursor-pointer mr-1"
        >
          <option value="0">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>

        <Divider />

        {/* Inline formatting */}
        <ToolBtn title="Bold (Ctrl+B)" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={14} />
        </ToolBtn>
        <ToolBtn title="Italic (Ctrl+I)" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={14} />
        </ToolBtn>
        <ToolBtn title="Underline (Ctrl+U)" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <Underline size={14} />
        </ToolBtn>
        <ToolBtn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough size={14} />
        </ToolBtn>

        <Divider />

        {/* Alignment */}
        <ToolBtn title="Align Left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <AlignLeft size={14} />
        </ToolBtn>
        <ToolBtn title="Align Center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          <AlignCenter size={14} />
        </ToolBtn>
        <ToolBtn title="Align Right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          <AlignRight size={14} />
        </ToolBtn>
        <ToolBtn title="Justify" active={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()}>
          <AlignJustify size={14} />
        </ToolBtn>

        <Divider />

        {/* Lists */}
        <ToolBtn title="Bullet List" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List size={14} />
        </ToolBtn>
        <ToolBtn title="Numbered List" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={14} />
        </ToolBtn>
        <ToolBtn title="Indent (Tab)" onClick={() => editor.chain().focus().sinkListItem("listItem").run()} disabled={!editor.can().sinkListItem("listItem")}>
          <Indent size={14} />
        </ToolBtn>
        <ToolBtn title="Outdent (Shift+Tab)" onClick={() => editor.chain().focus().liftListItem("listItem").run()} disabled={!editor.can().liftListItem("listItem")}>
          <Outdent size={14} />
        </ToolBtn>

        <Divider />

        {/* Blocks */}
        <ToolBtn title="Blockquote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote size={14} />
        </ToolBtn>
        <ToolBtn title="Horizontal Rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <Minus size={14} />
        </ToolBtn>

        <Divider />

        {/* Link & Image */}
        <ToolBtn title="Insert / Edit Link" active={editor.isActive("link")} onClick={setLink}>
          <Link size={14} />
        </ToolBtn>
        <ToolBtn title="Insert Image (URL)" onClick={insertImage}>
          <Image size={14} />
        </ToolBtn>

        <Divider />

        {/* Undo / Redo */}
        <ToolBtn title="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          <Undo2 size={14} />
        </ToolBtn>
        <ToolBtn title="Redo (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          <Redo2 size={14} />
        </ToolBtn>
      </div>

      {/* ── EDITOR AREA ─────────────────────────────── */}
      <EditorContent editor={editor} />
    </div>
  );
}
