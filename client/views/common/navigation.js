

// Used only on OffCanvas layout
Template.navigation.events({

    'click .close-canvas-menu' : function(){
        $('body').toggleClass("mini-navbar");
    },
    'click .serverName' : function(event) {
        console.log(event.currentTarget.classList[1]);
        sessionStorage.setItem('serverSelected', event.currentTarget.classList[1]);
    },

    "click #add": function (event, template) {
        var serverName = document.getElementById('formGroupExampleInput').value;
        var currentUser = Meteor.userId();
        if (serverNameCollection.find({ serverNameCollection: serverName }).count() > 0) {
          toastr.error("You have used this API url for a different API already", 'Duplicate URL');
        }
        else {
        //   var e = document.getElementById("getOrPost");
        //   var getOrPost = e.options[e.selectedIndex].text;
        //   var a = document.getElementById("usageOrStatus");
        //   var usageOrStatus = a.options[a.selectedIndex].text;
        //   var authentication = document.getElementById('authorization').value;
        //   var b = document.getElementById("addingFrequency");
        //   var frequency = b.options[b.selectedIndex].text;

            console.log('asdasd');
            Meteor.call("addServerNames", serverName, currentUser, function (error, result) {
                if (error) {
                  console.log("error", error);
                }
                if (result) {
          
                }
              });
        }
      }
});

console.log('dfasd');

Template.navigation.helpers({
    servers: function(){
        let serverNames = serverNameCollection.find({}).fetch();
        console.log(serverNameCollection.find({}).fetch());
        return serverNames;
    }
});
