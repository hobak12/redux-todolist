import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";
import { toggleStatus, deleteTodo } from "../redux/modules/todolist";
import { Link } from "react-router-dom";

const List = ({ name }) => {
  const isWorking = name === "working" ? false : true;

  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const onClickToggleHandler = (id) => {
    const newTodoList = todoList.map((item) =>
      id === item.id ? { ...item, isDone: !item.isDone } : item
    );
    dispatch(toggleStatus(newTodoList));
  };

  const onClickDeleteHandler = (id) => {
    const newTodoList = todoList.filter((item) => id !== item.id);
    dispatch(deleteTodo(newTodoList));
  };

  return (
    <StListContainer>
      <h2>{isWorking ? "Done..! 🎉" : "Working.. 🔥"}</h2>
      <StListWrapper>
        {todoList
          .filter((item) => isWorking === item.isDone)
          .map((item) => {
            return (
              <StTodoContainer key={item.id}>
                <StLink to={`/detail/${item.id}`}>
                  <div> 상세보기</div>
                </StLink>
                <h2>{item.title}</h2>
                <div>{item.context}</div>
                <StFooter>
                  <StButton
                    onClick={() => {
                      onClickDeleteHandler(item.id);
                    }}
                    borderColor="red"
                  >
                    삭제
                  </StButton>
                  <StButton
                    onClick={() => {
                      onClickToggleHandler(item.id);
                    }}
                    borderColor="green"
                  >
                    {isWorking ? "취소" : "완료"}
                  </StButton>
                </StFooter>
              </StTodoContainer>
            );
          })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
