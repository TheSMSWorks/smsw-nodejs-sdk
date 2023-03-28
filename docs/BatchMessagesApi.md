# TheSmsWorksApi.BatchMessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchAnyPost**](BatchMessagesApi.md#batchAnyPost) | **POST** /batch/any | 
[**batchBatchidGet**](BatchMessagesApi.md#batchBatchidGet) | **GET** /batch/{batchid} | 
[**batchSchedulePost**](BatchMessagesApi.md#batchSchedulePost) | **POST** /batch/schedule | 
[**batchSendPost**](BatchMessagesApi.md#batchSendPost) | **POST** /batch/send | 
[**batchesScheduleBatchidDelete**](BatchMessagesApi.md#batchesScheduleBatchidDelete) | **DELETE** /batches/schedule/{batchid} | 



## batchAnyPost

> BatchMessageResponse batchAnyPost(messages)



Sends a collection of unique SMS messages. Batches may contain up to 5000 messages at a time.

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.BatchMessagesApi();
let messages = [new TheSmsWorksApi.Message()]; // [Message] | An array of messages
apiInstance.batchAnyPost(messages, (error, data, response) => {
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
 **messages** | [**[Message]**](Message.md)| An array of messages | 

### Return type

[**BatchMessageResponse**](BatchMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## batchBatchidGet

> [MessageResponse] batchBatchidGet(batchid)



Retrieve all messages in a batch with the given batch ID

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.BatchMessagesApi();
let batchid = "batchid_example"; // String | The ID of the batch you would like returned
apiInstance.batchBatchidGet(batchid, (error, data, response) => {
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
 **batchid** | **String**| The ID of the batch you would like returned | 

### Return type

[**[MessageResponse]**](MessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## batchSchedulePost

> ScheduledBatchResponse batchSchedulePost(smsMessage)



Schedules a batch of SMS messages to be sent at the date time you specify

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.BatchMessagesApi();
let smsMessage = new TheSmsWorksApi.BatchMessage(); // BatchMessage | Message properties
apiInstance.batchSchedulePost(smsMessage, (error, data, response) => {
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
 **smsMessage** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**ScheduledBatchResponse**](ScheduledBatchResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## batchSendPost

> BatchMessageResponse batchSendPost(smsMessage)



Send a single SMS message to multiple recipients.  Batches may contain up to 5000 messages at a time.

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.BatchMessagesApi();
let smsMessage = new TheSmsWorksApi.BatchMessage(); // BatchMessage | Message properties
apiInstance.batchSendPost(smsMessage, (error, data, response) => {
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
 **smsMessage** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**BatchMessageResponse**](BatchMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## batchesScheduleBatchidDelete

> CancelledMessageResponse batchesScheduleBatchidDelete(batchid)



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

let apiInstance = new TheSmsWorksApi.BatchMessagesApi();
let batchid = "batchid_example"; // String | The ID of the batch you would like returned
apiInstance.batchesScheduleBatchidDelete(batchid, (error, data, response) => {
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
 **batchid** | **String**| The ID of the batch you would like returned | 

### Return type

[**CancelledMessageResponse**](CancelledMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

