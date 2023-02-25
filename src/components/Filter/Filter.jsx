const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Filter
      <input type="name" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
