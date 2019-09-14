/**
 * 課題1: Twitterのタイムラインのような配列を作る
 *   - 変数名はtweetsで配列とする
 *   - tweetsの中には複数のオブジェクトがある
 *     - 1個1個のオブジェクトはツイートを表す
 *     - 全部で2個のツイートオブジェクトを作る
 *   - ツイートオブジェクトは以下の情報を持つ
 *     - username : ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い。)
 *     - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 *     - replies : ツイートに対する返信が格納された(配列)
 *       - repliesに格納されている1個1個のデータもツイートオブジェクト
 *       - 2個のツイートはそれぞれ2個の返信ツイートを持つ
 *       - 返信ツイートは以下の情報を持つ
 *         - username : 返信ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い)
 *         - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 */
const tweets = [
    {
        username: 'sugiyan1',
        text: 'hello1',
        replies: [
            {
                username: 'kenta1-1',
                text: 'retweet1-1'
            },
            {
                username: 'kenta1-2',
                text: 'retweet1-2'
            }
        ]
    },
    {
        username: 'sugiyan2',
        text: 'hello2',
        replies: [
            {
                username: 'kenta2-1',
                text: 'retweet2-1'
            },
            {
                username: 'kenta2-2',
                text: 'retweet2-2'
            }
        ]
    }
];

/**
 * 課題2: 課題1で作ったtweetsの内容を全て表示する
 *   - forEachを使ってtweetsの以下の内容を1つずつconsole.logで出力する
 *     - username
 *     - text
 *     - replies
 *       - repliesの内容もforEachを使って全て表示する
 */
tweets.forEach((tweet, index) => {
    console.log(index + '番目のusername\n', tweet.username);
    console.log(index + '番目のtext\n', tweet.text);
    console.log(index + '番目のリツイート\n');
    tweet.replies.forEach((reply, index) => {
        console.log('username=>', reply.username);
        console.log('text=>',reply.text);
    });
});
