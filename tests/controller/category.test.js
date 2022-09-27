const categoryController=require('../../controllers/category.controller');
const categoryService=require('../../service/category.service');
const{mockRequest,mockResponse}=require('./mocker')


const allCategoriesData = [
    {
        id: 1,
        name: 'Electronics'
    },
    {
        id: 2,
        name: 'Groceries'
    },
];

const categoryPayload={
    name:"sports",
    description:"all sports items will be available"
}

// test('when get getallcategories is called it should returnvalue',async()=>{
//     const spy=jest.spyOn(categoryService,'getAllCategories').mockReturnValue(allCategoriesData);
//     const req=mockRequest();
//     const res=mockResponse()
//     const result=await categoryController.getCategories(req,res);
//     expect(spy).toHaveBeenCalled();
//     expect(result.json).toHaveBeenCalled();
//     expect(result.json).toHaveBeenCalledWith({
//         message: 'Successfully fetched the categories',
//         success: true,
//         code: 200,
//         data: allCategoriesData
    
//     })
// })

test('when getCategories is called, it should return all the categories', async()=>{
    const spy = jest.spyOn(categoryService, 'getAllCategories').mockReturnValue(allCategoriesData);
    const req = mockRequest();
    const res = mockResponse();
    const result = await categoryController.getCategories(req, res);
    expect(spy).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message:"sucessfully fetched",
        sucess:true,
        code:200,
       date:allCategoriesData
    
    });
}); 

test('createCategories create the category',async()=>{
    const spy=jest.spyOn(categoryService,'createAllCategories').mockReturnValue(categoryPayload);
    const req=mockRequest();
    const res=mockResponse();
    const result=await categoryController.createCategories(req,res);
    expect(spy).toHaveBeenCalled();
   

    
    expect(result.json).toHaveBeenCalled();
    expect(result.json).toHaveBeenCalledWith({
        message:"sucessfully created data",
        sucess:true,
        code:201,
       date:categoryPayload
    })

})