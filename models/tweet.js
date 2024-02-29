const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDBコネクションOK');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー');
        console.log(err);
    })

    // const userSchema = new Schema ({
    //     username: String,
    //     age: Number,
    // });

    const userSchema = new Schema ({
        username: String,
        age: Number,
    });

    const tweetSchema = new Schema ({
        text: String,
        likes: Number,
        user: { type: Schema.Types.ObjectId, ref: 'User'}
    });

    const User = mongoose.model('User',userSchema);
    const Tweet = mongoose.model('Tweet',tweetSchema);

    // const makeTweets = async() => {
    //     const user = new User({name: 'yamada99', age: 61});
    //     const user = await User.findOne({age:61});

        // const tweet1 = new Tweet ({text: '今日は花粉が強い',likes: 0});
        // tweet1.user = user;
        // user.save();
        // tweet1.save();
        // }
        // const tweet2 = new Tweet ({text: '今日は肩が痛い',likes: 3});
        // tweet2.user = user;
        // tweet2.save();
        // }

        // makeTweets();

    const findTweet = async() => {
        const t = await Tweet.find({}).populate('user','username');
        console.log(t);
    }

    findTweet();