const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const setUp = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: true, // to solve Error: option usefindandmodify is not supported comment useFindAndModify
		});
		console.log(`MongoDB Connected to ${setUp.connection.host} successfully`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit();
	}
};

module.exports = connectDB;
