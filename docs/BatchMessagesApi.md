# TheSmsWorksApi.BatchMessagesApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScheduledBatchJob**](BatchMessagesApi.md#cancelScheduledBatchJob) | **DELETE** /batches/schedule/{batchid} | 
[**getBatchById**](BatchMessagesApi.md#getBatchById) | **GET** /batch/{batchid} | 
[**scheduleBatch**](BatchMessagesApi.md#scheduleBatch) | **POST** /batch/schedule | 
[**sendBatch**](BatchMessagesApi.md#sendBatch) | **POST** /batch/send | 

<a name="cancelScheduledBatchJob"></a>
# **cancelScheduledBatchJob**
> CancelledMessageResponse cancelScheduledBatchJob(batchid)



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

apiInstance.cancelScheduledBatchJob(batchid, (error, data, response) => {
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

<a name="getBatchById"></a>
# **getBatchById**
> [MessageResponse] getBatchById(batchid)



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

apiInstance.getBatchById(batchid, (error, data, response) => {
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

<a name="scheduleBatch"></a>
# **scheduleBatch**
> ScheduledBatchResponse scheduleBatch(body)



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
let body = new TheSmsWorksApi.BatchMessage(); // BatchMessage | Message properties

apiInstance.scheduleBatch(body, (error, data, response) => {
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
 **body** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**ScheduledBatchResponse**](ScheduledBatchResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="sendBatch"></a>
# **sendBatch**
> BatchMessageResponse sendBatch(body)



Send a single SMS message to multiple recipients

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
let body = new TheSmsWorksApi.BatchMessage(); // BatchMessage | Message properties

apiInstance.sendBatch(body, (error, data, response) => {
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
 **body** | [**BatchMessage**](BatchMessage.md)| Message properties | 

### Return type

[**BatchMessageResponse**](BatchMessageResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

