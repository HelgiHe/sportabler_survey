import DataType from 'sequelize';
import Model from '../sequelize';

const Option = Model.define('Option', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(50),
  },

  key: {
    type: DataType.STRING(100),
  },
});

export default Option;
