import React from 'react'

export const Memo = (props) => {

  //Memoデータの削除
  const Clear =() => {
    props.onDelete(props.memo.id);
  };

  return (
    <div>
      <li>
        {props.memo.name}
        <button onClick={Clear}>削除</button>
      </li>
    </div>
  );
};
