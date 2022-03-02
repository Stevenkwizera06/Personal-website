const updatePost = document.getElementById('updatePost');
const title = document.getElementById('title');
const summary = document.getElementById('summary');
const body = document.getElementById('body');

const id = location.hash.slice(1);

db.collection('add').doc(id).get().then(res => {
    title.value = res.data().title;
    summary.value = res.data().summary
    body.value = res.data().body;
})

updatePost.addEventListener('click',(e)=>{
    e.preventDefault();
    db.collection('add').doc(id).update({
        author: "Kwizera Steven",
        body: body.value,
        updateAt: new Date(),
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
        title: title.value
    }).then(res=>{
        title.value = "";
        body.value = "";
        alert("Post updated");
        location.href = "./dashboard.html";
    }).catch(err=>{
        alert("Error: " + err.message)
    })
})