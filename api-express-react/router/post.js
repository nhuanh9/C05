const express = require('express');
const router = express.Router();

const posts = [
    {
        id: Date.now(),
        title: 'Bài viết số 1',
        content: 'Nội dung bài viết số 1',
        image: 'https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg',
        time: new Date().toISOString()
    },
    {
        id: Date.now() + 1,
        title: 'Bài viết số 2',
        content: 'Nội dung bài viết số 2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        time: new Date().toISOString()
    },
    {
        id: Date.now() + 2,
        title: 'Bài viết số 3',
        content: 'Nội dung bài viết số 3',
        image: 'https://image.sggp.org.vn/w1000/Uploaded/2024/dudbexqdre/2023_05_27/8c-2701.jpg.webp',
        time: new Date().toISOString()
    },
    {
        id: Date.now() + 3,
        title: 'Bài viết số 4',
        content: 'Nội dung bài viết số 4',
        image: 'https://static01.nyt.com/images/2023/07/01/travel/22hours-paris-tjzf/22hours-paris-tjzf-superJumbo.jpg',
        time: new Date().toISOString()
    },
    {
        id: Date.now() + 4,
        title: 'Bài viết số 5',
        content: 'Nội dung bài viết số 5',
        image: 'https://canthologistics.com/wp-content/uploads/2021/01/gui-hang-di-Paris.jpg',
        time: new Date().toISOString()
    }
];

router.get("/", (req, res) => {
    res.json(posts);
});

router.get("/:id", (req, res) => {
    const id = +req.params.id;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send({ message: 'Post not found' });
    }
});

router.post("/", (req, res) => {
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        time: new Date().toISOString()
    };
    posts.push(newPost);
    res.status(201).send(newPost);
});

router.delete("/:id", (req, res) => {
    const id = +req.params.id;
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
        posts.splice(index, 1);
        res.send({ message: 'Post deleted', id: id });
    } else {
        res.status(404).send({ message: 'Post not found' });
    }
});

router.put("/:id", (req, res) => {
    const id = +req.params.id;
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
        posts[index].title = req.body.title;
        posts[index].content = req.body.content;
        posts[index].image = req.body.image;
        posts[index].time = new Date().toISOString();
        res.send(posts[index]);
    } else {
        res.status(404).send({ message: 'Post not found' });
    }
});

module.exports = router;
