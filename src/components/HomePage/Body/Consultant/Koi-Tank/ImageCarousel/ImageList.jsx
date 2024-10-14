import React, { useEffect } from 'react';
import {
    DownloadOutlined,
    LeftOutlined,
    RightOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    SwapOutlined,
    UndoOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import { customePreview } from "../../../../../../javaScript/HomePageScript.js";

const ImageList = ({ images }) => {
    const [current, setCurrent] = React.useState(0);
    const imageList = images;

    useEffect(() => {
        customePreview();
    },[]);

    const onDownload = () => {
        const url = imageList[current];
        const suffix = url.slice(url.lastIndexOf('.'));
        const filename = Date.now() + suffix;
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobUrl = URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(blobUrl);
                link.remove();
            });
    };
    return (
        <Image.PreviewGroup
            preview={{
                toolbarRender: (
                    _,
                    {
                        transform: { scale },
                        actions: {
                            onActive,
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                            onReset,
                        },
                    },
                ) => (
                    <Space size={12} className="toolbar-wrapper">
                        <LeftOutlined onClick={() => onActive?.(-1)} />
                        <RightOutlined onClick={() => onActive?.(1)} />
                        <DownloadOutlined onClick={onDownload} />
                        <SwapOutlined rotate={90} onClick={onFlipY} />
                        <SwapOutlined onClick={onFlipX} />
                        <RotateLeftOutlined onClick={onRotateLeft} />
                        <RotateRightOutlined onClick={onRotateRight} />
                        <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                        <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                        <UndoOutlined onClick={onReset} />
                    </Space>
                ),
                onChange: (index) => {
                    setCurrent(index);
                },
            }}
        >
            {imageList
                .filter((item, index) => index > 0)
                .map((item) => (
                    <Image
                        key={item.koiImageId}
                        src={item.imageURL}
                    />
                ))}
        </Image.PreviewGroup>
    );
};
export default ImageList;