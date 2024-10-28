import React, { useState } from "react";
import DOBCarousel from "./DOBCarousel/DOBCarousel";
import { Form } from "antd";
import { IoSearch } from "react-icons/io5";
import { calculateElement } from "../../../../services/consultingAPIService";
import '../../../../styles/homepage/body/InputDOB/DOBCarousel/embla.scss';
import '../../../../styles/homepage/body/InputDOB/InputDOBForm.scss';
import '../../../../styles/homepage/body/InputDOB/DOBCarousel/base.css';

const START_YEAR = 1950
const END_YEAR = 2025
const YEAR_COUNT = END_YEAR - START_YEAR + 1

const InputDOBForm = ({setdata}) => {
    const [selectedDay, setSelectedDay] = useState(1)
    const [selectedMonth, setSelectedMonth] = useState(1)
    const [selectedYear, setSelectedYear] = useState(START_YEAR)

    const onSubmit = async () => {
        const formatDate = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
        const formatMonth = selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;
        
        const dateOfBirth = `${selectedYear}-${formatMonth}-${formatDate}`;
        const response = await calculateElement({
            dob: dateOfBirth
        });

        response.status === 200 && response.data.code === 1000 && setdata({
            dob: dateOfBirth,
            element: response.data.result
        })

    }

    return (
        <Form id="input-dob-form" onFinish={() => onSubmit()}>
            <label htmlFor="yearOfBirth" style={{ color: 'white' }}>Nhập năm sinh của bạn</label>
            <Form.Item name='yearOfBirth' className="input-dob-scroll theme-dark">
                <DOBCarousel
                    loop={true}
                    setSelectedDay={setSelectedDay}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedYear={setSelectedYear}
                    beginYear={START_YEAR}
                    countYear={YEAR_COUNT}
                />
            </Form.Item>
            <Form.Item className="intput-dob-submit-btn">
                <button className='inspec-btn' type="submit"> <IoSearch /> &nbsp; Tra cứu</button>
            </Form.Item>
        </Form>
    );
};

export default InputDOBForm;