import Link from "next/link";
import React from "react";
import Typography from "@mui/material/Typography";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";
import { Container } from "@mui/material";

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
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
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
            <blockquote color="black">
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
        <Typography variant="subtitle1">
          <Link href={value.source}>Source</Link>
        </Typography>
        <Typography variant="subtitle1" sx={{ marginLeft: "10px" }}>
          <Link href={value.forumLink}>Forum link</Link>
        </Typography>
      </div>
    </div>
  );
};
