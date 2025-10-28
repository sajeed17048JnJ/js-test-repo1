const currentCookieDomain = getCookieDomain(); 
  //console.log("currentCookieDomain recognized" , currentCookieDomain);
  SalesforceInteractions.init({
    
      cookieDomain: currentCookieDomain,
      
    }).then(() => { 

    // const siteDomain = "https://jxp-demo-dev.janssenos.com";
       //var isAccordian3Clicked,isAccordian2Clicked,isAccordian1Clicked;
       //var modal_shown = "False";

  
  let siteBConfig = {
      
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


             }
             
           
        ]
        
        
        
  };

  const getQueryStringParam = (paramName) => {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get(paramName);
        };
        
		const SetQueryStringVal = () => {
		/* temp SubscriberKey */
        if(window.location.href.includes("SFMC_Key=") && getQueryStringParam('SFMC_Key')) {
            var srcValue2 = getQueryStringParam('SFMC_Key');
            console.log ('Value of SFMC key is',srcValue2 );
         
                const evgEvent = {
                    interaction: {
                        name: "EmailClickSK"
                     },
                    user: {
                        identities: {
                            sfmcContactKey: srcValue2
                           // emailAddress: srcValue3
                        }
                    }
                };
                SalesforceInteractions.sendEvent(evgEvent);
            }
            
       // }      
		}
		

  
     
  /*
        Check for URL change every 2 seconds. If URL has changed, reinitialize beacon and sitemap.
    */
    const handleSPAPageChange = () => {
        let url = window.location.href;
        const urlChangeInterval = setInterval(() => {
            if (url !== window.location.href) {
                url = window.location.href;
                SalesforceInteractions.reinit();
            }
        }, 2000);
    }
  SetQueryStringVal();
 handleSPAPageChange();


 SalesforceInteractions.initSitemap(siteBConfig);
/*if (currentCookieDomain === "jxp-demo-dev.janssenos.com") {
        SetQueryStringVal();
        handleSPAPageChange();
        SalesforceInteractions.initSitemap(siteAConfig);
    
  } else if (currentCookieDomain === "jxp-demo-dev2.janssenos.com") {
        SetQueryStringVal();
       handleSPAPageChange();
        SalesforceInteractions.initSitemap(siteBConfig);
    
  } */
});   
    
  }
};
