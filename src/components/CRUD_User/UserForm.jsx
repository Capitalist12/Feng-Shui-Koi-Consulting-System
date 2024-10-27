// import { Form, Input, Row, Col, Select, DatePicker, Switch } from "antd";
// import MultiSelectElement from "../CRUD_KoiFish/CreateKoiForm/MultiSelectElement";
// import UploadAvatar from "./UploadAvatar";
// import { ROLE_OPTIONS, USER_ELEMENT_COUNT } from "../../utils/constant";

// const UserForm = ({
//   form,
//   fileList,
//   setFileList,
//   editingUserId,
//   selectedElement,
//   setSelectedElement,
//   handleSubmit,
// }) => {
//   return (
//     <Form
//       form={form}
//       labelCol={{ span: 24 }}
//       wrapperCol={{ span: 24 }}
//       onFinish={handleSubmit}
//     >
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item
//             name="username"
//             label="Username"
//             rules={[{ required: true, message: "Hãy nhập username!" }]}
//           >
//             <Input disabled={editingUserId !== null} />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               { type: "email", message: "Hãy nhập email hợp lệ!" },
//               { required: true, message: "Hãy nhập email!" },
//             ]}
//           >
//             <Input disabled={editingUserId !== null} />
//           </Form.Item>
//         </Col>
//       </Row>

//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item label="Avatar" name="imageLink">
//             <UploadAvatar value={fileList} onChange={setFileList} />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item
//             name="dateOfBirth"
//             label="DOB"
//             rules={[{ required: true, message: "Nhập ngày tháng năm sinh!" }]}
//           >
//             <DatePicker
//               style={{ width: "100%" }}
//               disabled={editingUserId !== null}
//             />
//           </Form.Item>
//         </Col>
//       </Row>

//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item
//             name="roleName"
//             label="Vai trò"
//             initialValue="USER"
//             rules={[{ required: true, message: "Hãy chọn vai trò!" }]}
//           >
//             <Select
//               options={ROLE_OPTIONS}
//               placeholder="Chọn vai trò"
//               disabled={editingUserId === null}
//             />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item
//             name="element"
//             label="Element"
//             rules={[{ required: true, message: "Hãy chọn Element!" }]}
//           >
//             <MultiSelectElement
//               data={selectedElement}
//               onChange={setSelectedElement}
//               customeStyle={{ width: "100%" }}
//               maxCount={USER_ELEMENT_COUNT}
//             />
//           </Form.Item>
//         </Col>
//       </Row>

//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item
//             name="deleteStatus"
//             label="Delete Status"
//             valuePropName="checked"
//           >
//             <Switch />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item
//             label="Hình ảnh:"
//             name="imageURL"
//             rules={[{ required: true, message: "Vui lòng chọn 1 hình!" }]}
//           >
//             <UploadAvatar />
//           </Form.Item>
//         </Col>
//       </Row>

//       {!editingUserId && (
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true, message: "Hãy nhập mật khẩu!" }]}
//             >
//               <Input.Password />
//             </Form.Item>
//           </Col>
//         </Row>
//       )}
//     </Form>
//   );
// };

// export default UserForm;
