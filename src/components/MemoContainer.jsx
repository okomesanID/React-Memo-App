import React from 'react'
import {Memo} from "./Memo";

export const MemoContainer = (props) => {
  
  //Memoデータの取得
  const Memos = props.Memo.map((memo) => <Memo key={memo.id} memo={memo} onDelete={props.onDelete}/>);

  return(
   <div>
      <div>記録数：{props.Memo.length}</div>
      <h3>メモの一覧</h3>
      <div>{Memos}</div>
  </div>
  );
};