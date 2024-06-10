import "./styles.css";

  interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<String>>;
    handleAdd: ()=>void;
  };
 function InputField({todo, setTodo, handleAdd}: Props ) {
  return (
   <form className="input" onSubmit={handleAdd}>
    <input type="input"
      placeholder="Enter a task" 
      className="input__box"
      onChange={(e)=>setTodo(e.target.value)}
      />
    <button type="submit" className="input__submit">
        Go 
    </button>
   </form>
  )
}
export default InputField;
