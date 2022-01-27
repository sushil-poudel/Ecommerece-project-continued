const INITIAL_STATE={
    sections:[
        {
            title:'Slippers',
            imageUrl:'https://cf.shopee.ph/file/a8fe4bebc07beb52cc72ce80b6484ebb',
            id:'1',
            linkUrl:'slippers'
        },
        {
            title:'shoes',
            imageUrl:'https://i.insider.com/5d28a1a2a17d6c64f226db38?width=600&format=jpeg&auto=webp',
            id:'2',
            linkUrl:''
        },
        {
            title:'Watches',
            imageUrl:'https://5.imimg.com/data5/FQ/MA/XB/SELLER-40442106/img-20191226-wa0019-500x500.jpg',
            id:'3',
            linkUrl:''
        },
        {
            title:'Sweaters',
            imageUrl:'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/4/Seller/18147054/Images/18147054_0_woolen-sweater-for-men.jpg',
            id:'4',
            size:'large',
            linkUrl:''
        },
        {
            title:'Pants',
            imageUrl:'https://5.imimg.com/data5/TF/IW/MY-17554435/men-casual-pant-500x500.jpg',
            id:'5',
            size:'large',
            linkUrl:''
        }
    ]
};

const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;