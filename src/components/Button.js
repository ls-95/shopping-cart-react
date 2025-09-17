import "./Button.css";

export default function Button({ onClick, children, icon, style }) {
  return (
    <button onClick={onClick} className="btn" style={style}>
      {children} {icon}
    </button>
  );
}
