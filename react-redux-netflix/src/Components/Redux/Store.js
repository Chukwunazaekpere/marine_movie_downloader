import React from "react"
import { createStore } from 'redux';
import CombinedReducers from "./Reducers/ReducersIndex";

export const store = createStore(CombinedReducers)

const store = {
    movies: [
        {
            id: 1,
            title: "Captain Phillips",
            'Based on': "A Captain's Duty; by Richard Phillips; Stephan Talty",
            description: "Somali pirates attack Maersk Alabama, a container ship, \
                        while it is on its course to Kenya. Richard Phillips, \
                        the captain of the ship, uses his wits to negotiate with \
                         them to save his crew",
            trailer: "https://www.youtube.com/watch?v=GEyM01dAxp8",
            url: "https://www.netflix.com/watch/70243460?source=35",
            image: "https://www.google.com/search?q=captain+Phillips&rlz=1C1CHBD_enNG916NG916&sxsrf=ALeKk03d2SoZFI7gXw7-Y5HovD-5AAx4RQ:1608687919244&tbm=isch&source=iu&ictx=1&fir=5l3NCkdNu03WVM%252CVz5sukCMbMQWzM%252C%252Fm%252F0hyq1j4&vet=1&usg=AI4_-kSdWgN5mBr5Y2_bmqYBL1i_cLrjvw&sa=X&ved=2ahUKEwjui-y__eLtAhUCzYUKHTdbDeEQ_B16BAg4EAE#imgrc=5l3NCkdNu03WVM"
        },
        {
            id: 2,
            title:
            description:
            url: 
            image: "https://www.google.com/search?rlz=1C1CHBD_enNG916NG916&sxsrf=ALeKk03d2SoZFI7gXw7-Y5HovD-5AAx4RQ:1608687919244&q=The+Perfect+Storm&stick=H4sIAAAAAAAAAONgFuLSz9U3yKgsNMwyUeIEsS0LLY1ytKSyk6300zJzcsGEVVFqTmJJaopCcWpJ8SpGqTSr7NTK8vyiFKvc_LLM1GIrkEbDrLTipEWsgiEZqQoBqUVpqcklCsEl-UW5AATIVQBmAAAA&sa=X&ved=2ahUKEwjui-y__eLtAhUCzYUKHTdbDeEQxA0wGnoECCQQBg#"
        },{
            id: 3,
            title:
            description:
            url:
            image:
        },{
            id: 4,
            title:
            description:
            url:
            image:
        },{
            id: 5,
            title:
            description:
            url:
            image:
        },{
            id: 6,
            title:
            description:
            url:
            image:
        },{
            id: 7,
            title:
            description:
            url:
            image:
        },{
            id: 8,
            title:
            description:
            url:
            image:
        },{
            id: 9,
            title:
            description:
            url:
            image:
        },{
            id: 10,
            title:
            description:
            url:
            image:
        },{
            id: 11,
            title:
            description:
            url:
            image:
        },
    ],

    cart: {

    }
}