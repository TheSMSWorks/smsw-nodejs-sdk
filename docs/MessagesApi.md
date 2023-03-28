# TheSmsWorksApi.MessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageSchedulePost**](MessagesApi.md#messageSchedulePost) | **POST** /message/schedule | 
[**messageSendPost**](MessagesApi.md#messageSendPost) | **POST** /message/send | 
[**messagesFailedPost**](MessagesApi.md#messagesFailedPost) | **POST** /messages/failed | 
[**messagesInboxPost**](MessagesApi.md#messagesInboxPost) | **POST** /messages/inbox | 
[**messagesMessageidDelete**](MessagesApi.md#messagesMessageidDelete) | **DELETE** /messages/{messageid} | 
[**messagesMessageidGet**](MessagesApi.md#messagesMessageidGet) | **GET** /messages/{messageid} | 
[**messagesPost**](MessagesApi.md#messagesPost) | **POST** /messages | 
[**messagesScheduleGet**](MessagesApi.md#messagesScheduleGet) | **GET** /messages/schedule | 
[**messagesScheduleMessageidDelete**](MessagesApi.md#messagesScheduleMessageidDelete) | **DELETE** /messages/schedule/{messageid} | 
[**sendFlashMessage**](MessagesApi.md#sendFlashMessage) | **POST** /message/flash | 



## messageSchedulePost

> [ScheduledMessageResponse] messageSchedulePost(smsMessage)



Schedules an SMS message to be sent at the date-time you specify

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let smsMessage = new TheSmsWorksApi.Message(); // Message | Message properties
apiInstance.messageSchedulePost(smsMessage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**Message**](Message.md)| Message properties | 

### Return type

[**[ScheduledMessageResponse]**](ScheduledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## messageSendPost

> SendMessageResponse messageSendPost(smsMessage)



Send an SMS Message

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let smsMessage = new TheSmsWorksApi.Message(); // Message | Message properties
apiInstance.messageSendPost(smsMessage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## messagesFailedPost

> [MessageResponse] messagesFailedPost(query)



Get failed messages matching your search criteria

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let query = new TheSmsWorksApi.Query(); // Query | 
apiInstance.messagesFailedPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## messagesInboxPost

> [MessageResponse] messagesInboxPost(query)



Get unread uncoming messages matching your search criteria

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let query = new TheSmsWorksApi.Query(); // Query | 
apiInstance.messagesInboxPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## messagesMessageidDelete

> DeletedMessageResponse messagesMessageidDelete(messageid)



Delete the message with the mathcing messageid

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let messageid = "messageid_example"; // String | The ID of the message you would like returned
apiInstance.messagesMessageidDelete(messageid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **String**| The ID of the message you would like returned | 

### Return type

[**DeletedMessageResponse**](DeletedMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## messagesMessageidGet

> MessageResponse messagesMessageidGet(messageid)



Retrieve a logged message by the message ID

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let messageid = "messageid_example"; // String | The ID of the message you would like returned
apiInstance.messagesMessageidGet(messageid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **String**| The ID of the message you would like returned | 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## messagesPost

> [MessageResponse] messagesPost(query)



Retrieve up to 1000 messages matching your search criteria

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let query = new TheSmsWorksApi.Query(); // Query | 
apiInstance.messagesPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Query**](Query.md)|  | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## messagesScheduleGet

> ScheduledMessagesResponse messagesScheduleGet()



Returns a list of messages scheduled from your account, comprising any messages scheduled in the last 3 months and any scheduled to send in the future

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
apiInstance.messagesScheduleGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ScheduledMessagesResponse**](ScheduledMessagesResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## messagesScheduleMessageidDelete

> CancelledMessageResponse messagesScheduleMessageidDelete(messageid)



Cancels a scheduled SMS message

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let messageid = "messageid_example"; // String | The ID of the message you would like returned
apiInstance.messagesScheduleMessageidDelete(messageid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageid** | **String**| The ID of the message you would like returned | 

### Return type

[**CancelledMessageResponse**](CancelledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## sendFlashMessage

> SendMessageResponse sendFlashMessage(smsMessage)



Sends an SMS flash message, which appears on the recipients lock screen

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.MessagesApi();
let smsMessage = new TheSmsWorksApi.Message(); // Message | Message properties
apiInstance.sendFlashMessage(smsMessage, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsMessage** | [**Message**](Message.md)| Message properties | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8

