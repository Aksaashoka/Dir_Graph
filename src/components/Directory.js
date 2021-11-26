import React from 'react';
import {List} from 'react-native-paper';
import File from './File';
import uuid from 'react-native-uuid';

const Directory = ({item, level = 0}) => {
  const marginLeft = level * 10;
  if (item.type === 'directory' && item.files?.length === 0) {
    return (
      <List.Item
        key={uuid.v4()}
        left={props => <List.Icon {...props} icon="folder" />}
        title={`${item.name} (Empty)`}
      />
    );
  }
  if (item.type === 'file') {
    return <File key={uuid.v4()} file={item} />;
  }
  if (item.type === 'directory' && item.files?.length > 0) {
    return (
      <List.Accordion
        title={item.name}
        key={uuid.v4()}
        left={props => <List.Icon {...props} icon="folder" />}>
        {item.files?.map(nodeOrLeaf => (
          <Directory
            style={{marginLeft}}
            key={uuid.v4()}
            item={nodeOrLeaf}
            level={level + 1}
          />
        ))}
      </List.Accordion>
    );
  }
};

export default Directory;
