var Tweets = React.createClass({


    componentDidMount() {
        console.log('Tweet Component mounted');
        // $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response, filterProducts: response }) });

        $.getJSON('/api/v1/tweets.json', (response) => { this.setState({ tweets: response})  });

        // $.getJSON('/api/v1/tweets.json', (response) => { this.setState({ tweets: response.tweets_text, mentions: response.tweets_mentions})  });
        // $.getJSON('/api/v1/tweets.json', (response) => { console.log(response)  });

    },
    
    updateErrorState(message) {
        this.setState({
            errors: message
        })
    },

    getInitialState() {
        return {
            tweets: []
        }
    },

    handleURL(user) {

        console.log("before ajax call")
        console.log("user: " + user)

        $.ajax({
            url: `/api/v1/tweets/${user}`,
            type: 'GET',
            data: {user: user},
            success:(response) => {
                console.log("hitting the success")
                console.log(response)
                // $.getJSON('/api/v1/tweets/${user}', (response) => { this.setState({ tweets: response})  });
                this.updateTweets(response)
            },
            error: function(xhr, textStatus, error){
                console.log("XHR status text: " + xhr.statusText);
                console.log("textStatus: " + textStatus);
                console.log("error: " + error);
            }
        // }
        });


    },

    updateTweets(tweets) {

        this.setState({tweets: tweets});

    },

    
    render: function(){

        var updateURLSelf = this

        tweets = this.state.tweets.map( function(tweet){


            return (
                <div key={tweet.id}>

                    <Tweet handleURL={updateURLSelf.handleURL} tweet={tweet}/>

                </div>
            );

        });

        return (
            <div>
                
                <div id="tweets" className="container">
                    <h1 id="">Past 20 Tweets</h1>
                    <hr/>
                    {tweets}
                </div>

            </div>
        );
    }

});

