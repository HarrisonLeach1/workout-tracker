import React, { useState } from "react";
import { Checkbox } from "react-native-paper";

const SimpleCheckbox: React.FC<{}> = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Checkbox
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default SimpleCheckbox;
