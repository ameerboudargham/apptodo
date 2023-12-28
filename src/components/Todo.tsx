import React, { useState } from "react";
import { useTodoStore } from "../store/Todo";

function Todo({ note }: { note: any }) {
  const { toggleTodoStatus, deleteTodo, editTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const textColorClass = note.date ==="1 Days" ? 'text-red-500 text-2xl':'text-default'

  function handleDelete() {

    deleteTodo(note.id);
  }

  function handleCheckboxChange() {
    toggleTodoStatus(note.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSaveEdit() {
    editTodo(note.id, { content: editedContent });
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    // Optionally, reset the edited content to the original content
    setEditedContent(note.content);
  }

  

  return (
    <div className="flex divWidth flex-row gap-5 bg-gray-700 p-4 rounded-3xl my-3 justify-between w-full">
      <div className="mainPart">
        <div className="w-96 flex justify-between">
          <div>
            <span>{`(${note.priority}) `}</span>
            <span>{note.title}</span>
          </div>
          <div>
            <h1>{note.date}</h1>
          </div>
        </div>
       
        {isEditing ? (
          <div className="content whitespace-pre-wrap">
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full h-20 p-2"
            />
          </div>
        ) : (
          <div className="content whitespace-pre-wrap mt-2">
            <h1 className={`text-start whitespace-pre-wrap ${textColorClass}`}>{note.content}</h1>
          </div>
        )}
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
          {isEditing ? (
            <>
              <button className="mr-2" onClick={handleSaveEdit}>
                Save
              </button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <h1 onClick={handleEdit}>✏️</h1>
              <h1
                className="cursor-pointer"
                // @ts-ignore
                onClick={() => handleDelete(note.id)}
              >
                🗑️
              </h1>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Todo;