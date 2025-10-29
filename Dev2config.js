// ---------- SITE B CONFIG ----------

    window.siteBConfig = {

    //   ...siteAConfig,

    //   global: {

    //     ...siteAConfig.global,

    //     contentZones: [

    //       ...siteAConfig.global.contentZones,

    //       { name: "extra_zone", selector: ".sc-867e14c-0.LhOcl" }, // extra zone for Dev2 site

    //     ],

    //   },

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

                      { name: "Hero", selector: ".sc-867e14c-0" },

                    ],

    },

       pageTypes: [
 
             {

                    name: "home",

                    isMatch: () => /^\/(index\.html)?$/.test(window.location.pathname),

                    interaction : { name : "HomePage_" + window.location.hostname},

        contentZones: [

                      { name: "dynamic_section", selector: ".jxp-sfmc-content" },

                      { name: "Hero", selector: ".sc-867e14c-0" },

                    ],

             }

        ]

    };
 

