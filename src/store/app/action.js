import axios from 'axios';

const url = 'https://tegiai-gi4coglcca-de.a.run.app';

const storeDataChat = (payload) => ({ type: 'STORE_CHAT', datas: payload })
const setLoading = () => ({ type: 'LOADING' })


export const storeChat = (payload) => {
    return (dispatch) => {
        dispatch(storeDataChat(payload))
        axios.post(`${url}/add_input`, {
            'text' : payload.text
        })
            .then(res => {
                dispatch(setLoading)
                let lastIndex = res.data.messages.length - 1
                console.log(res.data.messages[lastIndex])
                dispatch(storeDataChat(res.data.messages[lastIndex]))
                // readIttLoud(res.data.messages[lastIndex].text)
                console.log(lastIndex)
            })
    }
}

