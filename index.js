const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  primarykey: String,
  name: String,
  age: Number,
  nickName: String,
});

const Person = dynamoose.model('lab-18-people', personSchema);

exports.handler = async (event) => {
  let updateObject = event.body;
  let { id } = event.pathParameters;
  const response = await Person.update({ primarykey: id }, { ...updateObject });
  return {
    message: 'updated-user',
    user: response,
  };
};
