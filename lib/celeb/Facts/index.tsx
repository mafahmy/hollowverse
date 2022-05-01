import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact } from "~/lib/celeb/Facts/Fact";
import { Container } from "@mui/material";

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <div>
      <Container maxWidth="md">
      {topics.map((topic, i) => {
        const factGroup = groups[topic];

        return (
          
          <div key={`${topic}-${i}`}>
            {factGroup.map((fact, innerI) => {
              return (
                <div
                  key={`${topic}-${i}-${innerI}`}
                  style={{
                    backgroundColor: "",
                    display: "flex",
                    margin: "0 0 15px 0",
                    padding: "10px",
                  }}
                >
                  <Fact value={fact} />
                </div>
              );
            })}
          </div>
          
        );
      })}
      </Container>
    </div>
    
  );
};
