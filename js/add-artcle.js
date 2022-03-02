    db.settings({ timestampsInSnapshots: true});

    let articleDiv = document.querySelector(".dash-main")

    const renderBlog = function(doc){
        let div = document.createElement('div');
        div.className = 'dshb-single';
        let title = document.createElement('h5');
        // title.setAttribute("id", "email");
        title.className="dshb-title"
        let anchor = document.createElement('a')
        anchor.textContent = doc.data().title


        title.appendChild(anchor)

        let summary = document.createElement('p')
        summary.className="dshb-summary"
        summary.textContent = doc.data().summary
    
        let image = document.createElement('img')
        image.className="dshb-img"
        image.setAttribute("src","/images/10 trend languages.png")

        let divLogo = document.createElement('div')
        divLogo.className="logo"

        let imageL = document.createElement('img')
        imageL.setAttribute("src","images/wrote.png")
        let author = document.createElement('h3');
        author.textContent="Kwizera Steven"

        divLogo.appendChild(imageL)
        divLogo.appendChild(author)

        let divAction = document.createElement('div')
        divAction.className="action-btn"

        let form = document.createElement('form')
        
        let aForm = document.createElement('a')
        aForm.setAttribute("href","./edit-article.html")
        aForm.className ="edit-btn"
        aForm.textContent="Edit"
        aForm.addEventListener('click',(e)=>{
            e.preventDefault();
            location.href = `/edit-article.html#${doc.id}`
        })


        let aInput = document.createElement('input')
        aInput.setAttribute("value","delete")
        aInput.setAttribute("type","submit")
        aInput.className ="del-btn"

    // event listener to delet post
        aInput.addEventListener("click",(e)=>{
            e.preventDefault();
            db.collection('add').doc(doc.id).delete()
            .then(res=>{
                alert("Post deleted");
                location.reload();
            }).catch(err=>{
                alert("Error: " + err.message)
            })
        })


        form.appendChild(aForm)
        form.appendChild(aInput)

        divAction.appendChild(form)

        let divDesc = document.createElement('div')
        divDesc.className = "dshb-description"

        divDesc.appendChild(title);
        divDesc.appendChild(summary);
        divDesc.appendChild(divLogo)
        divDesc.appendChild(divAction)


        div.appendChild(image)
        div.appendChild(divDesc)

        // console.log(doc.data().title)
        // console.log(div)
        articleDiv.appendChild(div)
    }
    
    db.collection('add').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderBlog(doc);
            console.log(doc)
        });
    });
const articleLists = document.querySelector('#articleLists');
const form = document.querySelector('.add-form')



if(form){


    // saving data
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('add').add({
            title:form.title.value,
            summary:form.summary.value,
            body:form.body.value

        })
        console.log(form.title.value);
    })
}

