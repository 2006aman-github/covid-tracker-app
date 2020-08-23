import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./infobox.css";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* title of the card  */}
        <h3 className="infoBox__case" color="textSecondary">
          {title}
        </h3>

        {/* no of cases  */}
        <h2 className="infoBox__Cases">{cases}</h2>

        {/* total cases  */}
        <h3 className="infoBox__total" color="textSecondary">
          {total} Total
        </h3>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
