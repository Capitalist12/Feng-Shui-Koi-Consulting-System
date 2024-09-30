import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, message, Upload } from 'antd';

const MAX_COUNT = 5;
const MAX_SIZE = 10 * 1024 * 1024;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => { reject(error.title) };
    });

const UploadImage = ({ value = [], onChange }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = ({ fileList: newFileList }) => {
        // console.log(">>> check list: ", newFileList)
        onChange?.(newFileList.filter(file => file.size <= MAX_SIZE)); // Use `onChange` to update form state
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const handleImageSize = (file) => {
        return new Promise((resolve, reject) => {
            if (file.size > MAX_SIZE) {
                reject(`${file.name} size too big!`);
                message.error(`${file.name} kích thước quá lớn!`);
            } else {
                resolve("Successfully!");
                message.success("Thành công!");
            }
        })
    }

    return (
        <>
            <Upload
                // action="https://66e7ed93b17821a9d9da9375.mockapi.io/koi"
                beforeUpload={handleImageSize}
                listType="picture-card"
                fileList={value} // Bind to form's `value`
                onPreview={handlePreview}
                onChange={handleChange}
                maxCount={MAX_COUNT}
                multiple
                accept="image/png, image/jpeg"
            >
                {value.length >= MAX_COUNT ? null : uploadButton}
            </Upload>

            {previewImage && (
                <Image
                    error
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
            <span style={{ color: value.length === MAX_COUNT ? 'red' : 'black' }}>
                {value.length} / {MAX_COUNT}
            </span>
        </>
    );
};

export default UploadImage;
