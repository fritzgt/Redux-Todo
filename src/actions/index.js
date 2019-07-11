export const NEW_TODO = "NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const UPDATE_TODO = "UPDATE_TODO";

export function newTodo(newItem) {
  //   console.log("Action.js:", newItem);
  return {
    type: NEW_TODO,
    payload: newItem
  };
}

//toggle todo complete
export function toggleComplete(index) {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
}
//Remove specific item when click on the trash
export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    payload: index
  };
}

//toggle edit mode to update
export function editItem(index) {
  console.log("Edit the following index:", index);
  return {
    type: EDIT_ITEM,
    payload: index
  };
}
//update todo by passing the new data
export function updateTodo(data, index) {
  console.log("Update data", data);
  return {
    type: UPDATE_TODO,
    payload: data,
    index: index
  };
}
