const URL = "http://localhost:3000/tweets";


const onEnter = (e) => {
    if (e.key == "Enter") {
        getTwitterData();
    }
}
/**
 * Retrive Twitter Data from API
 */
const getTwitterData = () => {
    const query = document.getElementById('user-search-input').value;
    if (!query) return;
    const encodedQuery = encodeURIComponent(query);
    const url = "http://localhost:3000/tweets?q=coding&count=10";
    const fullUrl = `${URL}?q=${encodedQuery}&count=10`
    fetch(fullUrl).then((response) => {
        return response.json();
    }).then((data) => {
        buildTweets(data.statuses);
    })
}

getTwitterData();
/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {
    let twitterContent = "";
    tweets.map((tweet) => {
        twitterContent += `
        <div class="tweet-container">
                    <div class="tweet-user-info">
                        <div class="tweet-user-profile">

                        </div>
                        <div class="tweet-user-name-container">
                            <div class="tweet-user-fullname">
                                Steven Abaco
                            </div>
                            <div class="tweet-user-username">
                                @SirTweetsAlot
                            </div>
                        </div>
                    </div>
                    <div class="tweet-images-container">
                        <div class="tweet-image"></div>
                    </div>
                    <div class="tweet-text-container">
                        ${tweet.full_text}
                    </div>
                    <div class="tweet-date-container">
                        20 hours ago
                    </div>
                </div>
        `
    })

    document.querySelector(`.tweets-list`).innerHTML = twitterContent;
}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {

}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {

}