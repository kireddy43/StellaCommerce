<?xml version="1.0" encoding="UTF-8"?>

<%--
 =================================================================
  Licensed Materials - Property of IBM

  WebSphere Commerce

  (C) Copyright IBM Corp. 2008, 2015 All Rights Reserved.

  US Government Users Restricted Rights - Use, duplication or
  disclosure restricted by GSA ADP Schedule Contract with
  IBM Corp.
 =================================================================
--%>
<%@page contentType="text/xml;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://commerce.ibm.com/foundation" prefix="wcf"%>
<c:set var="responseMap" value="${requestScope['com.ibm.commerce.responseMap']}"/>
<values>
  <identityId><wcf:cdata data="${responseMap.encryptedIdentityId}"/></identityId>
  <identitySignature><wcf:cdata data="${responseMap.identityTokenSignature[0]}"/></identitySignature>
  <logonId><wcf:cdata data="${param.logonId}"/></logonId>
</values>
