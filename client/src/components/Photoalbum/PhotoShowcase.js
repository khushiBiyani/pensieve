import * as React from "react";
import axios from "axios";
import update from "../../controllers/userUpdate";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList(props) {
  const removePhoto = async (link) => {
    console.log("started");
    const res = await axios.put("http://localhost:5000/users/delete/photo", {
      link: link,
      id: props.id,
    });
    const data = await update(props.id);
    props.setUser(data);
  };

  return (
    <ImageList
      sx={{
        width: "100%",
        height: "100%",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      //   rowHeight="100%"
      gap={1}
    >
      {props.photoLinks.map((url) => {
        /* const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1; */

        const cols = 1;
        const rows = 1;

        return (
          <ImageListItem key={url} cols={cols} rows={rows}>
            <img
              {...srcset(url, "100%", "100%", rows, cols)}
              alt={"Unavailable"}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              position="top"
              actionIcon={
                <IconButton
                  onClick={() => {
                    removePhoto(url);
                  }}
                  sx={{ color: "white" }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
