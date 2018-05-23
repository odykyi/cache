module.exports = (mongoose) => mongoose.model('Entity', new mongoose.Schema({
  key: String,
  value: String,
}));


