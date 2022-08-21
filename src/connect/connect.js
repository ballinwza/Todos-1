

export const updateData = (state, url, id) => {
  const requestOption = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  };
  getTodoListData(`${url}/${id}`, requestOption)
    .then((data) => {
      //console.log(data); 
    })
    .catch((err) => console.log(err.message));
};

export const deleteData = (url, id) => {
  const requestOption = {
    method: "DELETE",
  };
  getTodoListData(`${url}/${id}`, requestOption)
    .then(() => console.log("Todo was deleted"))
    .catch((err) => console.log(err.message));
};

export const addData = (url, state) => {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  };
  getTodoListData(url, requestOption)
    .then(()=>{
      console.log("Todo was added")
    })
    .catch(err=>console.log(err.message))
};

export const getTodoListData = async (url, option)=> {
  try{
    const res = await fetch(url, option);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(err)
  }
} 