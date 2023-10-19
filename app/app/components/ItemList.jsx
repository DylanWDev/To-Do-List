import React from "react";


function ItemList() {
  return (
    <div>
      {ItemList}
      <button>Delete</button>
    </div>
  )
}
export default ItemList;
// function ItemList({ items, onDelete }) {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           {item}
//           <button onClick={() => onDelete(index)}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ItemList;
