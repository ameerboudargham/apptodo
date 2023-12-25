import { useTodoStore } from "../store/Todo";

function Todo({ note }: { note: any }) {
  const { toggleTodoStatus } = useTodoStore();

  function handleCheckboxChange() {
    toggleTodoStatus(note.id);
  }
  return (
    <div className="flex divWidth flex-row gap-5 bg-gray-800 p-4 rounded-3xl my-3 justify-between w-full">
      <div className="mainPart">
        <div className="w-80 flex justify-between">
          <div>
            <span>{`(${note.priority}) `}</span>
            <span>{note.title}</span>
          </div>
          <div>
            <h1>{note.date}</h1>
          </div>
        </div>
        <br />
        <div className="content">
          <h1 className="text-start wrap-text">
            {note.content}
          </h1>
        </div>
      </div>
      

      <div className="editPart flex flex-col justify-between">
        <div className="checkbox">
          <input
            type="checkbox"
            checked={note.completed}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="editDelete">
          <h1>✏️</h1>
          <h1>🗑️</h1>
        </div>
      </div>
    </div>
  );
}

export default Todo;
