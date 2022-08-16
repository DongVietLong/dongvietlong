export default function ButtonIncrement({ increment, count }) {
  return (
    <div className="card">
      <button onClick={() => increment({ name: "truong", count: count + 1 })}>
        increment
      </button>
    </div>
  );
}
