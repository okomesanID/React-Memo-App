import { useState, useRef } from "react";
import {MemoContainer} from "./components/MemoContainer";
import { v4 as uuidv4 }from "uuid";
import styled from "styled-components";

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

  //styled-components
  const SContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  background-color: #FFFFFF; 
  padding: 8px;
  margin: 8px;
  white-space: pre-wrap;
  `;
  const MContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  `;
  const SButton = styled.button`
  background-color: #EEEEEE;
  border: solid 1px #aaa;
  padding: 4px;
  border-radius: 8px;
  margin-left: 335px;
  margin-buttom: 10px;
  display: block;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
  `;

  return (
    <div>
      <MContainer>
        <h1>Memo App</h1>
        <textarea typy="text" rows="4" cols="50" wrap="hard" ref={Ref}/>
        <SButton onClick={AddMemo}>追加</SButton>
        <div>記録数：{Memo.length}</div>
      </MContainer>
      <SContainer>
        <MemoContainer Memo={Memo}  onDelete={deleteMemo}/>
      </SContainer>
    </div>
  );
}

export default App;
