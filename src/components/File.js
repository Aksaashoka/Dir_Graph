import React from 'react';
import {List} from 'react-native-paper';
import uuid from 'react-native-uuid';

const File = ({file}) => (
  <List.Item
    key={uuid.v4()}
    left={props => <List.Icon {...props} icon="file" />}
    title={file.name}
  />
);

export default File;
