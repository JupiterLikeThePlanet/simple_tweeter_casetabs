var Tweet = React.createClass({

    handleClick(e){
        e.preventDefault()
        
        user = e.currentTarget.getAttribute('href').replace(/,/g ,'')
        
        this.props.handleURL(user)
    },
    
    // createMarkup() {
    //     
    //     var tweet_string = this.props.tweet.text
    //     mentions = this.props.tweet.entities.user_mentions.map( function(mention){
    //         // console.log("in create markup")
    //         return tweet_string.split(" ").map(function(word) {
    //             console.log("in tweet string split")
    //             if (word === ("@" + mention.screen_name)) {
    //                 console.log("in IF")
    //                 var reg = new RegExp(word, "g")
    //                 link = word.replace(reg, `<a href='${mention.screen_name}'>@${mention.screen_name}</a>`)
    //
    //                 console.log(link)
    //
    //                 return {__html: link};
    //             }
    //         })
    //     })
    // },

    // createMarkup() {
    //
    //     mentions = this.props.tweet.entities.user_mentions.map( function(mention){
    //
    //             tweet_string.split(" ").map(function(word) {
    //
    //                 console.log("Tweet String Split")
    //
    //                 if (word === ("@" + mention.screen_name)) {
    //                     var reg = new RegExp(word, "g")
    //                     link = word.replace(reg, `<a href='${mention.screen_name}'>@${mention.screen_name}</a>`)
    //
    //
    //                     return {__html: link};
    //                 }
    //             })
    //         },


render() {

        var yellow =  {color: 'yellow' }

        var tweet_string = this.props.tweet.text

        mentions = this.props.tweet.entities.user_mentions.map( function(mention){
            // console.log(mention)
            // m = mention


            return (tweet_string.split(" ").map(function(word){

                    console.log("Tweet String Split")

                    if (word === ("@" + mention.screen_name)) {
                        // var reg = new RegExp(word, "g")
                        // console.log(word.replace(word, <a href={mention.screen_name}>@{mention.screen_name}</a> ));
                        // link = word.replace(reg, `<a href='${mention.screen_name}'>@${mention.screen_name}</a>` )

                        // return ("@" + mention.screen_name)
                        return (mention.screen_name)

                    }

                })
            )

        })





        // mentions = this.props.tweet.entities.user_mentions.map( function(mention){
        //     // console.log(mention)
        //     // m = mention
        //
        //
        // return (tweet_string.split(" ").map(function(word){
        //
        //         console.log("Tweet String Split")
        //
        //         if (word === ("@" + mention.screen_name)) {
        //             var reg = new RegExp(word, "g")
        //             // console.log(word.replace(word, <a href={mention.screen_name}>@{mention.screen_name}</a> ));
        //             link = word.replace(reg, `<a href='${mention.screen_name}'>@${mention.screen_name}</a>` )
        //
        //
        //             return {__html: link};
        //
        //             // return (
        //             //     <div id="link">
        //             //         {link}
        //             //     </div>
        //             // );
        //
        //             // console.log(word + ' and ' + mention + ' match');
        //
        //         }
        //
        //     })
        // )
        //
        //     // return (
        //     //     <div>
        //     //         <div key={mention.id}>
        //     //            Mentions: {mention.screen_name}
        //     //         </div>
        //     //     </div>
        //     // );
        //
        //
        //     // <div key={this.props.tweet.id} id="mentions" dangerouslySetInnerHTML={this.createMarkup()}/>
        //     // <div key={this.props.tweet.id} id="mentions" dangerouslySetInnerHTML={{__html: {mentions}}}/>
        // })
        //
        // var thing = <div key={this.props.tweet.id} id="mentions" dangerouslySetInnerHTML={{__html: {mentions}}}/>
        //
        // if (thing.props.dangerouslySetInnerHTML.__html === undefined || thing.props.dangerouslySetInnerHTML.__html.mentions === undefined || thing.props.dangerouslySetInnerHTML.__html.mentions[0] === undefined || thing.props.dangerouslySetInnerHTML.__html.mentions[0][0] === undefined ) {
        //
        // }else{
        //     // console.log(thing.props.dangerouslySetInnerHTML.__html.mentions[0][0].__html)
        //     var mention_div = thing.props.dangerouslySetInnerHTML.__html.mentions[0][0].__html
        // }
        //
        // //
        // console.log(thing)

    // {mention_div}



        return (
            <div>



                <a ref={mentions} href={mentions} onClick={this.handleClick} >@{mentions}</a>

                <div><span><p style={yellow} className="inline_text">Tweet: </p> <p key={this.props.tweet.id} className="inline_text"> {this.props.tweet.text}</p></span></div>;

                <hr/>
            </div>

        )
    }
});