import { Select, Space } from 'antd';
import TagRender from './TagRender';
import { DownOutlined } from '@ant-design/icons';
import { OPTIONS } from '../../../utils/constant';
import { useEffect, useState } from 'react';


const MultiSelectElement = ({ onChange, data, customeStyle, maxCount }) => {
    const [elements, setElements] = useState(data ? data : []);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(elements)) {
      // so sánh sự khác biệt giữa data và elements tránh vòng lặp vô hạn
      setElements(data);
    }
  }, [data]);

    const suffix = (
        <>
            <span style={{ color: elements.length === maxCount ? 'red' : '#222222' }}>
                {elements.length} / {maxCount}
            </span>
            <DownOutlined />
        </>
    );


    return (
        <Select
            maxCount={maxCount}
            mode="multiple"
            value={elements}
            onChange={(newValue) => {
                setElements(newValue); // Cập nhật state của component con
                onChange(newValue); // Cập nhật state của component cha
            }}
            placeholder="Chọn mệnh"
            style={customeStyle}
            tagRender={(props) => <TagRender {...props} options={OPTIONS} />} // Use the existing TagRender component
            suffixIcon={suffix}
            options={OPTIONS.map((option) => ({
                label: (
                    <Space
                        style={{
                            fontWeight: 'bold',
                            width: '87%',
                        }}
                    >
                        <span role="img" aria-label={option.label}>
                            {option.emoji}
                        </span>
                        <span>{option.desc}</span>

                    </Space>
                ),
                value: option.value,
            }))}
        />
    );
};

export default MultiSelectElement;
