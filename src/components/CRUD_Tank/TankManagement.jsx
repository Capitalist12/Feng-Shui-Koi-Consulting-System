import { Button, Typography } from "antd";
import api from "../../config/axiosConfig";
import { toast } from "react-toastify";
import TankTable from "./TankTable";
import TankForm from "./TankForm";
import uploadFile from "../../utils/file";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { Title } = Typography;
function TankManagement() {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTank, setSelectedTank] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get("tank");
      setDatas(response.data?.result || []);
    } catch (err) {
      toast.error(err.response?.data || "Lấy dữ liệu thất bại");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (tankId) => {
    try {
      await api.delete(`tank/${tankId}`);
      toast.success("Xóa hồ thành công");
      fetchData();
    } catch (err) {
      toast.error(err.response?.data || "Xóa hồ thất bại");
    }
  };

  const handleEdit = (tank) => {
    setSelectedTank(tank);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedTank(null);
    setShowModal(true);
  };

  const handleSubmit = async (values, fileList) => {
    try {
      setLoading(true);

      if (fileList.length > 0 && fileList[0].originFileObj) {
        const file = fileList[0].originFileObj;
        values.imageURL = await uploadFile(file);
      } else if (selectedTank && selectedTank.imageURL) {
        values.imageURL = selectedTank.imageURL;
      } else {
        values.imageURL = "";
      }

      const payload = {
        shape: values.shape,
        element: values.elementName,
        imageURL: values.imageURL || "",
      };

      if (values.tankId) {
        await api.put(`tank/${values.tankId}`, payload);
      } else {
        await api.post("tank", payload);
      }

      toast.success("Lưu thông tin thành công");
      fetchData();
      setShowModal(false);
    } catch (err) {
      toast.error(err.response?.data || "Lưu thông tin thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "2rem",
        }}
      >
        <Button
          style={{ fontSize: "1.2rem", padding: "1.2rem" }}
          className="custom-button-black-white"
          type="primary"
          onClick={handleAddNew}
        >
          + Thêm
        </Button>
      </div>
      <TankTable
        datas={datas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <TankForm
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        selectedTank={selectedTank}
        loading={loading}
      />
    </div>
  );
}

export default TankManagement;
