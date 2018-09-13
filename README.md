# the_sms_works_api

TheSmsWorksApi - JavaScript client for the_sms_works_api
The SMS Works provides a low-cost, reliable SMS API for developers. Pay only for delivered texts, all failed messages are refunded.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### via npm

```shell
npm install the-sms-works --save
```

You should now be able to `require('the-sms-works')` in javascript files from the directory you ran the last
command above from.

#### git
#
This library is hosted at:
https://github.com/TheSMSWorks/smsw-nodejs-sdk

you can install it from git via:

```shell
    npm install TheSMSWorks/smsw-nodejs-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TheSmsWorksApi = require('the_sms_works_api');

var api = new TheSmsWorksApi.AuthApi()

var customerid = "customerid_example"; // {String} The Customer ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.keySecret(customerid, callback);

```

## Test calls in Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5348de8f62f83cddcee3)


## Documentation for API Endpoints

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TheSmsWorksApi.AuthApi* | [**keySecret**](docs/AuthApi.md#keySecret) | **GET** /auth/getApiKey |
*TheSmsWorksApi.AuthApi* | [**login**](docs/AuthApi.md#login) | **POST** /auth/token |
*TheSmsWorksApi.BatchMessagesApi* | [**cancelScheduledBatchJob**](docs/BatchMessagesApi.md#cancelScheduledBatchJob) | **DELETE** /batches/schedule/{batchid} |
*TheSmsWorksApi.BatchMessagesApi* | [**getBatchById**](docs/BatchMessagesApi.md#getBatchById) | **GET** /batch/{batchid} |
*TheSmsWorksApi.BatchMessagesApi* | [**scheduleBatch**](docs/BatchMessagesApi.md#scheduleBatch) | **POST** /batch/schedule |
*TheSmsWorksApi.BatchMessagesApi* | [**sendBatch**](docs/BatchMessagesApi.md#sendBatch) | **POST** /batch/send |
*TheSmsWorksApi.MessagesApi* | [**cancelScheduledJob**](docs/MessagesApi.md#cancelScheduledJob) | **DELETE** /messages/schedule/{messageid} |
*TheSmsWorksApi.MessagesApi* | [**getInboxMessages**](docs/MessagesApi.md#getInboxMessages) | **POST** /messages/inbox |
*TheSmsWorksApi.MessagesApi* | [**getMessageById**](docs/MessagesApi.md#getMessageById) | **GET** /messages/{messageid} |
*TheSmsWorksApi.MessagesApi* | [**getMessages**](docs/MessagesApi.md#getMessages) | **POST** /messages |
*TheSmsWorksApi.MessagesApi* | [**scheduleMessage**](docs/MessagesApi.md#scheduleMessage) | **POST** /message/schedule |
*TheSmsWorksApi.MessagesApi* | [**sendMessage**](docs/MessagesApi.md#sendMessage) | **POST** /message/send |
*TheSmsWorksApi.UtilsApi* | [**test**](docs/UtilsApi.md#test) | **GET** /utils/test |


## Documentation for Models

 - [TheSmsWorksApi.ApiKeyResponse](docs/ApiKeyResponse.md)
 - [TheSmsWorksApi.BatchMessage](docs/BatchMessage.md)
 - [TheSmsWorksApi.BatchMessageResponse](docs/BatchMessageResponse.md)
 - [TheSmsWorksApi.CancelledMessageResponse](docs/CancelledMessageResponse.md)
 - [TheSmsWorksApi.ErrorModel](docs/ErrorModel.md)
 - [TheSmsWorksApi.Login](docs/Login.md)
 - [TheSmsWorksApi.Message](docs/Message.md)
 - [TheSmsWorksApi.MessageMetadata](docs/MessageMetadata.md)
 - [TheSmsWorksApi.MessageResponse](docs/MessageResponse.md)
 - [TheSmsWorksApi.MessageResponseFailurereason](docs/MessageResponseFailurereason.md)
 - [TheSmsWorksApi.MessagesResponse](docs/MessagesResponse.md)
 - [TheSmsWorksApi.MessagesResponseMessages](docs/MessagesResponseMessages.md)
 - [TheSmsWorksApi.MetaData](docs/MetaData.md)
 - [TheSmsWorksApi.Query](docs/Query.md)
 - [TheSmsWorksApi.QueryMetadata](docs/QueryMetadata.md)
 - [TheSmsWorksApi.ScheduledBatchResponse](docs/ScheduledBatchResponse.md)
 - [TheSmsWorksApi.ScheduledMessageResponse](docs/ScheduledMessageResponse.md)
 - [TheSmsWorksApi.SendMessageResponse](docs/SendMessageResponse.md)
 - [TheSmsWorksApi.TestResponse](docs/TestResponse.md)
 - [TheSmsWorksApi.TokenResponse](docs/TokenResponse.md)
 - [TheSmsWorksApi.ExtendedErrorModel](docs/ExtendedErrorModel.md)


## Documentation for Authorization


### JWT

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
