import React from 'react';
import { Select, Space } from 'antd';
import TagRender from './TagRender';
import { DownOutlined } from '@ant-design/icons';
import { OPTIONS } from '../../utils/constant';

const MAX_COUNT = 2;


const MultiSelectElement = ({ value = [], onChange }) => {
    

    const suffix = (
        <>
            <span style={{color: value.length === MAX_COUNT ? 'red' : '#222222'}}>
                {value.length} / {MAX_COUNT}
            </span>
            <DownOutlined />
        </>
    );


    return (
        <Select
            maxCount={MAX_COUNT}
            mode="multiple"
            value={value}
            onChange={onChange}
            placeholder="Chọn mệnh"
            style={{ width: '100%' }}
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
