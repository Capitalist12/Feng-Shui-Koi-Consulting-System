import React, { useState } from "react";
import DOBCarousel from "./DOBCarousel/DOBCarousel";
import { Form } from "antd";
import { IoSearch } from "react-icons/io5";
import '../../../styles/emblaCarousel/DOBScroll/embla.css';
import '../../../styles/homepage/InputDOBForm.scss';
import { calculateElement } from "../../../services/consultingAPIService";

const START_YEAR = 1950
const END_YEAR = 2025
const YEAR_COUNT = END_YEAR - START_YEAR + 1

const InputDOBForm = () => {
    const [selectedDay, setSelectedDay] = useState(1)
    const [selectedMonth, setSelectedMonth] = useState(1)
    const [selectedYear, setSelectedYear] = useState(START_YEAR)

    const onSubmit = async () => {
        const formatDate = selectedDay < 10 ? `0${selectedDay}` : selectedDay;
        const dateOfBirth = `${selectedYear}-${selectedMonth}-${formatDate}`;
        console.log(selectedDay + "/" + selectedMonth + "/" + selectedYear)
        const response = await calculateElement({
            dob: dateOfBirth
        });

        console.log(response);
    }

    return (
        <Form id="input-dob-form" onFinish={() => onSubmit()}>
            <label htmlFor="yearOfBirth" style={{ color: 'white' }}>Nhập năm sinh của bạn</label>
            <Form.Item name='yearOfBirth' className="input-dob-scroll">
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