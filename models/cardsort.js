var mongoose = require('mongoose');  

var CardSortStudy = new mongoose.Schema({
	title: String,
	type: String,
	studyType: { type: String,
				enum: ['open', 'closed'],
			},
	cards: [],
	groups: [],
	responses: [],
	active: Boolean
	}
);

module.exports = mongoose.model('CardSortStudy', CardSortStudy);


