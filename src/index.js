const Alexa = require('ask-sdk-core');
const axios = require('axios');

const PlaylistIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlaylistIntent';
    },
    async handle(handlerInput) {
        const playlistName = Alexa.getSlotValue(handlerInput.requestEnvelope, 'playlistName');
        const API_KEY = "YOUR_API_KEY_HERE";
        const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(playlistName)}&type=playlist&key=${API_KEY}`;

        try {
            const response = await axios.get(API_URL);
            const playlistId = response.data.items[0].id.playlistId;
            const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

            const speakOutput = `Playing the playlist "${playlistName}" from YouTube. Here's the link: ${playlistUrl}`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        } catch (error) {
            console.error(error);
            const speakOutput = `Sorry, I was unable to find a playlist matching "${playlistName}" on YouTube. Please try again.`;
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};
