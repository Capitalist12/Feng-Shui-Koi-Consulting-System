import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import "../../styles/Advertisement.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = ({ onSearch }) => {
  const selectedCategory = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue, selectedCategory);
  };

  return (
    <div className="search-bar">
      <Input
        prefix={<FaMagnifyingGlass />}
        placeholder="Tìm kiếm quảng cáo..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={handleSearch}
        style={{ width: "18rem" }}
      />
    </div>
  );
};

export default SearchBar;
