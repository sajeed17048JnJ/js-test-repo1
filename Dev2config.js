  let siteAConfig = {
      
    global: {
              onActionEvent: (actionEvent) => {

                let purl = window.location.pathname;

                if (purl != '/') {
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.attributes = actionEvent.user.attributes || {};
                    actionEvent.user.attributes.User_LastPageViewed = window.location.pathname;
                }
                var jsonString = JSON.stringify(actionEvent);
                console.log("Sent ActionEvent " + jsonString);
                return actionEvent;

            },  
           
         contentZones: [
                  
                        {name: "global_infobar_top_of_page"},
                        {name: "global_popup"},
                       
                    ],

        /*  listeners: [
                
                SalesforceInteractions.listener("click", "#accept-recommended-btn-handler", (event) => {
                    console.log("Updated Consents Allow All");

                    const consent = {
                        provider: "OneTrust",
                        purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                        status: SalesforceInteractions.ConsentStatus.OptIn
                    };
                    SalesforceInteractions.updateConsents(consent);
                    SalesforceInteractions.sendEvent({ interaction: { name: "Allow All Cookies" } });
                    const jsonString = JSON.stringify(event);
                    console.log("Sent ActionEvent " + jsonString);
                    SalesforceInteractions.reinit();
                }),

                /* popup cookie allow */
            /*    SalesforceInteractions.listener("click", "#onetrust-accept-btn-handler", (event) => {

                    console.log("Consent PopUp Accept");

                    const consent = {
                        provider: "OneTrust",
                        purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                        status: SalesforceInteractions.ConsentStatus.OptIn
                    };
                    SalesforceInteractions.updateConsents(consent);
                    SalesforceInteractions.sendEvent({ interaction: { name: "Cookie Consent Popup Accept clicked" } });
                    
                    //SalesforceInteractions.reinit();
                }),

                /* popup cookie reject */
            /*   SalesforceInteractions.listener("click", "#onetrust-reject-all-handler", (event) => {
                    console.log("Updated Consents Reject All");

                        const consent = {
                        provider: "OneTrust",
                        purpose: SalesforceInteractions.mcis.ConsentPurpose.Personalization,
                        status: SalesforceInteractions.ConsentStatus.OptOut
                    };
                    SalesforceInteractions.updateConsents(consent);
                    SalesforceInteractions.sendEvent({ interaction: { name: "Cookie Consent Popup Reject clicked" } });
                    //SalesforceInteractions.reinit();
                }),
                
            /*   SalesforceInteractions.DisplayUtils.pageExit(600).then(function (event) { 
                      if(modal_shown == 'False'){
                         console.log("value of modal2shown" +modal_shown);
                         //document.triggerModal('modal-1'); 
                         SalesforceInteractions.sendEvent({ interaction: { name: "ExitToIntent React Modal-1" }}); 
                   //     }
                   // })
           ] */
    },
    pageTypeDefault: {
      name: "default",
      interaction : { name : "HomePage_" + window.location.hostname},
      contentZones: [
                 
                      { name: "dynamic_section", selector: ".jxp-sfmc-content" },
                      
                    ],
    },

       pageTypes: [
           
          
             {
                    name: "home",
                    isMatch: () => /^\/(index\.html)?$/.test(window.location.pathname),
                    interaction : { name : "HomePage_" + window.location.hostname},
                        contentZones: [
                      /*  { name: "global_popup1"},
                        { name: "global_popup2"},
                        { name: "global_popup3"},
                        */
                 
                      { name: "dynamic_section", selector: ".jxp-sfmc-content" },
                      
                    ],

              /*     listeners: [
                       
                        /* Accordian1 Clicked */
                         /*SalesforceInteractions.listener("click", "#accordian-1 > h2 > button", (event) => {
                       // isAccordian1Clicked ='True';
                        SalesforceInteractions.sendEvent({ interaction: { name: "Homepage Accordian1 Clicked | HomePage" }});
                        SalesforceInteractions.reinit();
                      /*document.triggerModal('modal-1');
                        SalesforceInteractions.sendEvent({ interaction: { name: "React Modal-1" }}); */
                    
                 /* }),
                   
                        /* Accordian2 Clicked */
                     /*    SalesforceInteractions.listener("click", "#accordian-2 > h2 > button", (event) => {
                        //isAccordian2Clicked ='True';
                        SalesforceInteractions.sendEvent({ interaction: { name: "Homepage Accordian2 Clicked | HomePage" }}); 
                        SalesforceInteractions.reinit();
                      SalesforceInteractions.DisplayUtils.pageExit(100).then(function (event) { 
                             document.triggerModal('modal-2'); 
                                   modal_shown = 'True';
                             SalesforceInteractions.sendEvent({ interaction: { name: "ExitToIntent React Modal-2" }});
                         });  
                       /* document.triggerModal('modal-2'); 
                       
                        SalesforceInteractions.sendEvent({ interaction: { name: "React Modal-2" }}); */
                         
                         
                
               // }), 
                
                        /* Accordian3 Clicked */
                      /*  SalesforceInteractions.listener("click", "#accordian-3 > h2 > button", (event) => {
                        //isAccordian3Clicked ='True';
                        SalesforceInteractions.sendEvent({ interaction: { name: "Homepage Accordian3 Clicked | HomePage" }});
                        SalesforceInteractions.reinit();
                           SalesforceInteractions.DisplayUtils.pageExit(200).then(function (event) { 
                               if (isAccordian2Clicked == "True" && isAccordian3Clicked === "True") {
                                    document.triggerModal('modal-3'); 
                                    modal_shown = 'True';
                                    SalesforceInteractions.sendEvent({ interaction: { name: "ExitToIntent React Modal-3" }});
                               }
                         });  
                       /* document.triggerModal('modal-3');
                        SalesforceInteractions.sendEvent({ interaction: { name: "React Modal-3" }}); */
                       
               //}), 

                // ],  
             }
             
           
        ]
        
        
        
  };
