import React, { useState } from 'react'
import { IosPickerItem } from './EmblaCarouselIosPickerItem'

const DOBCarousel = (props) => {
  const { loop, setSelectedDay, setSelectedMonth, setSelectedYear, beginYear, countYear } = props;

  // Hàm cập nhật giá trị ngày, tháng, năm khi cuộn
  const handleDaySelected = (selectedIndex) => {
    setSelectedDay(selectedIndex + 1) 
  }

  const handleMonthSelected = (selectedIndex) => {
    setSelectedMonth(selectedIndex + 1) 
  }

  const handleYearSelected = (selectedIndex) => {
    setSelectedYear(beginYear + selectedIndex) 
  }

  return (
    <div className="embla">
      <IosPickerItem
        slideCount={31}  
        perspective="left"
        loop={loop}
        label="Ngày"
        onSelected={handleDaySelected}  // Truyền callback để cập nhật ngày
      />
      <IosPickerItem
        slideCount={12}  
        perspective="left"
        loop={loop}
        label="Tháng"
        onSelected={handleMonthSelected}  // Truyền callback để cập nhật tháng
      />
      <IosPickerItem
        slideCount={countYear} 
        perspective="right"
        loop={loop}
        label="Năm"
        startYear={beginYear} 
        onSelected={handleYearSelected}  // Truyền callback để cập nhật năm
      />

    </div>
  )
}

export default DOBCarousel;
