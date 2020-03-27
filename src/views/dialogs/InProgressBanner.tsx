import React, { useState } from 'react';
import { Banner, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';

const InProgressBanner: React.FC<{}> = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Got it',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({ size }) => (
        <IconButton
          icon="wrench-outline"
          size={32}
          disabled={true}
          style={{
            width: size,
            height: size,
          }}
        />
      )}
      style={styles.banner}
    >
      This application is still under construction so there may be bugs and a lot of missing functionality.
    </Banner>
  );
};

const styles = StyleSheet.create({
  banner: {
    elevation: 4,
  },
});

export default InProgressBanner;
