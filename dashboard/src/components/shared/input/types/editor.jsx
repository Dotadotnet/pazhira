import React, { useState } from 'react'
import ModalPortal from "@/components/shared/modal/ModalPortal";
import Modal from "@/components/shared/modal/Modal";
import TextEditor from "@/components/shared/textEditor/TextEditor";
import Apply from "@/components/icons/Apply";

export default function editorType({ value, info }) {
  const [editorData, setEditorData] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const stripHtmlTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  };
  return (

    <div className="flex justify-center items-center">

      <div className='inline w-full'>
        <br />
        <div className='flex justify-center items-center'>
          <div className='w-1/2'>
            <h1 className=' text-2xl relative pr-8  text-right text-gray-950  dark:text-white ' >
              {info.name} :
            </h1>
            <textarea
              value={stripHtmlTags(editorData)}
              placeholder="برای ویرایش کلیک کنید..."
              name={info.field}
              readOnly
              rows={24}
              onClick={() => setIsOpen(true)}
              className="h-40 cursor-pointer p-2 w-full border mt-5 border-gray-300 rounded dark:bg-gray-700 text-justify dark:text-white "
            />
          </div>
        </div>
        <ModalPortal>
          <Modal
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            className=" md:!w-2/3 !w-full h-full relative !p-1 !mx-0 !rounded-none"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="fixed apply-button bg-red-600 bottom-4 right-4 md:right-8 md:bottom-8 z-50    n-600 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <Apply className="!w-10 !h-10" />
            </button>
            <TextEditor
              value={editorData}
              onChange={(value) => {
                setEditorData(value);
              }}
            />
          </Modal>
        </ModalPortal>
      </div>
    </div>)
}
