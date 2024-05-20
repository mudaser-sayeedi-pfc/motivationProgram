const catalyst = require("zcatalyst-sdk-node");
module.exports = (context, basicIO) => {
  const catalystApp = catalyst.initialize(context);
  const requestDetails = catalystApp
    .userManagement()
    .getSignupValidationRequest(basicIO);
  if (requestDetails) {
    if (requestDetails.user_details.email_id.includes("@")) {
      // The actions that occur in the event of a successful authentication can be customized
      basicIO.write(
        JSON.stringify({
          status: "success",
          user_details: {
            first_name: requestDetails.user_details.first_name,
            last_name: requestDetails.user_details.last_name,
            email_id: requestDetails.user_details.email_id,
            role_identifier: "App User", // If you want to override the default role, you can specify the role id/name here.
            org_id: "", // If you are providing the Org ID, make sure it is copied exactly from the console.
          },
        })
      );
    } else {
      // The user has failed authentication
      basicIO.write(
        JSON.stringify({
          status: "failure",
        })
      );
    }
  }
  context.close();
};

// module.exports = (context, basicIO) => {
// 	/*
//         BASICIO FUNCTIONALITIES
//     */
// 	basicIO.write('Hello from index.js'); //response stream (accepts only string, throws error if other than string)
// 	basicIO.getArgument('argument1'); // returns QUERY_PARAM[argument1] || BODY_JSON[argument1] (takes argument from query and body, first preference to query)
// 	/*
//         CONTEXT FUNCTIONALITIES
//     */
// 	console.log('successfully executed basicio functions');
// 	context.close(); //end of application
// };
