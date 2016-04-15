<?xml version="1.0" encoding="UTF-8"?>

<%--
 =================================================================
  Licensed Materials - Property of IBM

  WebSphere Commerce

  (C) Copyright IBM Corp. 2008, 2011 All Rights Reserved.

  US Government Users Restricted Rights - Use, duplication or
  disclosure restricted by GSA ADP Schedule Contract with
  IBM Corp.
 =================================================================
--%>
<%@page contentType="text/xml;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://commerce.ibm.com/foundation" prefix="wcf"%>

<wcf:getData type="com.ibm.commerce.content.facade.datatypes.TaskType[]"
			 var="tasks"
			 expressionBuilder="getTaskDetailsByStatus"
			 varShowVerb="showVerb"
			 recordSetStartNumber="${param.recordSetStartNumber}"
			 recordSetReferenceId="${param.recordSetReferenceId}"
			 maxItems="${param.maxItems}">
	<wcf:param name="statusValue" value="${param.taskStatus}" />
</wcf:getData>

<objects recordSetCompleteIndicator="${showVerb.recordSetCompleteIndicator}"
		 recordSetReferenceId="${showVerb.recordSetReferenceId}"
		 recordSetStartNumber="${showVerb.recordSetStartNumber}"
		 recordSetCount="${showVerb.recordSetCount}"
		 recordSetTotal="${showVerb.recordSetTotal}">
<c:forEach var="task" items="${tasks}">
	<jsp:directive.include file="SerializeTask.jspf" />
</c:forEach>
</objects>
