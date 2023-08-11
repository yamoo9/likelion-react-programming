function FilterableList() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="todo"></label>
          <input 
          id="todo" 
          type="text" 
          placeholder="휴일에 할 일" 
          className="{`${styles.accent} accent}"
          />
          <button type="submit" className="accent">추가</button>
        </div>
      </form>
    </>
  );
}

export default FilterableList;
