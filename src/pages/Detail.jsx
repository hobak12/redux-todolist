import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
  const param = useParams().id;
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      {todoList
        .filter((item) => item.id === param)
        .map((item) => {
          return (
            <StContainer key={item.id}>
              <StDialog>
                <div>
                  <StDialogHeader>
                    <div>id:{item.id}</div>
                    <StButton
                      borderColor="#ddd"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      이전으로
                    </StButton>
                  </StDialogHeader>

                  <StTitle>{item.title}</StTitle>
                  <StBody>{item.context}</StBody>
                </div>
              </StDialog>
            </StContainer>
          );
        })}
    </div>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1000px;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 50px 60px 30px 60px;
  align-items: center;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StTitle = styled.h1`
  padding: 0 170px;
`;

const StBody = styled.main`
  padding: 20px 180px;
`;
