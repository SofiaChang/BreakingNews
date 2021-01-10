import React, { useState } from "react";
import styled from "styled-components";
import { List, Card } from "antd";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import SummariesHeader from "../components/summaries/Header";
import Summary from "../components/summaries/Summary";
import data from "../components/summaries/data";

const ListHeader = styled.div`
  font-size: 1.5rem;
  text-align: left;
  padding: 1.25rem;
`;

const StyledDiv = styled.div`
  border-bottom: 1px solid black;
  text-align: left;
  padding: 5px;
  margin: 15px;
  font-size: 1.25rem;
`;

const cardColors = ["#c9ada7", "#9a8c98"];

const Summaries = () => {
  const [clicked, setClicked] = useState(false);
  const title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  return !clicked ? (
    <>
      <SummariesHeader region="Canada" title={title} />
      <List
        header={<ListHeader>Summaries</ListHeader>}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              style={{
                backgroundColor: index % 2 === 0 ? cardColors[0] : cardColors[1],
                margin: "1rem",
                borderRadius: "7.5px",
              }}
            >
              <StyledDiv>Article {index + 1} Summary</StyledDiv>
              <Summary imgURL={item.imgURL} summary={item.summary} />
            </Card>
          </List.Item>
        )}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ float: "right", margin: "1.1rem" }}
        onClick={() => {
          setClicked(true);
        }}
      >
        Quiz
      </Button>
    </>
  ) : (
    <Redirect to="/multipleChoice"></Redirect>
  );
};

export default Summaries;