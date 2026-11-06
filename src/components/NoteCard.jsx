import { useState } from 'react'

function NoteCard({ title, body }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h3 className="...">{title}</h3>
      {isOpen && <p className="...">{body}</p>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-3 cursor-pointer text-sm text-[#b83f45] hover:underline"
      >
        {isOpen ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard