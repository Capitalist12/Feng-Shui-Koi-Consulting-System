import React, { useState } from 'react'
import { IosPickerItem } from './EmblaCarouselIosPickerItem'

const DOBCarousel = (props) => {
  const { loop, setSelectedDay, setSelectedMonth, setSelectedYear, beginYear, countYear } = props;

  // Hàm cập nhật giá trị ngày, tháng, năm khi cuộn
  const handleDaySelected = (selectedIndex) => {
    setSelectedDay(selectedIndex + 1) // Cập nhật state ngày, chỉ số bắt đầu từ 0 nên cần +1
  }

  const handleMonthSelected = (selectedIndex) => {
    setSelectedMonth(selectedIndex + 1) // Cập nhật state tháng, chỉ số bắt đầu từ 0 nên cần +1
  }

  const handleYearSelected = (selectedIndex) => {
    setSelectedYear(beginYear + selectedIndex) // Cập nhật state năm
  }

  return (
    <div className="embla">
      <IosPickerItem
        slideCount={31}  // Số ngày
        perspective="left"
        loop={loop}
        label="Ngày"
        onSelected={handleDaySelected}  // Truyền callback để cập nhật ngày
      />
      <IosPickerItem
        slideCount={12}  // Số tháng
        perspective="left"
        loop={loop}
        label="Tháng"
        onSelected={handleMonthSelected}  // Truyền callback để cập nhật tháng
      />
      <IosPickerItem
        slideCount={countYear}  // Số năm
        perspective="right"
        loop={loop}
        label="Năm"
        startYear={beginYear}  // Truyền năm bắt đầu
        onSelected={handleYearSelected}  // Truyền callback để cập nhật năm
      />

    </div>
  )
}

export default DOBCarousel;
