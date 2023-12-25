
function Done({ note }: { note: any }): JSX.Element {
  return (
    <div className="w-full flex flex-row gap-5 bg-gray-800 p-4 rounded-3xl my-3 justify-between">
      <div className="mainPart">
        <div className="flex justify-between">
          <div className='line-through'>
            <span >{`(${note.priority}) `}</span>
            <span>{note.title}</span>
          </div>
          <div>
            <h1>{note.date}</h1>
          </div>
        </div>
        <br />
        <div className="content">
          <h1 className="text-start line-through">
            {note.content}
          </h1>
        </div>
      </div>

      <div className="editPart flex flex-col justify-between">
        <div className="checkbox">
          <input type="checkbox" checked={note.completed}/>
        </div>
        <div className="editDelete">
          <h1>✏️</h1>
          <h1>🗑️</h1>
        </div>
      </div>
    </div>
  );
}

export default Done;
