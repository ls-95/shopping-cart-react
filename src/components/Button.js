import "./Button.css";

export default function Button({ onClick, children, icon }) {
  return (
    <button onClick={onClick} className="btn">
      {children} {icon}
    </button>
  );
}
