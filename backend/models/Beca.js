const { model, Schema } = require('mongoose')

const becaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String,
  field: {
    type: String,
    required: true,
    enum: ['literatura', 'arteycultura', 'cienciaytecnologia', 
    'emprendimiento', 'educacion', 'otros']
  },
  endDate: {
    type: Date
  },
  link: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
},{
  timestamps: false,
  versionKey: false
})

module.exports = model('Beca', becaSchema)
