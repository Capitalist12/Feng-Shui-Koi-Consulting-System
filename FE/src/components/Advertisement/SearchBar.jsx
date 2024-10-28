import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import "../../styles/Advertisement.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = ({ onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue, selectedCategory);
  };

  return (
    <div>
      <Input
        prefix={<FaMagnifyingGlass />}
        placeholder="Tìm kiếm quảng cáo..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: "13rem" }}
      />
      <Button onClick={handleSearch} className="custom-search-button">
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchBar;
