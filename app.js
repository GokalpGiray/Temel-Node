import axios from "axios";

async function getData(user_id){
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);

    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);

    const users = [];
    const test = post.find(e => e.id === user_id)
    users.push(user);
    users.push(test);
    
    console.log(users);
};

export default getData;
