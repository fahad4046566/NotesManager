import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const NotesCard = ({ notes, setnotes, value , setupdate}) => {
  const filtered = notes.filter((elem) =>
    elem.category.toLowerCase().includes(value.toLowerCase()),
  );

  const deleteItem = (id) => {
    setnotes((prev) => prev.filter((item) => item.id !== id));
  };
  const updateItem = (notes) => {
    setupdate(notes)
     document.getElementById('notes-form')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
  }
  
  return (
    <>
      <h1 className="text-gray-800 text-2xl font-bold text-center mt-8">Your Recent Notes</h1>
      <div>
        {notes.length === 0 ? (
          <h1 className="text-gray-600 text-xl text-center p-10">
            No notes yet. Create your first note
          </h1>
        ) : filtered.length === 0 ? (
          <h1 className="text-gray-600 text-xl text-center p-10">
            No notes found for "{value}".
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 w-fit gap-6 bg-[#F0F2F5] lg:grid-cols-4 md:gap-6 md:p-4 p-1">
            
            {filtered.map((item) => (
              <div className="flex gap-5" key={item.id}>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <div className="card-body ">
                    <div className="flex gap-2 items-center">
                      <h2 className="card-title">Title :</h2>
                      <div className="badge badge-dash badge-primary">
                        {item.title}
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span>
                        <h2 className="card-title">Cartegory :</h2>
                      </span>
                      <div className="badge badge-primary">{item.category}</div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span>
                        <h2 className="card-title">Date :</h2>
                      </span>
                      <div className="text-base-content/70">{item.date} </div>
                    </div>

                    <div className="flex-col gap-2 items-center">
                      <h2 className="card-title">Description :</h2>
                      <div className="h-20 w-70">
                        <p className="font-semibold">{item.details}</p>
                      </div>
                    </div>
                  </div>

                  <div className="buttons flex gap-3 pl-6 pb-4">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="btn btn-secondary bg-red-800"
                    >
                      <RiDeleteBin7Fill className="text-xl text-red-400" />{" "}
                      Delete
                    </button>
                    <button onClick={()=> updateItem(item)} className="btn btn-primary bg-blue-600">
                      <MdEdit className="text-xl text-blue-400" /> Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NotesCard;
