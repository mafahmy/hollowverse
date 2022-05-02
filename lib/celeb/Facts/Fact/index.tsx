import Link from "next/link";
import React from "react";
import Typography from "@mui/material/Typography";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";
import { Chip, Container } from "@mui/material";

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div>
        {value.topics.map((e) => {
          return (
            <span key={e.name}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, backgroundColor: "#d1e3f3" }}
              >
                {e.name}
              </Typography>
            </span>
          );
        })}
      </div>
      <div>
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          {value.date}
        </Typography>
      </div>

      <div>
        {(value.type === "quote" && (
          <div>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {value.context}, <em>{name} said: </em>
            </Typography>
            <blockquote
              style={{
                marginLeft: "8px",
                padding: "1px 0 1px 16px",
                borderLeft: "10px solid #142138e0",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {value.quote}
              </Typography>
            </blockquote>
          </div>
        )) ||
          (value.type == "fact" && (
            <div>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {value.content}
              </Typography>
            </div>
          ))}
      </div>

      <div style={{ display: "flex" }}>
        {value.tags.map((t) => {
          return (
            <Typography
              key={t.tag.name}
              sx={{ marginRight: "10px" }}
              variant="caption"
            >
              # {t.isLowConfidence && "Possibly "}
              {t.tag.name}
            </Typography>
          );
        })}
      </div>

      <div className="flex-end">
        <Chip
          sx={{ padding: "5px", fontSize: "16px", backgroundColor: "#d1e3f3" }}
          label="Source"
          component="a"
          href={value.source}
          clickable
        />
        <Chip
          sx={{ padding: "5px", fontSize: "16px", backgroundColor: "#d1e3f3" }}
          label="Forum link"
          component="a"
          href={value.forumLink}
          clickable
        />
      </div>
    </div>
  );
};
