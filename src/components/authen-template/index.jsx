import "../../styles/authen-template.scss";

// eslint-disable-next-line react/prop-types
function AuthenTemplate({ children }) {
  return (
    <div className="authen-template">
      <div className="authen-template__form">{children}</div>
    </div>
  );
}

export default AuthenTemplate;
