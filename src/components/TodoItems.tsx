import Todo from './Todo'
import Done from './Do'
function TodoItems({ notes , done}: { notes: any[], done:any[] }) {
  return (
    <div className='container'>
      <div className='flex items-center gap-5' >
        <h1 className='text-3xl'>Todo items -</h1> 
        <div className='flex flex-col'>
            <span className='text-red-600 up text-3xl'>▲</span>
            <span className='text-red-600 down text-3xl'>▼</span>
          </div>
          <span className='text-3xl'>🕒</span>
      </div>
      <div className='flex flex-row gap-5'>
        <div className='w-full'>
      {notes.map((note:any) => (
        <Todo key={note.id} note={note} />
      ))}
      </div>
      <div className='w-full'>
      {done.map((note:any) => (
        // @ts-ignore
        <Done key={`done-${note.id}`} note={note}/>
      ))}
      </div>
      </div>
    </div>
  )
}

export default TodoItems