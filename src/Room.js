import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom';



function Room() {
    const { roomID } = useParams();
    let myMeeting = async (element) => {
        const appID = 229155980;
        const serverSecret = "8ecad24090fc919a7acc3cd17816cb26";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "SIH Project 2023");
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: element,
            // sharedLinks: [
            //     {
            //         name: 'Personal link',
            //         url:
            //             window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
            //     },
            // ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }




    return (
        <div ref={myMeeting}>Room</div>
    )
}

export default Room