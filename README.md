## Socket-io-stockmarket

- A Socket.io implementation for fetching the Price ticker from Stock Market.

![alt text](https://user-images.githubusercontent.com/13572684/34220348-55df054e-e5da-11e7-8812-df58a7a04066.png)

## Requirements

- Nodejs ^v8.9.0
- Zerodha API Access
- MongoDB

## Installation

* Clone repository
* npm install
* npm install --save-dev eslint-config-airbnb-base eslint eslint-plugin-import
* create .env with below mentioned contents
* npm start

> Create .env file

```
# NODE
PORT=50400
NODE_ENV=development
LOGGER_LEVEL=trace
DB=ticker-development
DB_URI=localhost:27017

ZERODHA_API_KEY=<YOUR ZERODHA KEY>
ZERODHA_API_SECRET=<YOUR ZERODHA SECRET>
ZERODHA_USER_ID=<YOUR ZERODHA USER ID>
```

# Todo:

- Select Element from the screen for which we need to capture the ticker.
