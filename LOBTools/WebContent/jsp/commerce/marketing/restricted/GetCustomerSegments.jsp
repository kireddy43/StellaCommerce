<?xml version="1.0" encoding="UTF-8"?>

<%--
 =================================================================
  Licensed Materials - Property of IBM

  WebSphere Commerce

  (C) Copyright IBM Corp. 2007, 2009 All Rights Reserved.

  US Government Users Restricted Rights - Use, duplication or
  disclosure restricted by GSA ADP Schedule Contract with
  IBM Corp.
 =================================================================
--%>
<%@page contentType="text/xml;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://commerce.ibm.com/foundation" prefix="wcf"%>

<wcf:getData
    type="com.ibm.commerce.member.facade.datatypes.MemberGroupType[]"
    var="memberGroups"
    expressionBuilder="findByUsage"
    varShowVerb="showVerb"
    recordSetStartNumber="${param.recordSetStartNumber}"
    recordSetReferenceId="${param.recordSetReferenceId}"
    maxItems="${param.maxItems}">
    <wcf:contextData name="storeId" data="${param.storeId}" />
    <wcf:contextData name="defaultLanguageId" data="${param.defaultLanguageId}" />
    <wcf:param name="usage" value="GeneralPurpose" />
</wcf:getData>

<objects
    recordSetCompleteIndicator="${showVerb.recordSetCompleteIndicator}"
    recordSetReferenceId="${showVerb.recordSetReferenceId}"
    recordSetStartNumber="${showVerb.recordSetStartNumber}"
    recordSetCount="${showVerb.recordSetCount}"
    recordSetTotal="${showVerb.recordSetTotal}">

	<c:forEach var="group" items="${memberGroups}">
	    <c:set var="showVerb" value="${showVerb}" scope="request"/>
	    <c:set var="businessObject" value="${group}" scope="request"/>
	    <jsp:directive.include file="SerializeCustomerSegment.jspf" />
	</c:forEach>

</objects>
