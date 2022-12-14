import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todolist";

const InputBox = () => {
  // 부분적으로 useState 사용
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  //useDispatch 호출 변수
  const dispatch = useDispatch();

  //text, context 변경 함수
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContextHandler = (e) => {
    setContext(e.target.value);
  };

  //Todo 추가 함수
  const onSumbitaddTodoHandler = (e) => {
    e.preventDefault();
    const todoTitle = title.trim(); //앞뒤 공백 없애기
    const todoContext = context.trim();

    if (todoTitle && todoContext) {
      dispatch(addTodo(title, context));
      setTitle(""); //입력 후 인풋박스 비우기
      setContext("");
    } else if (!todoTitle) {
      alert("제목을 입력해주세요");
      document.getElementById("title").focus(); //제목인풋포커스
    } else if (!todoContext) {
      alert("내용을 입력해주세요");
      document.getElementById("context").focus(); //내용인풋포커스
    }
  };

  return (
    <StAddForm onSubmit={onSumbitaddTodoHandler}>
      <StInputGroup>
        <StInputLabel htmlFor="title">제목</StInputLabel>
        <StAddInput
          onChange={onChangeTitleHandler}
          type="text"
          id="title"
          value={title}
        />
        <StInputLabel htmlFor="context">내용</StInputLabel>
        <StAddInput
          onChange={onChangeContextHandler}
          type="text"
          id="context"
          value={context}
        />
      </StInputGroup>
      <StAddButton>추가</StAddButton>
    </StAddForm>
  );
};

export default InputBox;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StInputLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;
const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
