import React, { useEffect, useState } from "react";

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [Showfinished, setShowfinished] = useState(true)
  // Save todos to local storage whenever they change
 useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
 const  SavetoLS = () => {
   localStorage.setItem("todos",JSON.stringify(todos))
 }
 

 

  function HandleSave() {
    setTodos([...todos, { id: Math.random(), todo, isCompeleted: false }]);
    setTodo("");
    SavetoLS()
  }

  function HandleEdit(e) {
    const id = Number(e.target.name);
    const t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    setTodos(todos.filter((item) => item.id !== id));
  }

  function HandleDelete(e) {
    const id = Number(e.target.name);
    setTodos(todos.filter((item) => item.id !== id));
    SavetoLS()
  }

  function HandleChange(e) {
    setTodo(e.target.value);
  }

  function HandleCheck(e) {
    const id = Number(e.target.name);
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompeleted: !item.isCompeleted } : item
      )
    );
    SavetoLS()
  }

  function HandleShowFinished(e) {
    setShowfinished(!Showfinished)
  }

  return (
    <>
      <div className="MainContainer p-5 min-h-11/12 w-[98vw] flex justify-center items-center">
        <div className="h-full bg-purple-200 md:min-w-1/2 min-w-full rounded-2xl">
          <div className="head p-7 flex justify-center text-3xl font-bold">
            <h1>iTask- Manage Your Todos at one Place</h1>
          </div>
          <div className="text-2xl p-3 font-bold">
            <h1>Add a Todo</h1>
          </div>
          <div className="flex p-1 gap-2 items-center justify-around">
            <div className="form bg-white w-[87%]  rounded-3xl">
              <input
                type="text"
                value={todo}
                onChange={HandleChange}
                name="Todo"
                placeholder="Enter Name Of Todo"
                className="text-black outline-0 p-3 font-bold"
              />
            </div>
            <div className="btn">
              <button
                className="bg-purple-500 hover:bg-purple-900 rounded-4xl text-white font-bold w-[5rem] p-2.5 cursor-pointer"
                onClick={HandleSave}
              >
                Save
              </button>
            </div>
          </div>
          <div className="check p-4">
            <input
              type="checkbox"
              className="mx-2" onChange={HandleShowFinished}
              checked={Showfinished}
            />
            Show Finished
          </div>
          <div className="flex justify-center">
            <hr className="h-[4px] w-[80%]" style={{ color: "gray" }} />
          </div>
          <div>
            <div className="font-bold text-2xl p-4">
              <h1>Your Todos</h1>
            </div>
            <div className="todos px-4 space-y-2">
              {todos.length === 0 ? (
                <div className="font-bold text-5xl md:text-7xl text-center p-10">
                  No Todos
                </div>
              ) : null}
              { 
                todos.map((items) => { 
                  return (Showfinished || !items.isCompeleted) && <div
                    key={items.id}
                    className="todo flex gap-3 justify-between items-center"
                  >
                    <input
                      type="checkbox"
                      name={items.id}
                      checked={items.isCompeleted}
                      onChange={HandleCheck}
                    />
                    <div className={items.isCompeleted ? "line-through" : ""}>
                      {items.todo}
                    </div>
                    <div className="buttons flex flex-row gap-2">
                      <button
                        className="bg-purple-500 rounded-4xl hover:bg-purple-900 text-white font-bold w-[3rem] p-2 cursor-pointer"
                        onClick={HandleEdit}
                        name={items.id}
                      >
                        E
                      </button>
                      <button
                        className="bg-purple-500 rounded-4xl hover:bg-purple-900 text-white font-bold w-[3rem] p-2 cursor-pointer"
                        onClick={HandleDelete}
                        name={items.id}
                      >
                        D
                      </button>
                    </div>
                  </div>
})
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
