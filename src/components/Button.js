import "./Button.css";

export default function Button({ onClick, children, icon, style, type }) {
  return (
    <button type={type} onClick={onClick} className="btn" style={style}>
      {children} {icon}
    </button>
  );
}
