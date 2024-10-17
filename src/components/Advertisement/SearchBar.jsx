import React, { useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const SearchBar = ({ categories, onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (value) => {
    onSearch(value, selectedCategory);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="search-bar">
      <Input.Search
        placeholder="Tìm kiếm quảng cáo..."
        onSearch={handleSearch}
        enterButton
        style={{ width: 400 }}
      />
      <Select
        placeholder="Chọn danh mục"
        style={{ width: 200, marginLeft: "10px" }}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <Option key={category.categoryID} value={category.categoryID}>
            {category.categoryName}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SearchBar;
