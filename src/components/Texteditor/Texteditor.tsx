import React from 'react';
import Draft, {
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import Button from '../Button/Button';
import { IComponentProps } from '../../utils';

import '../../index.scss';
import './Texteditor.scss';

const {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
} = Draft;

export interface ITextareaProps extends IComponentProps {
  id?: string,
  name?: string,
  onChange: any,
  value: string,
}

const TextEditor: React.FC<ITextareaProps> = ({
  id,
  name,
  className,
  onChange,
  value,
  theme
}) => {
  const containerRef = React.useRef<any>();
  const editorRef = React.useRef<any>();
  const [editorState, setEditorState] = React.useState(
    value
      ? EditorState.createWithContent(convertFromRaw(value))
      : EditorState.createEmpty(),
  );
  const [isFocused, setIsFocused] = React.useState(false);

  const currentStyle = editorState.getCurrentInlineStyle();
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const focus = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const handleOnChange = (_editorState) => {
    if (onChange) {
      const content = convertToRaw(editorState.getCurrentContent());
      onChange(id || name || 'text', content);
    }
    setEditorState(_editorState);
  };

  const handleKeyCommand = (command, _editorState) => {
    const newState = RichUtils.handleKeyCommand(_editorState, command);
    if (newState) {
      handleOnChange(newState);
      return true;
    }
    return false;
  };

  const handleClickBlockStyle = (style) => (e) => {
    e.preventDefault();
    handleOnChange(RichUtils.toggleBlockType(editorState, style));
  };

  const handleClickInlineStyle = (style) => (e) => {
    e.preventDefault();
    handleOnChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleChangeFocus = (_focus) => () => setIsFocused(_focus);

  const getBlockStyle = (block) => `${block.getType() || ''}`;

  const handleTab = (e) => {
    e.preventDefault();
    const newContentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '    ',
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'insert-characters',
    );
    handleOnChange(newEditorState);
  };

  React.useEffect(() => {
    focus();
  }, []);

  return (
    <div
      className={`bs bs-texteditor ${isFocused ? 'focused' : ''} ${className || ''}`}
      ref={containerRef}
    >
      <div className="RichEditor-controls">
        {[{ label: 'H1', style: 'header-one' },
          { label: 'H2', style: 'header-two' },
          { label: 'H3', style: 'header-three' },
          { label: 'H4', style: 'header-four' },
          { label: 'H5', style: 'header-five' },
          { label: 'H6', style: 'header-six' }].map((type) => (
            <Button
              active={type.style === blockType}
              key={type.label}
              onClick={handleClickBlockStyle(type.style)}
              theme={theme}
            >
              {type.label}
            </Button>
        ))}
        {' '}

        {[{ label: 'Blockquote', style: 'blockquote' },
          { label: 'UL', style: 'unordered-list-item' },
          { label: 'OL', style: 'ordered-list-item' },
          { label: 'Code Block', style: 'code-block' }].map((type) => (
            <Button
              key={type.label}
              onClick={handleClickBlockStyle(type.style)}
              theme={theme}
            >
              {type.label}
            </Button>
        ))}
        {' '}

        {[{ label: 'Bold', style: 'BOLD', icon: 'bold' },
          { label: 'Italic', style: 'ITALIC', icon: 'italic' },
          { label: 'Underline', style: 'UNDERLINE', icon: 'underline' },
          { label: 'Monospace', style: 'CODE', icon: 'code' }].map((type) => (
            <Button
              active={currentStyle.has(type.style)}
              key={type.label}
              onClick={handleClickInlineStyle(type.style)}
              theme={theme}
            >
              {type.icon}
            </Button>
        ))}
      </div>
      <div className="divider" />
      <div
        role="presentation"
        onClick={focus}
        className="text-container"
      >
        <Editor
          onTab={handleTab}
          onFocus={handleChangeFocus(true)}
          onBlur={handleChangeFocus(false)}
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleOnChange}
          ref={editorRef}
          spellCheck
        />
      </div>
    </div>
  );
};

export default TextEditor;
