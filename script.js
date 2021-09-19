// var DateTime = luxon.DateTime;

// var _time = DateTime.fromFormat('20:00:00', 'H:mm:ss', { zone: 'system'}).toUTC().toString();
// console.log(DateTime.fromFormat('20:00:00', 'H:mm:ss', { zone: 'system'}).toMillis());

// const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAB/ElEQVR4AdSVg44YQBRFz9reDWrFtW3btq2gthvURpz+RO02qL0OapuLl6lGKZZnosm9GT5QKogjAB8BxPEHVCODdfjYyD2q4YdWvCSHHIbiYozoL2mFh2l8Ubb2uOjEW/F8YQxWgjhIjowMOXggTVnDaVL5wBtSOcFqmhAI1OSBcu4gCI1YjivxDAlAP1Jlpo879AHKckfNjxPLbxxVwkGCSZBF3eMYccRxSs1O8Bs1eccXZgMVSFOWJ+xlMDWIJo4aDGEPj5Vym4qEcIgcPtMEje7ywClki/UrW4hBJ4YtfBU9Wx5gOXOxEsJFsT2nLS7a8lw8pwnByUKxfKYhgrBcnlQhNFKnmo+DBBUhi8G7ECxS0ZaIlVUqikL8C8kTpIt3FVZuiTgC/AsJw8V7EwuVRfpIxB8tFMlH8VfFoIcIR8G1kMYR8ffAYJII+/94of3in+T6+vV/vNB68S/6uxN9ZjMxf3qino43SmIP38jhERMIMN6oJwZV7b8m1OWCqJdpBEKE+9fghoojGwGM46nos3+Joxv+yA5yptBOXlMJCCLTF9mJvNFyzeb5mWtvScCOMnylIT4aqOxfiJMQLhRIPdIqZCw6sVqF9FKRVK1mx/2o2U+UkkpF/KgHPYm/iyTyx/R39LW79OMvCaQJa8jdYaSathVc0448AACB4jnRzrdDDgAAAABJRU5ErkJggg==';

// const medsList = [
//     {
//         "person": "TEST",
//         "name": "TEST MED",
//         "time": "0:55:00"
//     },
//     // {
//     //     "person": "MA",
//     //     "name": "PANTOCID",
//     //     "time": "8:00:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "AZMARDA",
//     //     "time": "11:00:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "AZMARDA",
//     //     "time": "19:30:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "REMETOR",
//     //     "time": "22:00:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "CARDIVAS",
//     //     "time": "10:45:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "CARDIVAS",
//     //     "time": "19:15:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "EPTUS",
//     //     "time": "9:30:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "INAPURE",
//     //     "time": "13:00:00"
//     // },
//     // {
//     //     "person": "MA",
//     //     "name": "MONOTRATE",
//     //     "time": "18:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "PAN-40",
//     //     "time": "8:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "ROSUVAS",
//     //     "time": "22:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "MEBEVERINE",
//     //     "time": "11:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "MEBEVERINE",
//     //     "time": "19:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "TORPLAT-A",
//     //     "time": "9:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "TORPLAT-A",
//     //     "time": "21:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "NATRILIX-SR",
//     //     "time": "9:30:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "PRAZOPRES-XL",
//     //     "time": "13:00:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "STANLIP",
//     //     "time": "20:30:00"
//     // },
//     // {
//     //     "person": "DEUTA",
//     //     "name": "BECADEXAMIN",
//     //     "time": "21:30:00"
//     // },
// ]

(async (icon) => {
    const medsList = [
        {
            "person": "TEST",
            "name": "TEST MED",
            "time": "10:58:00"
        },
        {
            "person": "DEUTA",
            "name": "BECADEXAMIN",
            "time": "10:58:50"
        },
    ];

    var DateTime = luxon.DateTime;

    var _time = DateTime.fromFormat('20:00:00', 'H:mm:ss', { zone: 'system'}).toUTC().toString();
    console.log(DateTime.fromFormat('20:00:00', 'H:mm:ss', { zone: 'system'}).toMillis());

    if (!('serviceWorker' in navigator)) {
        return alert('You need a browser that supports service workers for this demo to work.');
    }  
    if ('showTrigger' in Notification.prototype) {
        alert('NOTIFICATION PROTOTYPE PRESENT');
    }
    
    if (!('showTrigger' in Notification.prototype)) {
      return alert('You need a browser with Notification Triggers support for this demo to work.');
    }
  
    // const form1 = document.querySelectorAll('form')[0];
    // const form2 = document.querySelectorAll('form')[1];
    // const seconds = document.querySelector('input[type="text"]');
    // const list = document.querySelector('tbody');
  
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('serviceworker.js');
    });


    const reminderFunc = async (/* e */) => {
        // e.preventDefault();
        let {state} = await navigator.permissions.query({name: 'notifications'});
        if (state === 'prompt') {
          await Notification.requestPermission();
        } 
        state = (await navigator.permissions.query({name: 'notifications'})).state;
        if (state !== 'granted') {
          return alert('You need to grant notifications permission for this demo to work.');
        }  
        const sec = 5; // parseInt(seconds.value, 10);
        const registration = await navigator.serviceWorker.getRegistration();
        medsList.map((med) => {
            console.log(med);
            registration.showNotification(`${med.person} MEDICINE: ${med.name}`, {
                tag: Math.random().toString().substr(2),
                body: `MEDICINE REMINDER`,
                showTrigger: new TimestampTrigger(DateTime.fromFormat(med.time, 'H:mm:ss', { zone: 'system'}).toMillis()),
                icon: icon
              });
        })
      }

    var w;    
    function startWorker() {
        if (typeof(Worker) !== "undefined") {
            if (typeof(w) == "undefined") {
                w = new Worker("demoWorker.js");
                w.onmessage = function(event) {
                    console.log("TRIGGERED: ", event);
                    reminderFunc();
                };
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support HTML5 Web Workers";
            }
        }
    }

    startWorker();
  
    // form1.addEventListener('submit', async (e) => {
    //   e.preventDefault();
    //   let {state} = await navigator.permissions.query({name: 'notifications'});
    //   if (state === 'prompt') {
    //     await Notification.requestPermission();
    //   } 
    //   state = (await navigator.permissions.query({name: 'notifications'})).state;
    //   if (state !== 'granted') {
    //     return alert('You need to grant notifications permission for this demo to work.');
    //   }  
    //   const sec = parseInt(seconds.value, 10);
    //   const registration = await navigator.serviceWorker.getRegistration();
    //   registration.showNotification(`Triggered for ${new Date(Date.now() + sec * 1000).toLocaleTimeString()}`, {
    //     tag: Math.random().toString().substr(2),
    //     body: `Scheduled at ${new Date().toLocaleTimeString()}.`,
    //     showTrigger: new TimestampTrigger(Date.now() + sec * 1000),
    //     icon: icon
    //   });
    // });
  
    // form2.addEventListener('submit', async (e) => {
    //   e.preventDefault();
    //   // Ugly, don't do this in practice, but makes the cancel action easy
    //   window.notifications = null;
    //   const registration = await navigator.serviceWorker.getRegistration();
    //   window.notifications = await registration.getNotifications({
    //     includeTriggered: true,
    //   });
    //   if (Array.isArray(window.notifications)) {
    //     let html = '';
    //     window.notifications.forEach((notification, i) => {
    //       html += `
    //           <tr${notification.showTrigger.timestamp < Date.now() ? ' class="passed"' : ''}>
    //             <td>${notification.tag}</td>
    //             <td>${notification.title}</td>
    //             <td>${(new Date(notification.timestamp)).toLocaleTimeString()}</td>
    //             <td>${(new Date(notification.showTrigger.timestamp)).toLocaleTimeString()}</td>
    //             <td>
    //               <button onclick="notifications[${i}].close(); this.closest('tr').remove();" type="button">
    //                 Cancel
    //               </button>
    //             </td>
    //           </tr>`;
    //     });
    //     list.innerHTML = html;
    //   }
    // });
  })('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAB/ElEQVR4AdSVg44YQBRFz9reDWrFtW3btq2gthvURpz+RO02qL0OapuLl6lGKZZnosm9GT5QKogjAB8BxPEHVCODdfjYyD2q4YdWvCSHHIbiYozoL2mFh2l8Ubb2uOjEW/F8YQxWgjhIjowMOXggTVnDaVL5wBtSOcFqmhAI1OSBcu4gCI1YjivxDAlAP1Jlpo879AHKckfNjxPLbxxVwkGCSZBF3eMYccRxSs1O8Bs1eccXZgMVSFOWJ+xlMDWIJo4aDGEPj5Vym4qEcIgcPtMEje7ywClki/UrW4hBJ4YtfBU9Wx5gOXOxEsJFsT2nLS7a8lw8pwnByUKxfKYhgrBcnlQhNFKnmo+DBBUhi8G7ECxS0ZaIlVUqikL8C8kTpIt3FVZuiTgC/AsJw8V7EwuVRfpIxB8tFMlH8VfFoIcIR8G1kMYR8ffAYJII+/94of3in+T6+vV/vNB68S/6uxN9ZjMxf3qino43SmIP38jhERMIMN6oJwZV7b8m1OWCqJdpBEKE+9fghoojGwGM46nos3+Joxv+yA5yptBOXlMJCCLTF9mJvNFyzeb5mWtvScCOMnylIT4aqOxfiJMQLhRIPdIqZCw6sVqF9FKRVK1mx/2o2U+UkkpF/KgHPYm/iyTyx/R39LW79OMvCaQJa8jdYaSathVc0448AACB4jnRzrdDDgAAAABJRU5ErkJggg==');
  