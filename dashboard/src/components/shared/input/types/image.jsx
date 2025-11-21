// import * as FilePond from 'filepond';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useEffect, useRef } from 'react';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageFilter from 'filepond-plugin-image-filter';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import '../css/image.css';

registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImageCrop,
    FilePondPluginImageFilter,
    FilePondPluginImageEdit
);

function imageType({ value, info, formDatas, setFormDatas }) {
    const InputFile = useRef(null);

    const sendFilesForFormData = () => {
        let files = InputFile.current.getFiles();
        let filesNow = info.multiple ? files : files[0].file ? files[0].file : null;
        let nowState = formDatas;
        nowState[info.field] = filesNow;
        if (formDatas !== nowState) {
            setFormDatas(nowState)
        }

    }

    return (
        <>
            <FilePond
                ref={InputFile}
                labelIdle={'فاکتور خود را ارسال کنید'}
                storeAsFile={true}
                oninit={() => {
                    let filepond = InputFile.current;
                    filepond.addFiles([value.url])
                }}
                onupdatefiles={() => { sendFilesForFormData() }}
                onreorderfiles={() => { sendFilesForFormData() }}
                allowFileTypeValidation={true}
                acceptedFileTypes={['image/*']}
                name={info.field}
                className={info.multiple ? "" : "single"}
                allowMultiple={info.multiple}
                allowReorder={true}
            />
        </>
    );
}

export default imageType;