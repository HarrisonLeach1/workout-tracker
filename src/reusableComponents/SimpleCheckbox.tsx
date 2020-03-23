import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { TextStyle, StyleProp } from "react-native";

export interface ISimpleCheckboxProps {
  styles?: StyleProp<TextStyle>;
}

const SimpleCheckbox: React.FC<ISimpleCheckboxProps> = ({ styles }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Checkbox.Android
      style={styles}
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default SimpleCheckbox;
