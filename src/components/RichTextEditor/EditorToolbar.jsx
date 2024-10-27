import React from "react";
import {
    FaRedo,
    FaUndo,
    FaRegWindowMinimize,
    // FaRegSquare,
    FaStar
} from "react-icons/fa";
import { Quill } from "react-quill";
import Dropdown from "./Dropdown";
import BlotFormatter from "quill-blot-formatter";

const UndoButton = () => <FaUndo />;
const RedoButton = () => <FaRedo />;
const DividerButton = () => <FaRegWindowMinimize />;
// const BorderButton = () => <FaRegSquare />;
const StartButton = () => <FaStar />;

function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

const colorsList = [
    "#000000",
    "#e60000",
    "#ff9900",
    "#ffff00",
    "#008a00",
    "#0066cc",
    "#9933ff",
    "#ffffff",
    "#facccc",
    "#ffebcc",
    "#ffffcc",
    "#cce8cc",
    "#cce0f5",
    "#ebd6ff",
    "#bbbbbb",
    "#f06666",
    "#ffc266",
    "#ffff66",
    "#66b966",
    "#66a3e0",
    "#c285ff",
    "#888888",
    "#a10000",
    "#b26b00",
    "#b2b200",
    "#006100",
    "#0047b2",
    "#6b24b2",
    "#444444",
    "#5c0000",
    "#663d00",
    "#666600",
    "#003700",
    "#002966",
    "#3d1466",
    "#361999",
    "#ffebe9",
    "#1b1839"
];

const BlockEmbed = Quill.import("blots/block/embed");
class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = "divider";
DividerBlot.tagName = "hr";
Quill.register(DividerBlot);
Quill.register('modules/blotFormatter', BlotFormatter);

function addDivider() {
    const range = this.quill.getSelection(true);
    this.quill.insertText(range.index, "\n", Quill.sources.USER);
    this.quill.insertEmbed(range.index + 1, "divider", true, Quill.sources.USER);
    this.quill.setSelection(range.index + 2, Quill.sources.SILENT);
}

const Inline = Quill.import("blots/inline");
class EmphBlot extends Inline { }
EmphBlot.blotName = "em";
EmphBlot.tagName = "em";
EmphBlot.className = "custom-em";
Quill.register("formats/em", EmphBlot);

function addBorder() {
    const range = this.quill.getSelection();
    if (range) {
        this.quill.format("em", true);
    }
}

function insertStar() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "★");
    this.quill.setSelection(cursorPosition + 1);
}

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);

export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange,
            divide: addDivider,
            border: addBorder,
            star: insertStar
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    },
    blotFormatter: {
        overlay: {
            style: {
                border: '1px dashed #005eff',
            }
        }
    }
};

// Formats objects for setting up the Quill editor
export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    "em",
    "p",
    "divider",
    "hr",
    "formats/em"
];

// Quill Toolbar component
export const QuillToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <select className="ql-font" defaultValue="arial">
                <option value="arial">Arial</option>
                <option value="comic-sans">Comic Sans</option>
                <option value="courier-new">Courier New</option>
                <option value="georgia">Georgia</option>
                <option value="helvetica">Helvetica</option>
                <option value="lucida">Lucida</option>
            </select>
            <select className="ql-header" defaultValue="6">
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
                <option value="5">Heading 5</option>
                <option value="6">Heading 6</option>
                <option value="">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <Dropdown list={colorsList} className="ql-color" />
            <select className="ql-background" />
        </span>
        <span className="ql-formats">
            <button className="ql-blockquote" />
            <button className="ql-code-block" />
            <button className="ql-star">
                <StartButton />
            </button>
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
            <button className="ql-link" />
            <button className="ql-image" />
        </span>
        <span className="ql-formats">
            <button className="ql-divide">
                <DividerButton />
            </button>
        </span>
        <span className="ql-formats">
            <button className="ql-undo">
                <UndoButton />
            </button>
            <button className="ql-redo">
                <RedoButton />
            </button>
        </span>

    </div>
);

export default QuillToolbar;
