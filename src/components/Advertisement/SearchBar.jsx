import React, { useState } from "react";
import { Input, Select, Button } from "antd";

const { Option } = Select;

const SearchBar = ({ categories, onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue, selectedCategory);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="search-bar">
      <Input
        placeholder="Tìm kiếm quảng cáo..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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
      <Button
        type="primary"
        onClick={handleSearch}
        style={{ marginLeft: "10px" }}
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchBar;
