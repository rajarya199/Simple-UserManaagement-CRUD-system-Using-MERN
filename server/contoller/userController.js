

//request - what to send along with api [data that come from frontend ]

//response-- data to send from backend to frontend
export const addUser=(request,response)=>{
    const user=request.body
    console.log(user)
    console.log('hello')
}