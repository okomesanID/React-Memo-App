import { useState, useRef } from "react";
import {MemoContainer} from "./components/MemoContainer";
import { v4 as uuidv4 }from "uuid";

function App() {

  //MemoリストのuseState
  const [Memo, setMemo] = useState([]);
  //inputの中身を取得
  const Ref = useRef();

  //Memoを一覧に追加
  const AddMemo =() => {
    const addMemno = Ref.current.value; //input値取得
    if(addMemno === "") return; //input値が空の場合return
    setMemo((task) => { //一つずつメモを追加
      return [...task, {id: uuidv4(), name:addMemno}];
    });
    //入力後input値リセット
    Ref.current.value = null;
  };

  //Memoを削除
  const deleteMemo = (id) => {
    setMemo((prevMemo) => prevMemo.filter((memo) => memo.id !== id));
  };

  return (
    <div>
      <h1>Memo App</h1>
      <input typy="text" ref={Ref}/>
      <button onClick={AddMemo}>追加</button>
      <MemoContainer Memo={Memo}  onDelete={deleteMemo}/>
    </div>
  );
}

export default App;
