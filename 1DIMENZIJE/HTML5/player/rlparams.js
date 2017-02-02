﻿/*!
 * Generated by ActivePresenter 6.0.4 HTML5 (2017.01.05)
 */
﻿/*!
 * Atomi HTML5 Player - Template parameters
 * Copyright (c) Atomi Systems, Inc. All rights reserved.
 * http://atomisystems.com
 * Created: 2008/01/20
 * Modified: 2016/03/25
 */

var PrezInfo = {
	Name:"Untitled",
	Description:"",
	Date1: "2/1/2017",
	Author:"Anamaria",
	Copyright:"",
	Homepage:"",
	RLVersion: "6.0.5",
	AppHomePage: "https://atomisystems.com",
	ViewPort: {width:1364, height:727},
	Language: "en-US",
	TextDir: "ltr",
	Generator: "ActivePresenter 6.0.5"
};

// LMS package type (Don't change these values)
PackageType = {
	NONE: 0,
	SCORM: 1,
	TINCAN: 2
};

var Options = {"opmodes":7,"GenPreview":false,"language_id":60,"report_format":-1,"use_webm_ogg":false,"report_value":"","pass_condition":0,"ShowReport":true,"ExportHTML5":true,"pass_value":80,"report_method":0,"FlashABSpeed":0,"AllowNavigate":false,"test_max_time":0,"allow_select_text":true,"image_format":"png","ConfirmRestart":false,"HilightFocus":true,"GenerateSeparatePackage":true,"UseAccText":true,"ScormScorePercent":false};
var TemplateParams = {
   Color3:"rgb(255, 0, 0)",
   IniVolume:80,
   IniCCShow:0,
   HighLevelStepText:true,
   ShowPosition:true,
   ShowNextBtn:false,
   SlideListPos:2,
   ShowPrezLen:true,
   Color2:"rgb(255, 255, 255)",
   ShowInfoBtn:false,
   ShowPrevBtn:false,
   ShowSegments:true,
   ShowDuration:2,
   ShowSlideAsGroup:true,
   ToolbarHeight:28,
   ShowLastBtn:false,
   ShowPlayBtn:true,
   ImagePath:"player/images/",
   ShowZoomBtn:true,
   IniAutoFit:1,
   Color1:"rgb(32, 32, 32)",
   ShowDetailedStepsInPractice:1,
   ShowVolumeBar:true,
   ShowVolumeBtn:true,
   ShowFirstBtn:true,
   AlwaysShowSlideList:true,
   ShowSpeedBtn:true,
   ShowSlideListBtn:true,
   IniSlideListShow:1,
   ShowCCBtn:true,
   NavInPractice:true,
   DockPaneSize:250
}
;
var bSendToLMS = false;
var ePackageType = PackageType.NONE;
 
var PlayModes = {
	DEMO:	1,
	TUT:	2,
	PRAC:	4,
	TEST:	8
};

var UIPos = {
	//These correspond to value list in manifest
	TOP: 0,
	LEFT: 1,
	RIGHT: 2,
	BOTTOM: 3,
	FLOATING: 4,
	NONE: 5
};

/* Tin Can configuration */

// ActivityID that is sent for the statement's object
var TINCAN_COURSE_ID = "";

// CourseName for the activity
var TINCAN_COURSE_NAME = {"en-US": ""};

// CourseDesc for the activity
var TINCAN_COURSE_DESC = {"en-US": ""};

// Pre-configured LRSes that should receive data, added to what is included
// in the URL and/or passed to the constructor function.
//
// An array of objects where each object may have the following properties:
//
//    endpoint: (including trailing slash '/')
//    auth:
//    allowFail: (boolean, default true)
//    version: (string, defaults to high version supported by TinCanJS)
var TINCAN_RECORD_STORES = [];
