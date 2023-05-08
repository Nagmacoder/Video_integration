import React, { useState } from "react";

const Crud = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      setListData(
        listData.map((items, i) => {
          if (i == id) {
            return (items = activity);
          }
        })
      );
    } else {
      setListData((listData) => {
        const updatedList = [...listData, activity];
        console.log(updatedList);
        setActivity("");
        return updatedList;
      });
    }
  };

  const handleDelete = (i) => {
    const updatedListData = listData.filter((item, id) => {
      return i != id;
    });
    setListData(updatedListData);
  };

  const handleEdit = (i) => {
    setEdit(true);
    setId(i);
    listData.filter((item, id) => {
      if (i == id) {
        setActivity(item);
      }
    });
  };

  return (
    <div>
      <h1>hii</h1>

      <input
        type="text"
        onChange={(e) => setActivity(e.target.value)}
        value={activity}
      ></input>
      <button onClick={handleSubmit}> Submit</button>

      <div>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <div key={i}>
                  {data}
                  <button
                    onClick={() => {
                      handleDelete(i);
                    }}
                  >
                    Delete{" "}
                  </button>
                  <button
                    onClick={() => {
                      handleEdit(i);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Crud;
