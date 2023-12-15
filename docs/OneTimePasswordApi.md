# TheSmsWorksApi.OneTimePasswordApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**otpMessageidGet**](OneTimePasswordApi.md#otpMessageidGet) | **GET** /otp/{messageid} | 
[**otpSendPost**](OneTimePasswordApi.md#otpSendPost) | **POST** /otp/send | 
[**otpVerifyPost**](OneTimePasswordApi.md#otpVerifyPost) | **POST** /otp/verify | 



## otpMessageidGet

> OTPVerifyResponse otpMessageidGet(messageid)



Retrieve an OTP by it&#39;s message ID

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.OneTimePasswordApi();
let messageid = "messageid_example"; // String | The ID of the OTP you would like returned
apiInstance.otpMessageidGet(messageid, (error, data, response) => {
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
 **messageid** | **String**| The ID of the OTP you would like returned | 

### Return type

[**OTPVerifyResponse**](OTPVerifyResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8


## otpSendPost

> OTPResponse otpSendPost(otp)



Generates and sends a One-Time Password

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.OneTimePasswordApi();
let otp = new TheSmsWorksApi.OTP(); // OTP | OTP properties
apiInstance.otpSendPost(otp, (error, data, response) => {
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
 **otp** | [**OTP**](OTP.md)| OTP properties | 

### Return type

[**OTPResponse**](OTPResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8


## otpVerifyPost

> OTPVerifyResponse otpVerifyPost(passcode)



Generates and sends a One-Time Password

### Example

```javascript
import TheSmsWorksApi from 'the_sms_works_api';
let defaultClient = TheSmsWorksApi.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new TheSmsWorksApi.OneTimePasswordApi();
let passcode = new TheSmsWorksApi.OTPVerify(); // OTPVerify | One-Time Password
apiInstance.otpVerifyPost(passcode, (error, data, response) => {
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
 **passcode** | [**OTPVerify**](OTPVerify.md)| One-Time Password | 

### Return type

[**OTPVerifyResponse**](OTPVerifyResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json;charset=UTF-8

