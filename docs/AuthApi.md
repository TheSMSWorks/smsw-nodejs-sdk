# TheSmsWorksApi.AuthApi

All URIs are relative to *https://api.thesmsworks.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**keySecret**](AuthApi.md#keySecret) | **GET** /auth/getApiKey | 
[**login**](AuthApi.md#login) | **POST** /auth/token | 

<a name="keySecret"></a>
# **keySecret**
> ApiKeyResponse keySecret(customerid)



Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';

let apiInstance = new TheSmsWorksApi.AuthApi();
let customerid = "customerid_example"; // String | Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login

apiInstance.keySecret(customerid, (error, data, response) => {
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
 **customerid** | **String**| Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login | 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="login"></a>
# **login**
> TokenResponse login(body)



Generates a JSON Web Token for including in the Authorization header of all your calls to the API. This only needs to be done once. Generate the customer ID, API Key &amp; Secret required for this call from the API Key tab your account page.

### Example
```javascript
import TheSmsWorksApi from 'the_sms_works_api';

let apiInstance = new TheSmsWorksApi.AuthApi();
let body = new TheSmsWorksApi.Login(); // Login | API Key & Secret

apiInstance.login(body, (error, data, response) => {
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
 **body** | [**Login**](Login.md)| API Key &amp; Secret | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

