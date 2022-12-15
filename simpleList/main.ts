import {ArrayList} from "./ArrayList";

interface Post{
    title: string
}

let arryList = new  ArrayList<Post>();
arryList.add({title: 'Lập trình JS'});
arryList.add({title: 'Lập trình PHP'});
arryList.add({title: 'Lập trình Java'});
console.log(arryList.container)