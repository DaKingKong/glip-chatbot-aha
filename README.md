# Jupiter Aha Add-In Bot

## Add Adaptive Card

Adaptive card can be designed with [Adaptive Cards Designer](https://adaptivecards.io/designer/) where the json data in `CARD PAYLOAD EDITOR` can be save as `xxx.json` and stored under `adaptive-cards` folder. Please refer to existing use of `ahaCard.json` as example.

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)



Note: Aha server seems like using an internal polling mechanism which doesn't send the activity message right after the change. It feels like there's a 5min interval.

TODOs:
1. Deploy to Heroku
2. Finish README