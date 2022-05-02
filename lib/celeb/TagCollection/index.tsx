import { Chip, Typography } from "@mui/material";
import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div style={{ backgroundColor: "", margin: "0 0 15px 0" }}>
      <div className="box">
        {tags.regular.map((t) => (
          <div style={{ padding: "5px" }} key={t.tag.name}>
            <Chip
              size="medium"
              sx={{ backgroundColor: "#142138e0", color: "white" }}
              label={t.tag.name}
            />
          </div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className="box">
          <h2>Maybe</h2>
          {tags.lowConfidence.map((t) => (
            <Chip
              sx={{
                padding: "10px",
                marginLeft: "5px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#61c7b4",
                color: "white"
              }}
              key={t.tag.name}
              label={t.tag.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};
