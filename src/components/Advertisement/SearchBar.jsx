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
        style={{ width: "16rem" }}
      />
      <Button
        style={{ width: "5rem" }}
        onClick={handleSearch}
        className="custom-search-button"
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchBar;
