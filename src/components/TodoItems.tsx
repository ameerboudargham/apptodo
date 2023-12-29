import React from 'react'
import Todo from './Todo'
import Done from './Do'
import { useTodoStore } from '../store/Todo'
function TodoItems({ notes, done }: { notes: any[], done: any[] }) {
  const { sortTodosAsc, sortTodosDesc, sortDoAsc, sortDoDesc } = useTodoStore()
  function handleSortAsc() {
    sortTodosAsc()
  }
  function handleSortDesc() {
    sortTodosDesc()
  }
  return (
    <div className='container'>
      <div className=' flex gap-96'>

        <div>
          <div className='flex items-center gap-5' >
            <h1 className='text-3xl'>Todo items -</h1>
            <div className='flex flex-col'>
              <span className='text-red-600 up text-3xl cursor-pointer' onClick={handleSortAsc}>▲</span>
              <span className='text-red-600 down text-3xl cursor-pointer' onClick={handleSortDesc}>▼</span>
            </div>
            <span className='text-3xl'>🕒</span>
          </div>
          </div>
          <div>
            <div className='flex items-center gap-5' >
              <h1 className='text-3xl'>Todo items -</h1>
              <div className='flex flex-col'>
                <span className='text-red-600 up text-3xl cursor-pointer' onClick={() => sortDoAsc}>▲</span>
                <span className='text-red-600 down text-3xl cursor-pointer' onClick={() => sortDoDesc}>▼</span>
              </div>
              <span className='text-3xl'>🕒</span>
            
          </div>
        </div>
      </div>

      <div className='flex flex-row gap-5'>
        <div className='w-full'>
          {notes.map((note: any) => (
            <Todo key={note.id} note={note} />
          ))}
        </div>
        <div className='w-full'>

          {done.map((note: any) => (
            // @ts-ignore
            <Done key={`done-${note.id}`} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoItems