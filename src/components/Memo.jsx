import React from 'react'
import styled from "styled-components";

export const Memo = (props) => {

  //Memoデータの削除
  const Clear =() => {
    props.onDelete(props.memo.id);
  };

  //styled-components
  const List = styled.div`
  border: solid 1px #aaa;
  background-color: #FFCC66; 
  padding: 8px;
  margin: 8px;
  `;
  const SButton = styled.button`
  background-color: #EEEEEE;
  border: solid 1px #aaa;
  padding: 4px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
  `;

  return (
    <div>
      <List>
          <SButton onClick={Clear}>削除</SButton>
          <pre />
          {props.memo.name}
      </List>
    </div>
  );
};
