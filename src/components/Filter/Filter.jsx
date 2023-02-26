import css from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Filter
      <input
        className={css.input}
        type="name"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
