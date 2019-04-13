import React from "react";
import Button from "@material-ui/core/Button";

export default function({ a, b, ...props }) {
  return (
    <Button variant="contained" color="secondary" {...props}>
      {a + b}!
    </Button>
  );
}
