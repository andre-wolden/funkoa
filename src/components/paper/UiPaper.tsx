import React, { ReactNode } from "react";
import "./paper.css";
import { Paper } from "@material-ui/core";

const UiPaper: React.FC = ({ children }: { children?: ReactNode }) => (
    <Paper className="ui-paper" elevation={3}>
        {children}
    </Paper>
);

export default UiPaper;
