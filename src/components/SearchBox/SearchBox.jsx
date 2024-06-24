import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const searchId = useId();

  const searchInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.input}
        id={searchId}
        type="text"
        value={filterName}
        onChange={searchInput}
      />
    </div>
  );
};

export default SearchBox;
