import { useState, useEffect } from "react";

const NotesForm = ({ setnotes, notes, update, setupdate }) => {
  const [formData, setformData] = useState({
    title: "",
    category: "",
    date: "",
    details: "",
  });
  useEffect(() => {
    if (update) {
      setformData({
        title: update.title,
        category: update.category,
        date: update.date,
        details: update.details,
      });
    }
  }, [update]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title.trim() ||
      !formData.details.trim() ||
      !formData.category.trim() ||
      !formData.date.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (update) {
      const updated = {
        id: update.id,
        ...formData,
      };
      setnotes((prev) =>
        prev.map((exp) => (exp.id === update.id ? updated : exp)),
      );
      setupdate(null);
    } else {
      const newNote = {
        id: crypto.randomUUID(),
        ...formData,
      };
      setnotes((prev) => [...prev, newNote]);
    }

    setformData({
      title: "",
      category: "",
      date: "",
      details: "",
    });
  };

  return (
    <div className="flex justify-center">
      <form id="notes-form" onSubmit={handleSubmit}>
        <div className="flex-col md:w-100 p-10 bg-white rounded-2xl shadow-2xl mt-10">
          <div className="text-gray-800 font-bold text-2xl"><h1>Enter Your Notes</h1></div>
          <div className="for title cateogory and date">
            <div className="tile flex-col m-1">
              <div><label className="text-gray-700  text-sm">Title</label></div>
              <div><input
                type="text"
                placeholder="Title"
                className="input"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div></div>
            <div className="category flex-col m-1">
                <div><label className="text-gray-700  text-sm">Category</label></div>
              <div><input
                type="text"
                placeholder="Choose or type category..."
                className="input"
                name="category"
                list="category-list"
                value={formData.category}
                onChange={handleChange}
              />
              <datalist id="category-list">
                <option value="Personal" />
                <option value="Work" />
                <option value="Ideas" />
                <option value="Urgent" />
              </datalist>
          </div></div>

            <div className="date flex-col m-1">
                <div><label className="text-gray-700  text-sm">Date</label></div>
              <div><input
                type="date"
                className="input"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div></div>
          <div className="for detail and button">
            <div className="details flex-col m-1">
                <div><label className="text-gray-700  text-sm">Note</label></div>
              <div><textarea
                className="textarea h-24"
                placeholder="Write Your Note Here"
                name="details"
                value={formData.details}
                onChange={handleChange}
              ></textarea></div>
            </div>
            <div className="button m-1">
              <button type="submit" className=" px-12 btn btn-primary mt-4 w-full">
                {update ? "Update Note" : "Save Note"}
              </button>
              {update && (
                <button
                  className="hover:cursor-pointer text-yellow-600 underline ml-4"
                  type="button"
                  onClick={() => {
                    setupdate(null);
                    setformData({
                      title: "",
                      category: "",
                      date: "",
                      details: "",
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NotesForm;
