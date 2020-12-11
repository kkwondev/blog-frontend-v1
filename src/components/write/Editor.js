import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ImageUploader from "quill-image-uploader";

// #2 register module
Quill.register("modules/imageUploader", ImageUploader);

const EditorBlock = styled(Responsive)`
  padding-top:5rem;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 10px;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::placeholder {
    padding: 10px;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ title, body, onChangeField }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 입력하세요...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
        imageUploader: {
            upload: file => {
              return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("image", file);
      
                fetch(
                  "https://api.imgbb.com/1/upload?key=021959194cca8cb25c56e5f74a99fac3",
                  {
                    method: "POST",
                    body: formData
                  }
                )
                  .then(response => response.json())
                  .then(result => {
                    console.log(result);
                    resolve(result.data.url);
                  })
                  .catch(error => {
                    reject("Upload failed");
                    console.error("Error:", error);
                  });
              });
            }
          }
      },
    });
    // 텍스트 체인지 이벤트 핸들러 등록
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);




  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement}/>
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
