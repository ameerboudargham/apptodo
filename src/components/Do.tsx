import React from 'react';
import { useTodoStore } from '../store/Todo';

function Done({ note }: { note: any }): JSX.Element {
  const { toggleTodoStatus, deleteTodo, editTodo } = useTodoStore();
  function handleDelete() {
    deleteTodo(note.id);
  }
  return (
    <div className="w-full flex flex-row gap-5 bg-gray-700 p-4 rounded-3xl my-3 justify-between">
      
      <div className="mainPart">
        
        <div className="flex w-96 justify-between">
          <div className='line-through'>
            
            <span >{`(${note.priority}) `}</span>
            <span>{note.title}</span>
          </div>
          <div>
            <h1>{note.date}</h1>
          </div>
        </div>
       
        <div className="content">
          <h1 className="text-start line-through mt-2">
            {note.content}
          </h1>
        </div>
      </div>

      <div className="editPart flex flex-col justify-between">
        <div className="checkbox">
          {/* @ts-ignore */}
          <input type="checkbox" checked='true'/>
        </div>
        <div className="editDelete">
          <h1>✏️</h1>
          <h1
                className="cursor-pointer"
                // @ts-ignore
                onClick={() => handleDelete(note.id)}
              >
                🗑️
              </h1>
        </div>
      </div>
    </div>
  );
}

export default Done;