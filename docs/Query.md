# TheSmsWorksApi.Query

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the messages you would like returned (either &#x27;SENT&#x27;, &#x27;DELIVERED&#x27;, &#x27;EXPIRED&#x27;, &#x27;UNDELIVERABLE&#x27;, &#x27;REJECTED&#x27; or &#x27;INCOMING&#x27;) | [optional] 
**credits** | [**BigDecimal**](BigDecimal.md) | The number of credits used on the message. Floating point number. | [optional] 
**destination** | **String** | The phone number of the recipient. Start UK numbers with 44 and drop the leading 0. | [optional] 
**sender** | **String** | The sender of the message (this can be the configured sender name for an outbound message or the senders phone number for an inbound message). | [optional] 
**keyword** | **String** | The keyword used in the inbound message | [optional] 
**from** | **String** | The date-time from which you would like matching messages | [optional] 
**to** | **String** | The date-time to which you would like matching messages | [optional] 
**unread** | **Boolean** | In queries for incoming messages (&#x27;status&#x27; is &#x27;INCOMING&#x27;), specify whether you explicitly want unread messages (true) or read messages (false). Omit this parameter in other circumstances. | [optional] 
**metadata** | **Object** | An array of objects containing metadata key/value pairs that have been saved on messages. | [optional] 
