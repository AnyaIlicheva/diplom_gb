import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup, FormControl } from "@mui/material";

const HabitCheckboxes = ({
  days,
  checkedDays,
  handleCheckboxChange,
  habitId,
}) => {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        {Array(days)
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <FormControlLabel
                value={index + 1}
                control={
                  <Checkbox
                    checked={checkedDays.includes(index + 1)}
                    onChange={() => handleCheckboxChange(habitId, index + 1)}
                    label={index + 1}
                  />
                }
                label={index + 1}
                labelPlacement="top"
              />
            </div>
          ))}
      </FormGroup>
    </FormControl>
  );
};

export default HabitCheckboxes;
