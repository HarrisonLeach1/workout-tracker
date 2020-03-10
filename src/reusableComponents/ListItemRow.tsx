import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface IListItemRowProps {
  children: ReactNode;
}

const ListItemRow: React.FC<IListItemRowProps> = ({ children }) => {
  return <View style={styles.item}>{children}</View>;
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});
export default ListItemRow;
